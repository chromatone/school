<script setup>
import { onMounted, reactive, ref } from 'vue';
import { format } from 'date-fns';
import { useWS } from '../use/useWS';
import { useHash } from '../use/useHash';

const { ws } = useWS()

const classes = reactive([])

const hash = useHash()

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
.flex.gap-4.py-8.overflow-x-scroll
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="classes.length == 0" key="spinner")
    a.no-underline.shadow-lg.p-4.flex.flex-col.rounded-xl.bg-light-200.gap-2.transition(v-for="cl in classes" :key="cl.id" :href="`#${cl.id}`" style="flex: 1 0 220px" :class="{ 'contrast-120': hash == cl.id }")
      .flex.w-full.font-mono
        .text-sm {{ format(cl.date, ' HH:mm EEE') }}
        .flex-1 
        .text-sm {{ format(cl.date, 'dd MMM yy') }}
      .flex.items-center
        .op-70.text-sm {{ cl.course.program.title }} 
        .px-2.py-1.bg-light-800.rounded-lg.text-sm {{ cl.course.level }}

      .text-md.op-80.flex.flex-wrap.items-baseline.gap-2 

      .text-2xl {{ cl.module.title }}
      button.p-2.bg-light-800.rounded-xl.shadow-lg One time visit - 800 THB
</template>