<script setup>
import { computed, ref } from 'vue';
import { useUser } from '../use/useUser';
import { readItem, readItems, rest } from '@directus/sdk';
import { useHash } from '../use/useHash';
import { computedAsync, useTimeAgo } from '@vueuse/core';
import { format } from 'date-fns';
import AuthForm from '../student/AuthForm.vue';
const { user, userDB } = useUser()

const enrollments = computedAsync(async () => user.value && userDB.request(readItems('enrollments', {
  fields: ['*', 'course.*', 'course.classes.date', 'course.classes.module.title', 'course.program.title', 'course.program.color'],
})).then(result => result || []).catch(e => console.log(e)))

const grouped = computed(() => Object.groupBy(enrollments.value || [], en => en.course.program.title))

const hash = useHash()

const enrollment = computedAsync(async () =>
  (hash.value && user.value)
    ? userDB.request(readItem('enrollments', hash.value, {
      fields: ['course.*', 'course.classes.*', 'course.classes.module.title', '*', 'course.program.title', 'course.program.color']
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
template(v-if="!user") 
  .text-2xl Please login to see available enrollments
  AuthForm.m-4
template(v-else-if="enrollment") 
  .text-xl.op-40.m-2 Enrollment found
  .flex.flex-col.gap-2.p-4.bg-light-300.max-w-45ch.rounded-lg.mx-2.shadow-lg
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
        .op-60 {{ format(cls?.date, 'HH:mm EEE dd MMM yy') }} 
        .font-bold {{ cls?.module?.title }}
template(v-else) 
  .text-xl.op-90.m-2 Enrollment not found
  a.m-2(href="/courses/") Back to courses
</template>