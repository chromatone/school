---
title: Auth
description: User Authentication
---

<script setup>
import { defineClientComponent } from 'vitepress'

const AuthForm = defineClientComponent(() => import('./AuthForm.vue'))

</script>

<AuthForm />
