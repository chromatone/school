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
.flex.flex-wrap.items-stretch.w-full.h-full.justify-stretch.relative

  button.op-50.fixed.top-4.right-4.z-100.text-2xl.p-2.rounded-full.bg-light-400(@click="auth = !auth")

    img.rounded-full(v-if="user?.avatar" :src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=40&height=40`")
    .i-la-user(v-else)
  transition(name="fade")
    AuthForm.fixed.top-4.right-4.z-90(v-show="auth" ref="authModal")

  .flex-1.p-4.bg-orange.m-2.rounded-xl.flex.flex-col.gap-1.max-w-50ch
    a.flex.gap-2.items-center(href="https://chromatone.center/" target="_blank") 
      img.w-6.h-6(src="/smooth.svg")
      .font-bold Chromatone
    .flex-1.min-h-12
    a.text-4xl(href="/") Creative <br>Multimedia<br> School ​
    .op-80.text-sm Place Coworking<br> 
      .op-80 Phuket, Thailand

  .flex-1.p-4.flex.items-start.flex-col.m-2.rounded-xl(v-if="!f?.home" :style="{ backgroundColor: f?.color }")
    .flex-1
    .text-xl.font-bold(v-if="f?.title") {{ f.title }}
    .text-sm.op-80(v-if="f?.description") {{ f?.description }}

  img.w-full.rounded-xl.m-2(src="/photo.jpeg" style="flex: 1 0 300px" v-if="f?.home")

  content.prose.max-w-unset.content(style="flex: 1 1 100%")

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
  @apply m-4;
  max-width: 55ch;

}

.custom-block-title {
  display: none;
}

.tip {
  @apply p-2 m-2 bg-light-300 rounded-xl shadow max-w-55ch;
  flex: 1 1 360px;
}

.content>div {
  @apply flex flex-wrap items-start
}
</style>