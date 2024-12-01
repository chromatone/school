---
title: Classes
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'

const ClassList = defineClientComponent(() => {
  return import('./ClassList.vue')
})

</script>

<ClassList />
