<script setup>
import { ref, watch } from 'vue';
import { useUser } from './useUser';
import { readMe } from '@directus/sdk';
import { useRouter } from 'vitepress';

const email = ref('')
const password = ref('')

const { user, userDB } = useUser()

async function login() {
  await userDB.login(email.value, password.value)
  user.value = await userDB.request(readMe())
}

const router = useRouter()

watch(user, u => u && router.go('/student/'))
</script>

<template lang='pug'>

form.flex.flex-col.gap-2(@submit.prevent.stop="login()")
  h2.text-2xl Auth
  input(type="email" v-model="email" placeholder="Your email")
  input(type="password" v-model="password" placeholder="Your password")
  button(type="submit") LOGIN 

pre {{ user }}
</template>

<style scoped lang="postcss">
input {
  @apply p-2 bg-dark-500 rounded-lg
}
</style>