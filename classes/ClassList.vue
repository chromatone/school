<script setup async>
import { readItems } from '@directus/sdk';
import { client } from '../database'
import { onMounted, ref } from 'vue';

const result = ref('')

onMounted(async () => {
  result.value = await client.request(readItems('classes'));
})
</script>

<template lang='pug'>
.text-2xl Classes 
.flex.flex-col.gap-2 
  .p-2.text-xl(v-for="course in result" :key="course") {{ course.title }}
</template>