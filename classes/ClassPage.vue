<script setup async>
import { onMounted, onUnmounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItem, } from '@directus/sdk'

import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';
import { useHash } from '../use/useHash';
import ContactMe from '../contact/ContactMe.vue';

const hash = useHash()

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
  .mx-2.flex.flex-col.gap-4.bg-light-200.p-4.rounded-3xl.shadow-lg(v-if="hash")
    a.p-4.rounded-full.bg-light-200.absolute.top-2.right-2(href="/classes/#")
      .i-la-angle-left
    .flex.flex-wrap.gap-2
      .text-lg(v-if="clas.date") {{ format(clas.date, 'HH:mm EEEE dd MMMM yyyy') }}
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
    ContactMe
    .flex.flex-wrap.gap-2.p-2(v-if="data?.students")
      .p-2.bg-light-800.rounded-xl(v-for="student in data?.students" :key="student") {{ student.directus_users_id?.first_name }} {{ student.directus_users_id?.last_name }}
    button.p-2.shadow-lg.hover-brightness-150.hover-shadow-xl.bg-orange-400.rounded-xl.font-bold.uppercase(@click="join()" v-if="user && !joined") Join
</template>