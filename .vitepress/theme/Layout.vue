<script setup>
import { useData } from 'vitepress';

const { frontmatter: f } = useData()
</script>

<template lang="pug">
.flex.flex-col.p-4.w-full.items-center.h-full.justify-center
  a.op-50(href="/" v-if="!f.home") Creative Multimedia School
  a.op-50.absolute.top-4.right-4(href="/auth")
    .i-la-user
  h1.text-4xl {{ f.title }}
  content.prose
    
</template>
