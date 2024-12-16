<script setup>
import { computed, ref } from 'vue';
import { useUser } from '../use/useUser';
import { createDirectus, createItem, readItem, readItems, rest } from '@directus/sdk';
import { useHash } from '../use/useHash';
import QrcodeVue from 'qrcode.vue'
import { useRouter } from 'vitepress';
import { computedAsync } from '@vueuse/core';
import { format } from 'date-fns';
import PaymentSlip from './PaymentSlip.vue';

const { user, userDB } = useUser()
const isCashier = computed(() => user.value?.role == 'f77dcad0-2c27-4754-92da-4742fac1b252')

const thb = ref(2400)

const { go } = useRouter()

async function createPayment() {
  let { id } = await userDB.request(createItem('payments', {
    total: thb.value,
    status: 'paid'
  }))
  go(`/payments/#${id}`)
}

const hash = useHash()

const link = computed(() => `https://school.chromatone.center/payments/#${record.value?.id}`)

const record = computedAsync(async () => await userDB.request(readItem('payments', hash.value, {
  fields: ['*', 'student.first_name', 'student.last_name', 'user_created.*', 'enrollment.course.level', 'enrollment.course.program.slug']
})))

const payments = computedAsync(async () => user.value && await userDB.request(readItems('payments', {
  fields: ['*', 'student.*', 'enrollment.*', 'user_created.*', 'enrollment.course.level', 'enrollment.course.program.slug']
})))



</script>

<template lang='pug'>
.py-4(v-if="!user") Please, login to see payments.
.max-w-45ch(v-else)

  form.flex.flex-col.gap-8.p-4(v-if="!hash && isCashier"  @submit.prevent="createPayment()")
    .text-2xl Accept payment
    .flex.flex-col.gap-2
      .op-75 Enter amount paid
      .flex.items-center.gap-2
        input#thb.p-2.rounded-xl(type="number" v-model="thb")
        label.ml-2(for="thb") THB
    button.w-full.bg-orange-500.hover-bg-orange-300.transition.p-4.rounded-xl.font-bold.text-xl(type="submit") Submit Payment

  .my-8.flex.flex-col.gap-4(v-if="record")
    button.p-2.bg-light-400.font-bold.shadow.rounded-xl(@click="go('/payments/')") Go back to payments list



    PaymentSlip(:payment="record")
      qrcode-vue.w-full.rounded.mx-auto.mt-4(:value="link" size="auto" level="H" render-as="svg")

    .op-75.text-xl.m-4 Share this QR code and/or URL for the student to provide to the teacher at the class

  .my-4(v-if="hash && !record")
    .i-la-spinner.animate-spin.text-4xl

  .flex.flex-col.gap-2(v-if="!hash")
    .text-xl.font-bold All payments

    PaymentSlip(:payment v-for="payment in payments" :key="payment.id" )

    
</template>