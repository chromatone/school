<script setup async>

const props = defineProps({
  list: { type: Array, default: () => ([]) }
})

</script>

<template lang='pug'>
.text-2xl Classes 
.flex.flex-col.gap-2 
  .p-2.text-xl(v-for="course in list" :key="course") {{ course.title }}
</template>