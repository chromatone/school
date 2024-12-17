<script setup>
import { updateUser } from '@directus/sdk';
import { useUser } from '../use/useUser';

const { user, userDB } = useUser()

async function updateField(field = 'first_name', text = '') {
  await userDB.request(updateUser(user.value?.id, {
    [field]: text
  }))
}
</script>

<template lang='pug'>
.flex.flex-col.gap-2(v-if="user")
  .text-xl USER
  label(for="email") Email
  input.p-2.rounded#email(:value="user.email" type="text" disabled)
  label(for="first_name") First name
  input.p-2.rounded#first_name(v-model="user.first_name" type="text" @change="updateField('first_name', $event.target.value)")
  label(for="last_name") Last name
  input.p-2.rounded#last_name(v-model="user.last_name" type="text" @change="updateField('last_name', $event.target.value)")
  label(for="location") Location
  input.p-2.rounded#location(v-model="user.location" type="text" @change="updateField('location', $event.target.value)")
  label(for="birthday") Birthday
  input.p-2.rounded#birthday(v-model="user.birthday" type="date" @change="updateField('birthday', $event.target.value)")
  pre {{ user }}
</template>