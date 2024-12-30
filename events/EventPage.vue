<script setup>
import { computedAsync, useStorage } from '@vueuse/core';
import { useHash } from '../use/useHash';
import { createDirectus, createItem, readItem, rest } from '@directus/sdk';
import { format, isFuture, } from 'date-fns';
import { reactive } from 'vue';
import parsePhoneNumber from 'libphonenumber-js'

const hash = useHash()

const client = createDirectus('https://schooldb.chromatone.center/')
  .with(rest())

const event = computedAsync(async () => hash.value && await
  client.request(readItem('events', hash.value, {
    fields: ['*']
  })), [])

const participation = reactive({
  name: '',
  phone: '',
  comment: ''
})

const participating = useStorage(`participating`, {})

const errors = reactive([])

async function participate() {
  if (!participation.name) { errors.push('No name set!'); return }

  const parsedPhone = parsePhoneNumber(participation.phone)

  if (!parsedPhone || !parsedPhone.isValid()) { errors.push('Invalid phone number'); return }

  let part = await client.request(createItem('participations', {
    name: participation?.name,
    comment: participation?.comment,
    phone: parsedPhone?.formatInternational(),
    event: event.value?.id
  }))
  if (part?.ok) {
    participating.value = { ...participating.value, [`${hash.value}`]: participation }
  }
}


</script>

<template lang='pug'>
.i-la-spinner.animate-spin.m-4.text-2xl(v-if="!event")
.flex.flex-col.p-2.max-w-45ch.gap-4.m-4(v-else)
  .flex.items-center
    .text-2xl {{ event?.title }} 
    .flex-1 
  .text-md {{ event?.description }}

  .text-lg(v-if="event?.date") {{ format(event?.date, 'HH:mm EEEE @ dd MMMM yyyy') }}

  .text-md.font-bold Place: {{ event?.place }}
  .text-md.font-bold Duration: {{ Number(event?.duration) }} hr
  .text-md.font-bold Price: {{ event?.price > 0 ? `${event?.price}THB` : 'FREE' }}

  form.flex.flex-col.gap-2.my-8.bg-dark-50.bg-op-20.p-2.rounded-lg(@submit.prevent="participate()" v-if="!participating[hash] && isFuture(event?.date)")
    .text-xl.font-bold Participate
    label(for="name") Your full name*
    input#name.p-2.rounded.shadow(type="text" required placeholder="John Doe" v-model="participation.name")
    label(for="phone") Your phone number*
    input#phone.p-2.rounded.shadow(type="tel" required placeholder="+66 99 876 54 32" v-model="participation.phone")
    label(for="comment") Your comment
    textarea#comment.p-2.rounded.shadow(v-model="participation.comment" placeholder="Something that's better for us to know in advance")
    button.p-2.rounded-lg.bg-orange(type="submit") Submit
    .text-sm.op-90.flex.flex-caol.gap-1(v-if="errors.length") 
      .p-1.bg-red-300.rounded(v-for="err in errors" :key="err") {{ err }}

  .p-4.bg-orange-200(v-if="participating[hash]")
    .text-xl Thanks for your application for the event! See you there!
</template>