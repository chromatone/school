---
title: Classes
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'

const ClassList = defineClientComponent(() => import('./ClassList.vue'))

</script>

<ClassList />
