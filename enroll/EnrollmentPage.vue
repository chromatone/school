<script setup>
import { computed, ref } from 'vue';
import { useUser } from '../use/useUser';
import { readItem, readItems, rest } from '@directus/sdk';
import { useHash } from '../use/useHash';
import QrcodeVue from 'qrcode.vue'
import { computedAsync, useTimeAgo } from '@vueuse/core';
import { format } from 'date-fns';
import AuthForm from '../student/AuthForm.vue';

const { user, userDB } = useUser()


const enrollments = computedAsync(async () => user.value && userDB.request(readItems('enrollments', {
  fields: ['*', 'course.*', 'course.classes.date', 'course.classes.module.title', 'course.program.title']
})).then(result => result || []).catch(e => console.log(e)))

const hash = useHash()

const enrollment = computedAsync(async () =>
  (hash.value && user.value)
    ? userDB.request(readItem('enrollments', hash.value, {
      fields: ['course.*', 'course.classes.*', 'course.classes.module.title', '*', 'course.program.title',]
    }))
      .then(result => result || null)
      .catch(error => {
        console.error("Error fetching enrollment:", error)
        return false
      })
    : null,
);

</script>

<template lang='pug'>
template(v-if="!user") 
  .text-2xl Please login to see available enrollments
  AuthForm.m-4
template(v-else-if="enrollment") 
  a.m-2(href="/enroll/#") Back to all enrollments
  .text-xl.op-40.m-2 Enrollment found
  .flex.flex-col.gap-2.p-4.bg-light-300.max-w-45ch.rounded-lg.mx-2.shadow-lg
    .flex.gap-2.items-center
      .text-2xl {{ enrollment?.course?.program?.title }} 
      .op-50.text-2xl {{ enrollment?.course?.level }}
      .flex-1 
      .font-bold.text-xs {{ enrollment?.status }}
    .flex.gap-2 
      .text-sm Starts on {{ format(enrollment?.course?.start_date, 'EEE dd MMM yyyy') }} 
      .op-50 {{ useTimeAgo(enrollment?.course?.start_date) }}
    .flex.flex-col.gap-2.font-mono.text-sm  
      .flex.gap-2.p-1.rounded.shadow.bg-light-400(v-for="cls in enrollment?.course?.classes" :key="cls") 
        .op-60 {{ format(cls?.date, 'HH:mm EEE dd MMM yy') }} 
        .font-bold {{ cls?.module?.title }}


.flex.flex-wrap.gap-1(v-if="user && !enrollment")
  a.border-1.rounded.border-dark-200.font-mono.p-2.no-underline.flex.flex-col.gap-2.items-center(v-for="en in enrollments" :key="en" :href="`/enroll/#${en?.id}`")

    .flex.gap-2.items-center
      QrcodeVue(:value="`https://school.chromatone.center/enroll/#${en?.id}`" :size="auto" render-as="svg")
      .flex.flex-col.gap-2.flex-1
        .text-sm.uppercase.font-bold {{ en?.course?.program?.title }} {{ en?.course?.level }} course
        .flex.gap-2.text-xs(v-for="cls in en?.course?.classes" :key="cls") 
          .op-60 {{ format(cls.date, 'HH:mm EEE dd MMM yy') }} 
          .font-bold {{ cls.module?.title }}
    .text-sm.self-end(style="letter-spacing:2px;") {{ en?.id }} 

  svg(
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 210 297"
    version="1.1"

    )
    g(v-for="(en, e) in enrollments" :key="en" :transform="`translate(${e % 2 * 105 + 2}, ${Math.floor(e / 2) * 74 + 2})`")

      rect(
        rx="2" stroke-width=".25"
        x="1" width="100" :height="70" stroke="#000" fill="#fff")
      QrcodeVue(:value="`https://school.chromatone.center/enroll/#${en?.id}`" :x="62" y="21" :size="36" render-as="svg")

      text(x="4" y="8" font-size="6") Creative Multimedia School
      text(x="4" y="16" font-size="4.5" ) 
        tspan(font-weight="bold") {{ en?.course?.program?.title }}  
        tspan(dx="2") {{ en?.course?.level }} course
      text(x="4" y="65" font-size="4.3" ) {{ en?.id }}

      g(v-for="(cls, c) in en?.course?.classes" :key="cls") 
        text(x="12" :y="28.5 + c * 8" font-size="4") {{ format(cls.date, 'HH:mm EEE dd MMM yy') }} 
        .font-bold {{ cls.module?.title }}
        rect(width="4" height="4" fill="none" stroke="black" stroke-width=".5" rx="2" x="5" :y="25 + c * 8")
</template>