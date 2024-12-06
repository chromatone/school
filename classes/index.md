---
title: Classes
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'

import ClassSchedule from './ClassSchedule.vue'

const ClassList = defineClientComponent(() => import('./ClassList.vue'))
const ClassPage = defineClientComponent(() => import('./ClassPage.vue'))

</script>

<ClassSchedule />

<ClassList />

<ClassPage />
