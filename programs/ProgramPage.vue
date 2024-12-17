<script setup>
import { format } from 'date-fns';
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()



</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .text-8xl.font-thin.op-80.mt-12 {{ $params.slug }}
  .text-4xl.m-0 {{ $params.title }}
  p.text-lg {{ $params.description }}
  .max-w-45ch
    slot
  h3.text-2xl Courses
  .flex.flex-col.gap-4
    a.no-underline.p-2.rounded-xl.bg-light-50.flex.flex-col.gap-2(v-for="course in $params.courses" :key="course" :href="`/courses/#${course.id}`") 
      .flex.flex-wrap.gap-4
        .text-lg {{ $params.title }} {{ course.level }}
        .flex-1
        .flex.flex-wrap.gap-2.items-center
          img.rounded-full.w-30px.h-30px(
            v-if="course?.teacher?.avatar"
            :src="`https://schooldb.chromatone.center/assets/${course?.teacher?.avatar}?width=30&height=30`")
          .p-0 {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}
      .text-sm Starts on {{ format(course?.start_date, 'EEEE dd MMMM yyyy') }}
      button.p-2.rounded-xl.shadow.bg-light-400 {{ course.classes_count }}  weekly classes - 2400 THB
      //- .text-xs {{ course }}
      //- .text-xs {{ $params }}
</template>