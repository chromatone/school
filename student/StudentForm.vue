<script setup>
import { updateUser } from '@directus/sdk';
import { useUser } from '../use/useUser';
import { reactive, ref, watch } from 'vue';

const data = reactive({
  first_name: '',
  last_name: ''
})

const { user, userDB } = useUser()

watch(user, u => {
  data.first_name = u.first_name
  data.last_name = u.last_name
  data.birthday = u.birthday
  data.location = u.location
})

const saved = ref({})

const edit = defineModel({ type: Boolean, default: false })

async function submit() {
  saved.value = await userDB.request(updateUser(user.value.id, data))
  edit.value = false
}

</script>

<template lang='pug'>

.flex.gap-2.items-center.p-2.bg-light-300.rounded-lg.m-2(v-if="user")
  img.rounded-full(:src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=50&height=50`" v-if="user.avatar")
  .w-50px.rounded-full.bg-orange-200.h-50px.flex.items-center.justify-center.text-2xl(v-else)
    .i-la-user
  .flex.flex-col
    .text-2xl {{ user?.first_name }} {{ user?.last_name }}
    .text-xs.op-50 {{ user.location }} 
  .flex-1
  button(@click="edit = !edit") edit
form.bg-light-600.flex.flex-col.gap-4.p-2.m-2.rounded-lg.max-w-45ch(@submit.prevent="submit()" v-if="edit || !user?.first_name || !user?.last_name")
  slot
  .flex.flex-col.gap-2
    .flex.flex-col.gap-2.flex-1
      label(for="first_name") First Name
      input#first_name.border-2(:class="{ 'border-yellow': !data.first_name, 'border-orange': saved?.first_name && (data.first_name != saved?.first_name) }" type="text" v-model="data.first_name" placeholder="Fill in your first name, please")
    .flex.flex-col.gap-2.flex-1
      label(for="last_name") Last Name
      input#last_name.border-2(:class="{ 'border-yellow': !data.last_name, 'border-orange': saved?.last_name && (data.last_name != saved?.last_name) }" type="text" v-model="data.last_name" placeholder="Fill in your last name, please")
    .flex.flex-col.gap-2.flex-1
      label(for="location") Location
      input#location.border-2(:class="{ 'border-yellow': !data.location, 'border-orange-600': saved?.location && (data.location != saved?.location) }" type="text" v-model="data.location" placeholder="At which area of the island do you live?")
  label(for="birthday") Birthday
  input#birthday.border-2(:class="{ 'border-yellow': !data.birthday, 'border-orange-600': saved?.birthday && (data.birthday != saved?.birthday) }" type="date" v-model="data.birthday")
  button.p-2.bg-orange-300.rounded-xl.shadow-lg.hover-brightness-110.active-brightness-130(type="submit") Save 


</template>

<style lang="postcss" scoped>
input {
  @apply p-2 rounded-xl bg-light-400
}
</style>