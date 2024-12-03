<script setup async>
import { onMounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

const session = ref([])

onMounted(async () => {
  session.value = await createDirectus('https://schooldb.chromatone.center/')
    .with(rest())
    .request(readItem('classes', '4acf37e9-3485-4079-b65a-d8dc51baec47'))
})

</script>

<template lang='pug'>
.text-2xl Class
.flex.flex-col.gap-2 
  .p-2.text-xl {{ session.title }} @ {{ session.date }}
</template>