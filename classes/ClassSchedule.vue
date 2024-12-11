<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { parseISO, startOfWeek, addDays, isSameDay, format, isFirstDayOfMonth } from "date-fns";

import { createDirectus, rest, readItems } from '@directus/sdk'
import { useHash } from "../use/useHash";

const client = createDirectus('https://schooldb.chromatone.center/').with(rest())

const classes = ref([])

onMounted(async () => {
  classes.value = await client.request(readItems('classes', {
    fields: ['*', 'course.level', 'course.program.title'],
  }));
})


// Calendar setup
const startDate = ref(startOfWeek(new Date(), { weekStartsOn: 1 })); // Start on Monday
const daysInWeek = 7;
const weeksToDisplay = 5;

// Generate calendar dates
const calendarDates = computed(() =>
  Array.from({ length: daysInWeek * weeksToDisplay }, (_, i) => addDays(startDate.value, i))
);

// Filter classes for a specific date
const getClassesForDate = (date) =>
  classes.value.filter((cls) => isSameDay(parseISO(cls.date), date)
  );

const hash = useHash()

</script>

<template lang="pug">
h2.text-2xl.mt-8 Class Schedule 
h3.text-lg.mb-4 Starting {{ format(startDate, 'dd/MM/yy') }}

.grid.grid-cols-7.gap-2.mb-8.not-prose.overflow-x-scroll
  .rounded.font-bold.bg-gray-900.p-2(v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day") {{ day }}
  .rounded.p-1.bg-dark-50.flex.flex-col.gap-1(v-for="date in calendarDates" :key="date" :class="{ 'border-4': isSameDay(date, Date.now()), 'op-50': getClassesForDate(date).length == 0 }")
    .text-sm.font-semibold {{ format(date, 'dd') }} {{ isFirstDayOfMonth(date) ? format(date, 'MMM') : '' }}
    ul(v-if="classes")
      li.text-sm.rounded.p-1(v-for="cls in getClassesForDate(date)" :key="cls.title" :class="{ 'bg-dark-500': cls.id == hash }")
        a.flex.flex-col.gap-1.items-start(:href="`/classes/#${cls.id}`")
          .text-sm {{ format(parseISO(cls.date), 'HH:mm') }}  
          .text-sm.font-bold {{ cls.course.program.title }}
          .px-2.bg-dark-500.bg-op-40.rounded-lg.text-xs {{ cls.course.level }} 
</template>
