<script setup>
import { ref, watch } from 'vue';
import { useUser } from '../use/useUser';

const email = ref('')
const password = ref('')
const exists = ref(true)

const { user, userDB, auth, logout, registered } = useUser()

watch(registered, r => exists.value = r)

</script>

<template lang='pug'>
.bg-light-300.rounded-2xl.shadow-xl.overflow-hidden.max-w-30ch
  .p-4.flex.flex-col.gap-2(v-if="user")
    .flex.gap-2.items-center.p-2
      img.rounded-full(:src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=50&height=50`" v-if="user.avatar")
      .flex.flex-col
        .text-2xl {{ user.first_name }} {{ user.last_name }}
        .text-xs.op-50 {{ user.location }}
        //- .op-70.text-sm {{ user.email }}
    .flex.flex-wrap.gap-2
      a.no-underline.p-2.bg-light-500.rounded-lg.hover-bg-light-100(href="/student") My page
      button.p-2.bg-light-500.rounded-lg.hover-bg-light-100(@click="logout()") Logout

  form.flex.flex-col.gap-2(@submit.prevent.stop="auth(exists, email, password)" v-else)
    .text-2xl.p-4 {{ exists ? "Sign In" : 'Sign Up' }}
    label.px-2(for="email") Email
    input#email.mx-2(type="email" v-model="email" placeholder="Your email")
    label.px-2(for="password") Password
    input#password.mx-2(type="password" v-model="password" placeholder="Your password")
    button.p-2.border-2.bg-orange-400.rounded-xl.mx-2.shadow-lg.hover-brightness-120(type="submit") {{ exists ? "LOGIN" : 'REGISTER' }}
    transition(name="fade")
      .bg-orange-200.mx-2.rounded-lg.p-2(v-if="registered") Account successfully registered. Check your email <b>{{ email }}</b> for activation letter. In order to login you must activate your account first.
    .flex.gap-1.bg-light-900.p-3
      .op-50 {{ !exists ? 'Already have an account?' : "Don't have an account?" }}
      .flex-1
      a.cursor-pointer.underline(@click="exists = !exists") {{ !exists ? 'Login' : "Register" }}

</template>

<style scoped lang="postcss">
input {
  @apply p-2 bg-light-500 rounded-lg
}
</style>