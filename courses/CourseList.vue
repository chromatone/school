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
      fields: ['*', 'program.title', 'classes.*', 'classes.module.title']
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
.text-2xl.flex.p-2.mt-8
  .font-bold Available courses
  .flex-1 
  .op-80 {{ courses.length }}
.flex.gap-4.py-8.p-4.max-w-100vw.overflow-x-scroll
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="courses.length == 0"  key="spinner")
    a.no-underline.shadow-lg.p-4.flex.flex-col.rounded-xl.gap-2.flex-1(
      style="flex: 1 0 200px"
      v-for="course in courses" :key="course.id" :href="`/courses/#${course.id}`" :class="{ [course.id == hash ? 'bg-orange-300' : 'bg-light-500']: true }") 
      .text-2xl.flex.flex-wrap.items-baseline.gap-2 
        .op-70 {{ course.program.title }} 
        .px-2.py-1.bg-light-900.rounded-lg.text-sm {{ course.level }}
      .flex.w-full 
        .text-sm Starts {{ useTimeAgo(course.start_date) }}
        .flex-1 
      .flex-1
      button.text-left.p-2.rounded-xl.shadow.bg-orange-200.self-start  
        .op-80 {{ course.classes_count }}  weekly classes
        .font-bold {{ Number(course?.price) }} THB

</template>