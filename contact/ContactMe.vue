<script setup>

</script>

<template lang='pug'>
.p-2.flex.flex-wrap.gap-2.items-center.bg-light-700.rounded-xl
  .text-sm
    slot For enrollment contact me via


  a.no-underline.flex.items-center.gap-1.p-2.rounded-lg.bg-orange-300.shadow.active-brightness-200.hover-brightness-130(href="https://instagram.com/chromatone.center" target="_blank" title="Instagram")
    .i-la-instagram
    .p-0 chromatone.center
  .text-xl or
  a.no-underline.flex.items-center.gap-1.p-2.rounded-lg.bg-orange-300.shadow.active-brightness-200.hover-brightness-130(href="https://t.me/starov" target="_blank" title="Telegram")
    .i-la-telegram
    .p-0 starov
</template>