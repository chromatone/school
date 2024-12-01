<script setup>

import { data } from './courses.data'


</script>

<template lang='pug'>
.text-2xl Courses 
.flex.flex-col.gap-2 
  a.p-2.text-xl(
    v-for="course in data" :key="course"
    :href="`/courses/${course.title}/`"
    ) {{ course.title }}
</template>