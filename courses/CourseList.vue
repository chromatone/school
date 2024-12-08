<script setup>
import { onMounted, reactive, ref } from 'vue';
import { format } from 'date-fns';
import { useWS } from '../use/useWS';

const { ws } = useWS()

const courses = reactive([])

onMounted(async () => {
  const { subscription } = await ws.subscribe('courses', {
    uid: 'courses-list-sub',
    query: {
      sort: ['start_date'],
      fields: ['*', 'program.*']
    }
  })

  for await (const item of subscription) {
    switch (item.event) {
      case 'init': Object.assign(courses, item.data); break;
      case 'update': item.data.forEach(d => Object.assign(courses.find(v => v.id == d.id), d)); break;
    }
  }
})

</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-8
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="courses.length == 0"  key="spinner")
    a.no-underline.shadow-lg.p-4.text-xl.flex.flex-col.rounded-xl.bg-dark-200.gap-2(v-for="course in courses" :key="course.id" :href="`#${course.id}`") 
      .text-2xl.flex.flex-wrap.items-baseline.gap-2 
        .op-70 {{ course.program.title }} 
        .px-2.py-1.bg-dark-800.rounded-lg.text-sm {{ course.level }}
      .flex.w-full 
        .text-xl Starts on {{ format(course.start_date, 'EEEE dd MMMM yyyy') }}
        .flex-1 
        .text-lg 
      .text-xl.op-80 {{ course.classes_count }} classes, 4-8 students
</template>