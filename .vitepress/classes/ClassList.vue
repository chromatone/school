<script setup>
import { onMounted, reactive } from 'vue';
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
      fields: ['*', 'module.title', 'course.level', 'course.teacher.*', 'course.program.title', 'course.program.color']
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
.flex.gap-4.py-8.overflow-x-scroll.max-w-100vw.min-h-40
  transition-group(name="fade")
    .i-la-spinner.text-4xl.animate-spin.absolute(v-if="classes.length == 0" key="spinner")
    a.no-underline.shadow-lg.flex.flex-col.rounded-xl.transition(v-for="cl in classes" :key="cl.id" :href="`#${cl.id}`" style="flex: 1 0 220px" :class="{ [hash == cl.id ? 'bg-orange-200' : 'bg-light-200']: true }")
      .flex.w-full.font-mono.p-2
        .text-sm {{ format(cl.date, ' HH:mm EEE') }}
        .flex-1 
        .text-sm {{ format(cl.date, 'dd MMM yy') }}
      .flex.flex-col.p-2(:style="{ backgroundColor: cl?.course?.program?.color }")
        .flex.items-start.gap-2
          .op-60 {{ cl?.course?.program?.title }} 
          .px-2.py-1.bg-light-800.rounded-lg.text-xs {{ cl?.course?.level }}
      .flex-1.text-lg.p-2.bg-light-700 {{ cl?.module?.title }}
      .flex.flex-wrap.gap-2.items-center.p-2 
        img.rounded-full.w-30px.h-30px(
          v-if="cl?.course?.teacher?.avatar"
          :src="`https://schooldb.chromatone.center/assets/${cl?.course?.teacher?.avatar}?width=30&height=30`")
        .p-0 {{ cl?.course?.teacher?.first_name }} {{ cl?.course?.teacher?.last_name }}

</template>