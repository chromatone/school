<script setup>
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()

</script>

<template lang='pug'>
.flex.flex-col.gap-4.my-8
  .text-10em.h-30 {{ $params.slug }}
  h2.text-4xl {{ $params.title }}
  p.text-lg {{ $params.description }}
  .text-xs {{ $params }}
</template>