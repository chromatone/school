<script setup async>
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItems } from '@directus/sdk'

const classes = ref([])

onMounted(async () => {
  classes.value = await createDirectus(import.meta.env.VITE_DB_URL)
    .with(rest())
    .request(readItems('classes'))
})

</script>

<template lang='pug'>
.text-2xl Classes 
.flex.flex-col.gap-2 
  .p-2.text-xl(v-for="cl in classes" :key="cl") {{ cl.title }} @ {{ format(cl.date, 'EE dd/MM/y hh:mm') }}
</template>