---
title: Student profile
description: User settings
---

<script setup>
import { defineClientComponent } from 'vitepress'

const UserProfile = defineClientComponent(() => import('./UserProfile.vue'))

</script>

<UserProfile />
