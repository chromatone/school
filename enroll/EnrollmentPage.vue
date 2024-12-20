<script setup>
import { computed, reactive, ref } from 'vue';
import { useUser } from '../use/useUser';
import { readItem, readItems, rest, updateItem } from '@directus/sdk';
import { useHash } from '../use/useHash';
import { computedAsync, useTimeAgo } from '@vueuse/core';
import { format } from 'date-fns';
import AuthForm from '../student/AuthForm.vue';
import StudentForm from '../student/StudentForm.vue';
const { user, userDB } = useUser()

const hash = useHash()

const enrollment = computedAsync(async () =>
  (hash.value && user.value)
    ? userDB.request(readItem('enrollments', hash.value, {
      fields: ['course.*', 'student.*', 'course.classes.*', 'course.classes.module.title', '*', 'course.program.title', 'course.program.color']
    }))
      .then(result => result || null)
      .catch(error => {
        console.error("Error fetching enrollment:", error)
        return false
      })
    : null,
);

const apply = ref(false)
const applied = ref(false)

const data = reactive({
  prior_experience: '',
  goals: '',
  feedback: ''
})

async function applyNow() {
  let res = await userDB.request(updateItem('enrollments', hash.value, {
    ...data,
    status: 'applied',
    student: user.value?.id
  }))
  console.log(res)
  applied.value = true
}

</script>

<template lang='pug'>
template(v-if="!user") 
  .text-2xl Please login to see available enrollments
  AuthForm.m-4
template(v-else-if="enrollment") 
  .flex.flex-col.gap-2.p-4.bg-light-300.max-w-45ch.rounded-lg.mx-2.shadow-lg
    .flex.gap-2.items-center
      .text-2xl {{ enrollment?.course?.program?.title }} 
      .flex-1 
      .op-50.text-2xl {{ enrollment?.course?.level }}

    .flex.gap-2 
      .text-sm Starts on {{ format(enrollment?.course?.start_date, 'EEE dd MMM yyyy') }} 
      .op-50 {{ useTimeAgo(enrollment?.course?.start_date) }}
    .flex.flex-col.gap-2.font-mono.text-sm  
      .flex.gap-2.p-1.rounded.shadow.bg-light-400(v-for="cls in enrollment?.course?.classes" :key="cls") 
        .op-60.flex-1 {{ format(cls?.date, 'HH:mm EEE dd MMM yy') }} 
        .font-bold(style="flex: 3 1") {{ cls?.module?.title }}
  .flex.flex-col.gap-2.p-4(v-if="enrollment?.status == 'draft'")
    .text-lg This enrollment is open for application.
    .text-3xl Apply now
  .flex.flex-col.gap-2.p-4(v-if="enrollment?.status == 'applied'")
    .text-lg Someone already applied for this enrollment.
    .text-3xl Awaiting verification 
    .text-md If you've purchased this ticket at coworking reception, then you don't need to do anything but wait one day until we synchronize our databases. Your enrollment will be fully activated after verification.

  .flex.flex-wrap.gap-2.items-center.p-2.bg-light-300.rounded-lg.m-2(v-if="enrollment?.status == 'published' && enrollment?.student") 
    img.rounded-full(:src="`https://schooldb.chromatone.center/assets/${enrollment?.student?.avatar}?width=50&height=50`" v-if="enrollment?.student?.avatar")
    .w-50px.rounded-full.bg-orange-200.h-50px.flex.items-center.justify-center.text-2xl(v-else)
      .i-la-user
    .flex.flex-col
      .text-2xl {{ enrollment?.student?.first_name }} {{ enrollment?.student?.last_name }}
      .text-xs.op-50 {{ enrollment?.student?.location }} 
    .flex-1

  StudentForm(v-if="enrollment?.status == 'draft'")
    .text-sm Please fill in / verify your student account details

  form.flex.flex-col.gap-4.p-4.bg-light-300.max-w-45ch.rounded-lg.mx-2.shadow-lg(@submit.prevent="applyNow()" v-if="enrollment?.status == 'draft' && !applied")
    label(for="prior")
      .text-xl Prior experience 
      .text-sm.op-70 What is your own journey into the subject of this course?
    textarea.rounded.p-2.shadow#prior(v-model="data.prior_experience" rows="4" placeholder="I was a drummer in a band for 3 years, than lots of personal study and practice...") 
    label(for="goals")
      .text-xl Goals
      .text-sm.op-70 What are your objectives for this course? What is your purpose to study?
    textarea.rounded.p-2.shadow#goals(v-model="data.goals" rows="4" placeholder="I want to understand music theory on a more intuitive level so I can get really creative with musical elements...") 
    button.p-2.bg-orange-400.rounded-xl.shadow(type="submit") Apply to the course
template(v-else) 
  .text-xl.op-90.m-2 Enrollment not found
  a.m-2(href="/courses/" ) Back to courses
</template>