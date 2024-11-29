<script setup>
import { useData } from 'vitepress';

const { frontmatter: f } = useData()
</script>

<template lang="pug">
.flex.flex-col.p-4.w-full.items-center.h-full.justify-center
  a.op-50(href="/" v-if="!f.home") Creative Multimedia School
  h1.text-4xl {{ f.title }}
  content.prose
    
</template>
