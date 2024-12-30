---
title: Classes
description: Weekly classes in ongoing courses
---

<script setup>
import { defineClientComponent } from 'vitepress'
import { useHash } from '../use/useHash.js'
import ClassSchedule from './ClassSchedule.vue'

const ClassList = defineClientComponent(() => import('./ClassList.vue'))
const ClassPage = defineClientComponent(() => import('./ClassPage.vue'))


const hash = useHash()
</script>

<ClassList v-if="!hash"  />

<ClassSchedule v-if="!hash" />

<ClassPage />
