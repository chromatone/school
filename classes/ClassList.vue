<script setup>
import { onMounted, reactive, ref } from 'vue';
import { format } from 'date-fns';
import { useWS } from '../use/useWS';

const { ws } = useWS()

const classes = reactive([])

onMounted(async () => {
  const { subscription } = await ws.subscribe('classes', {
    uid: 'classes-list-sub',
    query: {
      sort: ['date'],
      fields: ['*', 'module.title', 'course.level', 'course.program.title']
    }
  })

  for await (const item of subscription) {
    switch (item.event) {
      case 'init': Object.assign(classes, item.data); break;
      case 'update': item.data.forEach(d => Object.assign(classes.find(v => v.id == d.id), d)); break;
    }
  }
})

</script>

<template lang='pug'>
.flex.flex-col.gap-4.py-8
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="classes.length == 0" key="spinner")
    a.no-underline.shadow-lg.p-4.text-xl.flex.flex-col.rounded-xl.bg-dark-200.gap-2(v-for="cl in classes" :key="cl.id" :href="`/class/#${cl.id}`")
      .flex.w-full 
        .text-xl {{ format(cl.date, ' HH:mm EEEE') }}
        .flex-1 
        .text-lg {{ format(cl.date, 'dd MMMM yyyy') }}
      .text-md.op-80.flex.flex-wrap.items-baseline.gap-2 
        .op-70 {{ cl.course.program.title }} 
        .px-2.py-1.bg-dark-800.rounded-lg.text-sm {{ cl.course.level }}
      .text-3xl {{ cl.module.title }}
</template>