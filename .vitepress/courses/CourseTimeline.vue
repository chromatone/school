<script setup>
import { useHash } from "../use/useHash";
import { ref, computed, onMounted, onUnmounted } from "vue";

const hash = useHash()

</script>

<template lang="pug">
h2.text-2xl.mt-8 Course Timeline 
.text-xl.op-50 {{ hash }}

</template>
