<script setup>
import { useUser } from '../use/useUser';
import { readItems, } from '@directus/sdk';
import { computedAsync, } from '@vueuse/core';

const { user, userDB } = useUser()

const enrollments = computedAsync(async () => user.value && userDB.request(readItems('enrollments', {
  filter: {
    student: {
      _eq: user.value?.id
    }
  },
  fields: ['*', 'course.*', 'course.classes.date', 'course.classes.module.title', 'course.program.title', 'course.program.color'],
})).then(result => result || []).catch(e => console.log(e)))


</script>

<template lang='pug'>
.p-2.flex.flex-col.gap-2(v-if="user") 
  .text-2xl Your enrollments
  a.no-underline.p-2.bg-light-600.rounded-lg.shadow-lg.hover-brightness-120(v-for="enrollment in enrollments" :key="enrollment" :href="`/enroll/#${enrollment?.id}`" :style="{ backgroundColor: enrollment?.course?.program?.color }") 
    .flex.gap-2.items-center
    .text-lg.font-bold {{ enrollment?.course?.program?.title }} 
    .flex-1 
    .op-50.text-sm {{ enrollment?.course?.level }}
</template>