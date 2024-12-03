<script setup>
import { useUser } from '../.vitepress/theme/useUser';

const { user } = useUser()
</script>

<template lang='pug'>
.flex.flex-col.gap-2 
  .text-xl USER
  pre {{ user }}
</template>