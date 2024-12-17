<script setup>
import { data } from './programs.data'

</script>

<template lang='pug'>
.text-2xl.flex.p-2.mt-8
  .font-bold Programs
  .flex-1 
  .op-80 {{ data.length }}
p Multimedia requires different perspectives and focus points to be present in creation process in order to produce a decent product - be it a music performance/recording, a video clip or an interactive web-app. 
.flex.max-w-100vw.gap-4.overflow-x-scroll.p-4
  a.p-4.bg-light-800.text-xl.no-underline.rounded-xl.shadow-lg.hover-brightness-130.flex.flex-col.gap-4(
    style="flex: 1 0 200px"
    v-for="program in data" :key="program"
    :href="`/programs/${program.slug}/`"    ) 
      .text-8xl.font-thin.op-50 {{ program.slug }}
      .text-2xl.font-bold {{ program.title }}
      .text-sm {{ program.description }}
      .flex-1
      .op-80.text-xs {{ program.courses.length }} course available
</template>