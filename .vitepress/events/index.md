---
title: Events
description: Workshops, performances, jams and other public happenings
color: hsl(160deg,60%,60%)
---

<script setup>
import { defineClientComponent } from 'vitepress'

const EventPage = defineClientComponent(() => import('./EventPage.vue'))
const EventList = defineClientComponent(() => import('./EventsList.vue'))

import { useHash } from '../use/useHash'

const hash = useHash()

</script>

<EventPage v-if="hash" />

<EventList v-else />
