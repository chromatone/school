<script setup async>
import { createDirectus, rest, readItem, readItems, } from '@directus/sdk'
import { useTimeAgo } from '@vueuse/core'

import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';
import { useHash } from '../use/useHash';
import { watch } from 'vue';
import ContactMe from '../contact/ContactMe.vue';

const hash = useHash()

const client = createDirectus('https://schooldb.chromatone.center/')
  .with(rest())

const course = computedAsync(async () => hash.value && await client.request(readItem('courses', hash.value, {
  fields: ['*', 'program.title', 'program.color', 'classes.*', 'classes.module.title', 'teacher.*', 'enrollments.*']
})), [])

const { user, userDB } = useUser()

</script>

<template lang='pug'>
transition(name="fade")
  .mx-4.flex.flex-col.mt-8.bg-light-100.rounded-xl.max-w-45ch.relative.my-8.overflow-hidden(v-if="hash")
    a.p-2.rounded-lg.bg-light-200.absolute.top-2.right-2(href="/courses/#")
      .i-la-angle-left
    .flex.flex-wrap.gap-2.items-center.px-2.pb-2.pt-6(:style="{ backgroundColor: course?.program?.color }")
      .text-4xl.font-bold {{ course.program?.title }}
      .flex.items-center.w-full
        .text-2xl  {{ course.level }} Course
        .flex-1
        .flex.flex-wrap.gap-2.items-center.p-2 with
          img.rounded-full.w-30px.h-30px(
            v-if="course?.teacher?.avatar"
            :src="`https://schooldb.chromatone.center/assets/${course?.teacher?.avatar}?width=30&height=30`")
          .p-0 {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}

    .flex.flex-wrap.p-2
      .text-lg Starts {{ useTimeAgo(course.start_date) }}

    .flex.flex-col.gap-2.p-2(v-if="true")
      .p-0 {{ course?.threshold }} ≥ <b>{{ course?.enrollments?.length }}</b>  ≤ {{ course?.capacity }} students enrolled 



    .flex.flex-col.gap-2.p-2
      a.no-underline.p-2.rounded-xl.bg-light-700.flex.gap-2(v-for="(cls, c) in course?.classes" :key="cls" :href="`/classes/#${cls.id}`") 
        .op-50 {{ c + 1 }}.
        .op-100  {{ cls.module.title }}
        .op-60 {{ useTimeAgo(cls.date) }}

    a.no-underline.p-2.bg-orange-300.text-lg.m-4.rounded-xl(href="/#how-to-find-us") Purchase enrollment cards at the counter in Place Coworking, 59/2 Chao Fah Tawan Tok Rd, Chalong, Phuket.

    ContactMe For enrollment support and troubleshooting contact me via 
</template>