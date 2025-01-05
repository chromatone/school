<script setup>
import { useTimeAgo } from '@vueuse/core';
import { data } from './programs.data'
import { format } from 'date-fns';
import ContactMe from '../contact/ContactMe.vue';

</script>

<template lang='pug'>
.text-2xl.flex.p-2.mt-8(style="flex: 1 0 100%")
  .font-bold Programs
  .flex-1 
  .op-80 {{ data.length }}
slot 
.flex.max-w-100vw.gap-8.overflow-x-scroll.p-4.overscroll-x-contain
  .bg-light-800.text-xl.no-underline.rounded-xl.overflow-hidden.shadow-lg.hover-brightness-110.flex.flex-col(
    style="flex: 1 0 300px"
    v-for="program in data" :key="program"
    )
    a.p-3.no-underline(:style="{ backgroundColor: program?.color }" :href="`/programs/${program.slug}/`" )
      .text-8xl.font-thin.op-80 {{ program.slug }}

    .font-normal.no-underline.flex.flex-col.overflow-hidden.bg-light-300(v-for="course in program?.courses" :key="course.id" ) 
      a.no-underline.flex.flex-wrap.items-baseline.gap-2.pt-4.px-2.pb-2.relative(
        :href="`/courses/#${course.id}`"
        :style="{ backgroundColor: course?.program?.color }") 

        a.no-underline.text-2xl.font-bold(:href="`/programs/${program.slug}/`" ) {{ program.title }}

        .text-2xl.mr-8.line-height-1em.op-90.font-thin <b>{{ course?.level }}</b> course

        .text-sm {{ program.description }}


        .flex.flex-wrap.gap-2.items-center with {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}

      .no-underline.flex.flex-col.gap-1.p-1
        .flex.flex-col.p-1.text-sm.bg-light-600.rounded-lg.shadow(v-for="cls in course?.classes" :key="cls")
          .p-0.font-mono {{ format(cls.date, 'HH:mm EEE dd MMM yy') }} 
          .font-bold {{ cls?.module?.title }}
      a.no-underline.flex.flex-col.w-full.p-2(:href="`/courses/#${course.id}`")
        .text-sm 1 month
        .text-sm.op-80 {{ course.classes_count }} classes 
        .font-bold {{ Number(course?.price) }} THB
        .text-sm Starts {{ useTimeAgo(course.start_date) }}
        .mt-1 {{ course?.enrollments?.length }}/{{ course?.capacity }} enrolled
      .flex-1

.flex.flex-col.gap-2.p-2
  a.no-underline.p-4.bg-orange-300.text-lg.m-4.flex.shadow.rounded-xl.max-w-45ch.flex.flex-col.gap-0(href="/#how-to-find-us") 
    .p-0.font-bold Please buy and activate your enrollment card at the counter before course starts

        
</template>