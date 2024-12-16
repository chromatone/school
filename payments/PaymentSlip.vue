<script setup>
import { useRouter } from 'vitepress';
import { format } from 'date-fns';

const props = defineProps({
  payment: { type: Object }
})

const { go } = useRouter()
</script>

<template lang='pug'>
.flex.flex-col.gap-2.bg-light-600.m-2.p-4.shadow.rounded-lg.my-0.font-mono.text-sm.cursor-pointer.hover-brightness-120.transition.hover-shadow-xl(@click="go(`/payments/#${payment.id}`)" )
  .flex.flex-wrap.gap-2
    .font-bold {{ payment.student?.first_name || '---' }} {{ payment.student?.last_name || '---' }} 
    .flex-1
    .uppercase {{ payment?.enrollment?.course?.program?.slug || '---' }} {{ payment?.enrollment?.course?.level || '---' }}
  .flex.flex-wrap.gap-2.items-center
    .font-bold {{ payment.total }} THB
    .flex-1
    .py-1.rounded-lg.px-2(:style="{ backgroundColor: payment.status == 'paid' ? 'lightgreen' : payment.status == 'pending' ? 'yellow' : 'lightgray' }") {{ payment.status }}
  .flex.flex-wrap.gap-2 
    .font-bold {{ format(payment.date_created, 'HH:mm EEE dd MMM yyyy') }}
    .flex-1
    .p-0 {{ payment.user_created?.first_name }} {{ payment.user_created?.last_name }}
  .text-start.op-50 {{ payment?.id }}
  .p-0 
    slot
  
</template>