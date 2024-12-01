<script setup async>
import { readItems } from '@directus/sdk';
import { client } from '../database'
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';

const result = ref('')

onMounted(async () => {
  result.value = await client.request(readItems('classes'));
})

</script>

<template lang='pug'>
.text-2xl Classes 
.flex.flex-col.gap-2 
  .p-2.text-xl(v-for="cl in result" :key="cl") {{ cl.title }} @ {{ format(cl.date, 'EE dd/MM/y hh:mm') }}
</template>