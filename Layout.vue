<script setup>
import { useData } from 'vitepress'
import AuthForm from './student/AuthForm.vue';
import { ref } from 'vue';
import { useUser } from './use/useUser';

const { frontmatter: f } = useData()

const auth = ref(false)

const { user } = useUser()
</script>

<template lang="pug">
.flex.flex-col.p-4.w-full.h-full.justify-center.relative
  a.op-50(href="/" v-if="!f.home") Creative Multimedia School
  button.op-50.fixed.top-4.right-4.z-100.text-2xl.p-2.rounded-full.bg-dark-400(@click="auth = !auth")

    img.rounded-full(v-if="user?.avatar" :src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=40&height=40`")
    .i-la-user(v-else)
  transition(name="fade")
    AuthForm.bg-dark-300.p-4.pt-8.pr-8.rounded-2xl.shadow-xl.fixed.top-4.right-4.z-90(v-show="auth")

  h1.text-2xl {{ f.title }}

  content.prose
    
</template>
