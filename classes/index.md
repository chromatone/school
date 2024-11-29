---
title: Creative Multimedia School
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'

const ClassList = defineClientComponent(() => {
  return import('../.vitepress/components/ClassList.vue')
})

import { data } from './classes.data'

</script>

<ClassList :list ="data" />
