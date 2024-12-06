<script setup async>
import { onMounted, onUnmounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItem, } from '@directus/sdk'

import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';

const hash = ref(window.location.hash.slice(1))

onMounted(() => window.addEventListener('hashchange', () => hash.value = window.location.hash.slice(1))
)
onUnmounted(() => window.removeEventListener('hashchange'))

const clas = computedAsync(async () => hash.value && await createDirectus('https://schooldb.chromatone.center/')
  .with(rest())
  .request(readItem('classes', hash.value, {
    fields: ['*', 'module.*', 'course.*', 'course.teacher.*', 'course.program.title',]
  })), [])

const { user, userDB } = useUser()

const data = computedAsync(async () => user.value && await userDB.request(readItem('classes', hash.value, {
  fields: ['*', 'students.*', 'students.directus_users_id.*']
})), [])

const joined = ref(false)

async function join() {

  joined.value = true
}

</script>

<template lang='pug'>
transition(name="fade")
  .flex.flex-col.gap-4.sticky.mt-8.overflow-scroll.bottom-4.left-4.right-4.bg-dark-50.p-4.rounded-3xl(v-if="hash")
    a.p-4.rounded-full.bg-dark-200.absolute.top-2.right-2(href="#")
      .i-la-times
    .flex.flex-wrap.gap-2
      .text-lg {{ format(clas.date || Date.now(), 'HH:mm EEEE dd MMMM yyyy') }}
    .flex.flex-wrap.gap-2.items-center
      .text-2xl.font-bold {{ clas?.course?.program?.title }}
      .text-2xl  {{ clas?.course?.level }}
    .text-4xl {{ clas?.module?.title }} 
    .flex.flex-wrap.gap-2.items-center
      img.rounded-full.w-30px.h-30px(
        v-if="clas?.course?.teacher?.avatar"
        :src="`https://schooldb.chromatone.center/assets/${clas?.course?.teacher?.avatar}?width=30&height=30`")
      .p-0 {{ clas?.course?.teacher?.first_name }} {{ clas?.course?.teacher?.last_name }}
    .text-xs(v-if="clas?.module?.description") {{ clas?.module?.description }} 
    .flex.flex-wrap.gap-2.p-2(v-if="data?.students")
      .p-2.bg-dark-800.rounded-xl(v-for="student in data?.students" :key="student") {{ student.directus_users_id.first_name }} {{ student.directus_users_id.last_name }}
    button.p-2.shadow-lg.hover-brightness-150.hover-shadow-xl.bg-green-700.rounded-xl.font-bold.uppercase(@click="join()" v-if="user && !joined") Join
</template>