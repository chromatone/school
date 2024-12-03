<script setup>
import { ref } from 'vue';
import { useUser } from './useUser';
import { readMe, registerUser } from '@directus/sdk';

const email = ref('')
const password = ref('')
const register = ref(false)
const registered = ref(false)

const { user, userDB } = useUser()

async function submit() {
  if (register.value) {
    await userDB.request(registerUser(email.value, password.value))
    registered.value = true
  } else {
    await userDB.login(email.value, password.value)
    user.value = await userDB.request(readMe())
  }
}

</script>

<template lang='pug'>
.p-4.max-w-80(v-if="user") {{ user }}
form.flex.flex-col.gap-4(@submit.prevent.stop="submit()" v-else)
  h2.text-2xl {{ register ? 'Sign Up' : "Sign In" }}
  input(type="email" v-model="email" placeholder="Your email")
  input(type="password" v-model="password" placeholder="Your password")
  button.p-2.border-2(type="submit") {{ register ? 'REGISTER' : "LOGIN" }}
  .flex.gap-1
    .op-30 Don't have an account?
    a.cursor-pointer.underline(@click="register = !register") {{ register ? 'Login' : "Register" }}

</template>

<style scoped lang="postcss">
input {
  @apply p-2 bg-dark-500 rounded-lg
}
</style>