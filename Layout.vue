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
.flex.flex-wrap.items-stretch.w-full.justify-stretch.relative

  button.op-50.fixed.top-4.right-4.z-100.text-2xl.p-2.rounded-full.bg-light-400(@click="auth = !auth")

    img.rounded-full(v-if="user?.avatar" :src="`https://schooldb.chromatone.center/assets/${user.avatar}?width=40&height=40`")
    .i-la-user(v-else)
  transition(name="fade")
    AuthForm.fixed.top-4.right-4.z-90(v-show="auth" ref="authModal")
  .flex.flex-wrap.bg-light-400.z-20.w-full
    .flex-1.z-9.p-4.bg-orange.m-2.rounded-xl.flex.flex-col.gap-1.max-w-50ch
      a.flex.gap-2.items-center(href="https://chromatone.center/" target="_blank") 
        img.w-6.h-6(src="/smooth.svg")
        .font-bold Chromatone
      .flex-1.min-h-12
      a.text-6xl.font-thin(href="/") Visual <br>Music<br> School
      .op-80.text-md Place Coworking<br> 
        .op-80 Phuket, Thailand

    .flex-1.p-4.flex.items-start.flex-col.m-2.rounded-xl.z-9(v-if="!f?.home" :style="{ backgroundColor: f?.color }")
      .flex-1
      .text-xl.font-bold(v-if="f?.title") {{ f.title }}
      .text-sm.op-80(v-if="f?.description") {{ f?.description }}

    img.w-full.rounded-xl.m-2.z-11(src="/photo.jpeg" style="flex: 1 0 300px" v-if="f?.home")

  content.prose.max-w-unset.content.bg-light-300.z-10(style="flex: 1 1 100%")

  iframe.max-w-100vw.w-full.sticky.bottom-0(
    v-if="f?.home"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31619.23403019168!2d98.33620267822933!3d7.8526906901330715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f11be80d1b3%3A0xc8c70cc2395f418a!2sPLACE%20COWORKING%20PHUKET!5e0!3m2!1sru!2sth!4v1734540603134!5m2!1sru!2sth", 
    width="600", 
    height="450", 
    style="border:0;", 
    allowfullscreen, 
    loading="lazy", 
    referrerpolicy="no-referrer-when-downgrade")

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