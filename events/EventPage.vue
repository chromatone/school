<script setup>
import { computedAsync } from '@vueuse/core';
import { useHash } from '../use/useHash';
import { createDirectus, readItem, rest } from '@directus/sdk';
import { format } from 'date-fns';

const hash = useHash()

const event = computedAsync(async () => hash.value && await createDirectus('https://schooldb.chromatone.center/')
  .with(rest())
  .request(readItem('events', hash.value, {
    fields: ['*']
  })), [])
</script>

<template lang='pug'>
.i-la-spinner.animate-spin.m-4.text-2xl(v-if="!event")
.flex.flex-col.p-2.max-w-45ch.gap-2(v-else)
  .text-2xl {{ event?.title }}
  .text-lg {{ format(event?.date, 'HH:mm EEEE @ dd MMMM yyyy') }}

  .text-md.font-bold Place: {{ event?.place }}
  .text-md.font-bold Duration: {{ Number(event?.duration) }} hr
  .text-md.font-bold Price: {{ event?.price > 0 ? `${event?.price}THB` : 'FREE' }}

  .text-md {{ event?.description }}
</template>