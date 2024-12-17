<script setup>
import { useData } from 'vitepress'
import AuthForm from './student/AuthForm.vue';
import { ref } from 'vue';
import { useUser } from './use/useUser';
import { onClickOutside } from '@vueuse/core';

const { frontmatter: f } = useData()

const auth = ref(false)

const { user } = useUser()

const authModal = ref()

onClickOutside(authModal, () => {
  auth.value = false
})

</script>


<template lang="pug">
.flex.flex-col.items-start.w-full.h-full.justify-stretch.relative

  button.op-50.fixed.top-4.right-4.z-100.text-2xl.p-2.rounded-full.bg-light-400(@click="auth = !auth")

    img.rounded-full(v-if="user?.avatar" :src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=40&height=40`")
    .i-la-user(v-else)
  transition(name="fade")
    AuthForm.fixed.top-4.right-4.z-90(v-show="auth" ref="authModal")

  a.p-2.op-50(href="/" v-if="!f.home") Creative Multimedia School

  h1.p-2.text-2xl {{ f.title }}

  content.prose.max-w-unset.flex-1

  //- .flex.flex-wrap.gap-2.text-2xl.w-full
    a(href="/courses/") Courses
    a.flex-1(href="/payments/") Payments
    a(href="/classes/") Classes
</template>

<style lang="postcss">
.prose p,
.prose h1,
.prose h2,
.prose h3 {
  max-width: 55ch;
  margin: 1em 8px;
}
</style>