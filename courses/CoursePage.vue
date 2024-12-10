<script setup async>
import { onMounted, onUnmounted, ref } from 'vue';
import { format } from 'date-fns';
import { createDirectus, rest, readItem, } from '@directus/sdk'
import { useTimeAgo } from '@vueuse/core'

import { useUser } from '../use/useUser';
import { computedAsync } from '@vueuse/core';
import { useHash } from '../use/useHash';

const hash = useHash()

const course = computedAsync(async () => hash.value && await createDirectus('https://schooldb.chromatone.center/')
  .with(rest())
  .request(readItem('courses', hash.value, {
    fields: ['*', 'program.title']
  })), [])

const { user, userDB } = useUser()


</script>

<template lang='pug'>
transition(name="fade")
  .flex.flex-col.gap-4.sticky.mt-8.overflow-scroll.bottom-4.left-4.right-4.bg-dark-50.p-4.rounded-3xl(v-if="hash")
    a.p-4.rounded-full.bg-dark-200.absolute.top-2.right-2(href="#")
      .i-la-times
    .flex.flex-wrap.gap-2.items-center
      .text-2xl.font-bold {{ course.program?.title }}
      .text-2xl  {{ course.level }}
    .flex.flex-wrap.gap-2
      .text-lg Starts {{ useTimeAgo(course.start_date) }}
    .flex.flex-wrap.gap-2.items-center
      img.rounded-full.w-30px.h-30px(
        v-if="course?.teacher?.avatar"
        :src="`https://schooldb.chromatone.center/assets/${course?.teacher?.avatar}?width=30&height=30`")
      .p-0 {{ course?.teacher?.first_name }} {{ course?.teacher?.last_name }}

</template>