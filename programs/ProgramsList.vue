<script setup>
import { useTimeAgo } from '@vueuse/core';
import { data } from './programs.data'
import { format } from 'date-fns';

</script>

<template lang='pug'>
.text-2xl.flex.p-2.mt-8
  .font-bold Programs
  .flex-1 
  .op-80 {{ data.length }}
p Multimedia requires different perspectives and focus points to be present in creation process in order to produce a decent product - be it a music performance/recording, a video clip or an interactive web-app. 
.flex.max-w-100vw.gap-2.overflow-x-scroll.p-4
  .bg-light-800.text-xl.no-underline.rounded-xl.overflow-hidden.shadow-lg.hover-brightness-110.flex.flex-col(
    style="flex: 1 0 260px"
    v-for="program in data" :key="program"
    )
    a.p-3.no-underline(:style="{ backgroundColor: program?.color }" :href="`/programs/${program.slug}/`" )
      .text-8xl.font-thin.op-80 {{ program.slug }}
    .p-3.flex.flex-col.gap-2
      a.no-underline.text-2xl.font-bold(:href="`/programs/${program.slug}/`" ) {{ program.title }}
      .text-sm {{ program.description }}
    .flex-1
    .op-80.text-xs.mx-2 {{ program.courses.length }} course available to enroll

    a.m-2.font-normal.no-underline.shadow-lg.flex.flex-col.rounded-xl.overflow-hidden.bg-light-300(

      v-for="course in program?.courses" :key="course.id" :href="`/courses/#${course.id}`") 
      .flex.flex-wrap.items-baseline.gap-2.pt-4.px-2.pb-2.relative(:style="{ backgroundColor: course?.program?.color }") 
        .text-2rem.mr-8.line-height-1em.op-90.font-thin <b>{{ course?.level }}</b> course
        .flex.flex-wrap.gap-2.items-center with {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}
      .flex.flex-col.gap-1.p-1
        .flex.flex-col.p-1.text-sm.bg-light-600.rounded-lg.shadow(v-for="cls in course?.classes" :key="cls")
          .p-0.font-mono {{ format(cls.date, 'HH:mm EEE dd MMM yy') }} 
          .font-bold {{ cls?.module?.title }}
      .flex.flex-col.w-full.p-2
        .text-sm 1 month
        .text-sm.op-80 {{ course.classes_count }}  weekly classes
        .font-bold {{ Number(course?.price) }} THB
        .text-sm Starts {{ useTimeAgo(course.start_date) }}
        .flex-1 
      .flex-1
      button.m-2.text-left.p-2.rounded-xl.shadow.bg-orange-200.self-start Enroll now

        
</template>