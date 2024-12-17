<script setup>
import { computed, ref } from 'vue';
import { useUser } from '../use/useUser';
import { createDirectus, createItem, readItem, readItems, rest } from '@directus/sdk';
import { useHash } from '../use/useHash';
import QrcodeVue from 'qrcode.vue'
import { useRouter } from 'vitepress';
import { computedAsync, useTimeAgo } from '@vueuse/core';
import { format } from 'date-fns';
import AuthForm from '../student/AuthForm.vue';

const { user, userDB } = useUser()

const { go } = useRouter()

const pubDir = createDirectus('https://schooldb.chromatone.center').with(rest())

const enrollments = computedAsync(async () => await pubDir.request(readItems('enrollments')))

const hash = useHash()

const enrollment = computedAsync(async () =>
  hash.value
    ? pubDir.request(readItem('enrollments', hash.value, {
      fields: ['course.*', 'course.classes.*', 'course.classes.module.title', '*', 'course.program.title']
    }))
      .then(result => result || null)
      .catch(error => {
        console.error("Error fetching enrollment:", error)
        return false
      })
    : null,
);

</script>

<template lang='pug'>
a.py-4(href="/enroll/#") ENROLLMENTS
template(v-if="!user") 
  .text-2xl Please login to see available enrollments
  AuthForm
template(v-else-if="enrollment") 
  .text-xl.op-40.my-4 Enrollment found
  .flex.flex-col.gap-2.p-4.bg-light-300.max-w-45ch
    .flex.gap-2.items-center
      .text-2xl {{ enrollment?.course?.program?.title }} 
      .op-50.text-2xl {{ enrollment?.course?.level }}
      .flex-1 
      .font-bold.text-xs {{ enrollment?.status }}
    .flex.gap-2 
      .text-sm Starts on {{ format(enrollment?.course?.start_date, 'EEE dd MMM yyyy') }} 
      .op-50 {{ useTimeAgo(enrollment?.course?.start_date) }}
    .flex.flex-col.gap-2.font-mono.text-sm  
      .flex.gap-2.p-1.rounded.shadow.bg-light-400(v-for="cls in enrollment?.course?.classes" :key="cls") 
        .op-60 {{ format(cls?.date, 'HH:mm a EEE dd MMM yy') }} 
        .font-bold {{ cls?.module?.title }}


.flex.flex-wrap.gap-2(v-if="user")
  a.text-xs.p-2.op-30(v-for="en in enrollments" :key="en" :href="`/enroll/#${en.id}`") {{ en?.id }}

</template>