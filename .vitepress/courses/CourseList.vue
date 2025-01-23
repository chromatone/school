<script setup>
import { onMounted, reactive, ref } from 'vue';
import { format } from 'date-fns';
import { useWS } from '../use/useWS';
import { useTimeAgo } from '@vueuse/core';
import { useHash } from '../use/useHash';

const { ws } = useWS()

const courses = reactive([])

onMounted(async () => {
  const { subscription } = await ws.subscribe('courses', {
    uid: 'courses-list-sub',
    query: {
      sort: ['start_date'],
      fields: ['*', 'program.slug', 'program.color', 'classes.*', 'classes.module.title']
    }
  })

  for await (const item of subscription) {
    switch (item.event) {
      case 'init': Object.assign(courses, item.data); break;
      case 'update': item.data.forEach(d => Object.assign(courses.find(v => v.id == d.id), d)); break;
    }
  }
})

const hash = useHash()

</script>

<template lang='pug'>
.text-2xl.flex.p-2.mt-8(v-if="!hash")
  .font-bold Available courses
  .flex-1 
  .op-80 {{ courses.length }}
.flex.gap-4.py-8.p-4.max-w-100vw.overflow-x-scroll.min-w-100vw(v-if="!hash")
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="courses.length == 0"  key="spinner")
    a.font-normal.no-underline.shadow-lg.flex.flex-col.rounded-xl.flex-1.hover-brightness-140.overflow-hidden.bg-light-300(
      style="flex: 1 0 200px"
      v-for="course in courses" :key="course.id" :href="`/courses/#${course.id}`" :class="{ [course.id == hash ? 'brightness-120' : 'brightness-100']: true }") 
      .flex.flex-wrap.items-baseline.gap-2.pt-4.px-2.pb-2.relative(:style="{ backgroundColor: course?.program?.color }") 
        .text-3em.op-90.font-thin {{ course?.program?.slug }} 
        .absolute.top-2.right-2.px-2.py-1.bg-light-900.rounded-lg.text-sm {{ course?.level }}
      .flex.w-full.p-2
        .text-sm Starts {{ useTimeAgo(course.start_date) }}
        .flex-1 
      .flex-1
      button.m-2.text-left.p-2.rounded-xl.shadow.bg-orange-200.self-start  
        .op-80 {{ course.classes_count }}  weekly classes
        .font-bold {{ Number(course?.price) }} THB

</template>