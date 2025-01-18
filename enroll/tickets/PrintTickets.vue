<script setup>
import { computed, ref, reactive } from 'vue';
import { useUser } from '../../use/useUser';
import { readItems, } from '@directus/sdk';
import QrcodeVue from 'qrcode.vue'
import { computedAsync, } from '@vueuse/core';
import { format } from 'date-fns';
import AuthForm from '../../student/AuthForm.vue';

import { jsPDF } from 'jspdf'
import 'svg2pdf.js'

const doc = new jsPDF()

function savePDF(id, filename) {
  const element = document.getElementById(id)
  doc
    .svg(element, {
      width: 210,
      height: 297
    })
    .then(() => {
      doc.save(filename + '.pdf')
    })
}


const { user, userDB } = useUser()


const enrollments = computedAsync(async () => user.value && userDB.request(readItems('enrollments', {
  fields: ['*', 'course.*', 'course.classes.date', 'course.classes.module.title', 'course.program.title', 'course.program.color'],
})).then(result => result || []).catch(e => console.log(e)))

const grouped = computed(() => Object.groupBy(enrollments.value || [], en => en.course.program.title))

const saveSVG = id => {
  if (!document.getElementById(id)) return;
  Object.assign(document.createElement('a'), {
    href: `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + new XMLSerializer().serializeToString(document.getElementById(id)))}`,
    download: id
  }).click();
};

</script>

<template lang='pug'>
template(v-if="!user") 
  .text-2xl Please login to see available enrollments
  AuthForm.m-4
.flex.flex-wrap.gap-12.w-100vw(v-if="user")
  .flex.flex-col.gap-2.w-full.p-2(v-for="(group, g) in grouped" :key="group") 
    .flex.gap-2.items-center
      .font-bold {{ g }} 
      .font-normal {{ group.length }}/8
      .flex-1
      button.shadow.cursor-pointer.px-2.bg-light-700.hover-bg-light-200.active-bg-light-50.rounded-xl.flex.items-center.gap-1(@click="saveSVG(group[0]?.course?.program?.title)")
        .i-la-camera.text-xl
        .text-xs Save SVG

      button.shadow.cursor-pointer.px-2.bg-light-700.hover-bg-light-200.active-bg-light-50.rounded-xl.flex.items-center.gap-1(@click="savePDF(group[0]?.course?.program?.title, g)")
        .i-la-file-pdf.text-xl
        .text-xs Save PDF


    svg.w-full(

      font-family="Commissioner, sans-serif"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 210 297"
      version="1.1"
      :id="group[0]?.course?.program?.title"
      )

      rect(width="210" height="297" fill="#fff")

      clipPath#clip(clipPathUnits="objectBoundingBox")
        rect(width="1" rx="0.01" ry=".03" height="1" fill="#fff")

      line(x1="105" x2="105" y1="0" y2="297" stroke="#aaa" stroke-width=".1")

      line(v-for="l in 8" :key="l" :x1="0" x2="210" :transform="`translate(0,${l * 74})`" y1="0" y2="0" stroke="#aaa" stroke-width=".1")

      g(v-for="(en, e) in group" :key="en" :transform="`translate(${e % 2 * 105 + 1.5}, ${Math.floor(e / 2) * 74 + 3})`")

        rect(rx="2" stroke-width=".25" x="1" width="100" :height="32" :fill="en?.course?.program?.color") 
        QrcodeVue.rounded-1px(:value="`https://school.chromatone.center/enroll/#${en?.id}`" x="75" y="33.5" :size="25" render-as="svg" :margin="2")

        text(x="4" y="6.5" font-size="4") 
          tspan(font-weight="bold") Visual Music School 
          tspan @ Place Coworking
        text(x="4" y="22" font-size="6" font-weight="bold" ) {{ en?.course?.program?.title }}  
        text(x="4" y="29"  ) 
          tspan(font-size="4.5") {{ en?.course?.level }} course 
          tspan(opacity="0.5" font-size="4") {{ e + 1 }}/{{ group.length }}

        g(v-for="(cls, c) in en?.course?.classes" :key="cls" :transform="`translate(0, ${c * 6 + 36})`") 
          text(x="10" :y="2" font-size="3" font-weight="bold")  {{ cls.module?.title }} 
          //- text(x="37" :y="2" font-size="3.5" text-anchor="end" opacity="0.6") {{ format(cls.date, 'HH:mm EEE dd MMM yy') }}
          rect(width="4" height="4" fill="none" stroke="black" stroke-width=".2" rx="10" x="4" :y="-1.2")

        g#id(transform="translate(0,60)")
          rect(width="98" x="2" height="8" rx="2" fill="#ccc")
        text(x="18" y="65" font-family="monospace" font-size="3" ) {{ en?.id }}
</template>