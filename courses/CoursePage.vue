<script setup async>
import { createDirectus, rest, readItem, readItems, } from '@directus/sdk'
import { useTimeAgo } from '@vueuse/core'

import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';
import { useHash } from '../use/useHash';
import { watch } from 'vue';

const hash = useHash()

const client = createDirectus('https://schooldb.chromatone.center/')
  .with(rest())

const course = computedAsync(async () => hash.value && await client.request(readItem('courses', hash.value, {
  fields: ['*', 'program.title', 'classes.*', 'classes.module.title', 'teacher.*']
})), [])

const { user, userDB } = useUser()

const enrollments = computedAsync(async () => user.value && await client.request(readItems('enrollments')))

</script>

<template lang='pug'>
transition(name="fade")
  .flex.flex-col.gap-4.sticky.mt-8.overflow-scroll.bottom-4.left-4.right-4.bg-dark-50.p-4.rounded-3xl(v-if="hash")
    a.p-4.rounded-full.bg-dark-200.absolute.top-2.right-2(href="#")
      .i-la-times
    .flex.flex-wrap.gap-2.items-center
      .text-2xl.font-bold {{ course.program?.title }}
      .text-2xl  {{ course.level }} Course

    .flex.flex-wrap.gap-2.items-center
      img.rounded-full.w-30px.h-30px(
        v-if="course?.teacher?.avatar"
        :src="`https://schooldb.chromatone.center/assets/${course?.teacher?.avatar}?width=30&height=30`")
      .p-0 {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}

    .flex.flex-wrap.gap-2
      .text-lg Starts {{ useTimeAgo(course.start_date) }}

    .flex.flex-wrap.gap-2(v-if="user")
      .p-0 {{ enrollments }}

    .flex.flex-col.gap-2
      a.no-underline.p-2.rounded-xl.bg-dark-700.flex.gap-2(v-for="(cls, c) in course?.classes" :key="cls" :href="`/classes/#${cls.id}`") 
        .op-50 {{ c + 1 }}.
        .op-100  {{ cls.module.title }}
        .op-60 {{ useTimeAgo(cls.date) }}
</template>