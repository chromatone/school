<script setup>
import { data } from './programs.data'

</script>

<template lang='pug'>
.flex.flex-col.gap-8.my-8
  a.p-4.bg-dark-50.text-xl.no-underline.rounded-xl.shadow-lg.hover-brightness-130.flex.flex-col.gap-4(
    v-for="program in data" :key="program"
    :href="`/programs/${program.slug}/`"    ) 
      .text-8xl.font-normal {{ program.slug }}
      .text-2xl.font-bold {{ program.title }}
      .text-sm {{ program.description }}
</template>