<script setup>
import { ref, computed, onMounted } from "vue";
import { parseISO, startOfWeek, addDays, isSameDay, format, isFirstDayOfMonth } from "date-fns";

import { useItems } from './database'

const classes = ref('')

onMounted(async () => {
  classes.value = await useItems('classes');
})


// Calendar setup
const startDate = ref(startOfWeek(new Date(), { weekStartsOn: 1 })); // Start on Monday
const daysInWeek = 7;
const weeksToDisplay = 4;

// Generate calendar dates
const calendarDates = computed(() =>
  Array.from({ length: daysInWeek * weeksToDisplay }, (_, i) => addDays(startDate.value, i))
);

// Filter classes for a specific date
const getClassesForDate = (date) =>
  classes.value.filter((cls) => isSameDay(parseISO(cls.date), date)
  );


</script>

<template lang="pug">
h2.text-2xl.mb-4.mt-8 Class Schedule starting {{ format(startDate, 'dd/MM/yy') }}
.grid.grid-cols-7.gap-2.mb-8
  .rounded.font-bold.bg-gray-900.p-2(v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day") {{ day }}
  .rounded.border.p-2.border-green-500(v-for="date in calendarDates" :key="date" :class="{ 'border-4': isSameDay(date, Date.now()) }")
    .text-sm.font-semibold {{ format(date, 'dd') }} {{ isFirstDayOfMonth(date) ? format(date, 'MMM') : '' }}
    ul(v-if="classes")
      li.text-sm(v-for="cls in getClassesForDate(date)" :key="cls.title")  {{ format(parseISO(cls.date), 'HH:mm') }} -  {{ cls.title }} 
</template>
