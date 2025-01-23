---
title: Classes
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'
import { useHash } from '../use/useHash.js'


const ClassList = defineClientComponent(() => import('./ClassList.vue'))
const ClassPage = defineClientComponent(() => import('./ClassPage.vue'))
const ClassSchedule = defineClientComponent(() => import('./ClassSchedule.vue'))


const hash = useHash()
</script>

<ClassList v-if="!hash"  />

<ClassSchedule v-if="!hash" />

<ClassPage />
