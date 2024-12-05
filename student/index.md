---
title: Student profile
description: User settings
---

<script setup>
import { defineClientComponent } from 'vitepress'

const StudentProfile = defineClientComponent(() => import('./StudentProfile.vue'))

import AuthForm from './AuthForm.vue'
</script>

<AuthForm />

<StudentProfile />
