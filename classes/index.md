---
title: Classes
description: Weekly classes in ongoing courses
---

### Weekly classes

1 hour group education session

- 20 min presentation
- 20 min discovery
- 20 min collaboration

<script setup>
import { defineClientComponent } from 'vitepress'

import ClassSchedule from './ClassSchedule.vue'

const ClassList = defineClientComponent(() => import('./ClassList.vue'))
const ClassPage = defineClientComponent(() => import('./ClassPage.vue'))

</script>

<ClassSchedule />

<ClassList />

<ClassPage />
