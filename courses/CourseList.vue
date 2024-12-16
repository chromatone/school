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
.text-2xl.flex.py-2.mt-8
  .font-bold Current courses
  .flex-1 
  .op-80 {{ courses.length }}
.flex.flex-wrap.gap-4.py-8
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="courses.length == 0"  key="spinner")
    a.no-underline.shadow-lg.p-4.flex.flex-col.rounded-xl.bg-light-700.gap-2.flex-1(v-for="course in courses" :key="course.id" :href="`/courses/#${course.id}`" :class="{ 'bg-light-500': course.id == hash }") 
      .text-2xl.flex.flex-wrap.items-baseline.gap-2 
        .op-70 {{ course.program.title }} 
        .px-2.py-1.bg-light-800.rounded-lg.text-sm {{ course.level }}
      .flex.w-full 
        .text-sm Starts {{ useTimeAgo(course.start_date) }}
        .flex-1 
      button.text-left.p-2.rounded-xl.shadow.bg-light-200 {{ course.classes_count }}  weekly classes - 2400 THB

</template>