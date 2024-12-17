---
title: Creative Multimedia School
description: Weekly classes in ongoing courses
---

### 4 ongoing courses

Themes of each class are cycling in a loop and students can get in on any stage to move in a spiral of growth from the very basics to advanced nuances of the same creative processes.

<script setup>
import { defineClientComponent } from 'vitepress'

import CourseTimeline from './CourseTimeline.vue'

const CourseList = defineClientComponent(() => import('./CourseList.vue'))
const CoursePage = defineClientComponent(() => import('./CoursePage.vue'))

</script>

<CourseList />

<!-- <CourseTimeline /> -->

<CoursePage />
