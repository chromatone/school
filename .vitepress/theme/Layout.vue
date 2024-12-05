<script setup>
import { useData } from 'vitepress'
import AuthForm from '../../student/AuthForm.vue';
import { ref } from 'vue';

const { frontmatter: f } = useData()

const auth = ref(false)
</script>

<template lang="pug">
.flex.flex-col.p-4.w-full.items-center.h-full.justify-center.relative
  a.op-50(href="/" v-if="!f.home") Creative Multimedia School
  button.op-50.absolute.top-4.right-4.z-100.text-2xl.p-2.rounded-full.bg-dark-400(@click="auth = !auth")
    .i-la-user
  AuthForm.bg-dark-300.p-4.rounded-xl.shadow-xl.absolute.top-4.right-4.z-90(v-show="auth")
  h1.text-4xl {{ f.title }}
  content.prose
    
</template>
