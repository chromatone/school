<script setup async>
import { computed, onMounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItems, readItem, createItem } from '@directus/sdk'
import { useHash } from './useHash';
import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';

const { hash } = useHash()

const session = computedAsync(async () => await createDirectus('https://schooldb.chromatone.center/')
  .with(rest())
  .request(readItem('classes', hash.value, {
    fields: ['*', 'course.*']
  })), [])

const { user, userDB } = useUser()

const data = computedAsync(async () => user.value && await userDB.request(readItem('classes', hash.value, {
  fields: ['students.*', 'students.directus_users_id.*']
})), [])

const joined = ref(false)

async function join() {

  await userDB.request(createItem('classes_directus_users', {
    classes_id: session.value.id,
    directus_users_id: user.value.id
  }))
  joined.value = true
}

</script>

<template lang='pug'>
.flex.flex-col.gap-4
  a.text-xl {{ session?.course?.title }}
  .text-2xl.font-bold {{ session.title }} 
  .text-lg {{ format(session.date || Date.now(), 'dd-MMM-yyyy') }}
  .flex.flex-wrap.gap-2.p-2 
    .p-2.bg-dark-800.rounded-xl(v-for="student in data?.students" :key="student") {{ student.directus_users_id.first_name }} {{ student.directus_users_id.last_name }}
  button.p-2.border-2(@click="join()" v-if="user && !joined") Join
</template>