<script setup>
import { ref } from 'vue';
import { useUser } from '../use/useUser';

const email = ref('')
const password = ref('')
const exists = ref(false)
const registered = ref(false)

const { user, userDB, auth } = useUser()

</script>

<template lang='pug'>
.p-4(v-if="user")
  .flex.gap-2.items-center.p-2
    img.rounded-full(:src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=50&height=50`")
    .flex.flex-col
      .text-2xl {{ user.first_name }} {{ user.last_name }}
      .text-xs.op-50 {{ user.location }}
      //- .op-70.text-sm {{ user.email }}

form.flex.flex-col.gap-4(@submit.prevent.stop="auth(exists, email, password)" v-else)
  h2.text-2xl {{ exists ? "Sign In" : 'Sign Up' }}
  input(type="email" v-model="email" placeholder="Your email")
  input(type="password" v-model="password" placeholder="Your password")
  button.p-2.border-2(type="submit") {{ exists ? "LOGIN" : 'REGISTER' }}
  .flex.gap-1
    .op-30 Don't have an account?
    a.cursor-pointer.underline(@click="exists = !exists") {{ !exists ? 'Login' : "Register" }}

</template>

<style scoped lang="postcss">
input {
  @apply p-2 bg-dark-500 rounded-lg
}
</style>