---
title: Creative Multimedia School
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'

import CourseTimeline from './CourseTimeline.vue'

const CourseList = defineClientComponent(() => import('./CourseList.vue'))
const CoursePage = defineClientComponent(() => import('./CoursePage.vue'))

</script>

<CoursePage />

<CourseList />

<!-- <CourseTimeline /> -->
