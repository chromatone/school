<script setup>
import { updateUser } from '@directus/sdk';
import { useUser } from '../use/useUser';
import { reactive, watch } from 'vue';

const data = reactive({
  first_name: '',
  last_name: ''
})

const { user, userDB } = useUser()

watch(user, u => {
  data.first_name = u.first_name
  data.last_name = u.last_name
  data.email = u.email
  data.birthday = u.birthday
})

async function submit() {
  await userDB.request(updateUser(user.value.id, data))
}
</script>

<template lang='pug'>
.text-xs {{ user }}
.text-lg {{ data.email }}
form.flex.flex-col.gap-4.p-4(@submit.prevent="submit()")
  .text-xl Please fill in this form to apply to the school
  .flex.flex-wrap.gap-2
    .flex.flex-col.gap-2.flex-1
      label(for="first_name") First Name
      input#first_name(type="text" v-model="data.first_name")
    .flex.flex-col.gap-2.flex-1
      label(for="last_name") Last Name
      input#last_name(type="text" v-model="data.last_name")
  label(for="birthday") Birthday
  input#birthday(type="date" v-model="data.birthday")
  button(type="submit") Submit
</template>

<style lang="postcss" scoped>
input {
  @apply p-2 rounded-xl bg-dark-400
}
</style>