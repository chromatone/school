<script setup>
import { ref } from "vue";
import { addDays, startOfWeek, format } from "date-fns";

const startDate = ref(startOfWeek(new Date(), { weekStartsOn: 1 })); // Week starts on Monday
const daysInWeek = 7;
const weeksToDisplay = 4;

// Generate an array for the dates of the calendar
const calendarDates = Array.from({ length: daysInWeek * weeksToDisplay }, (_, i) =>
  addDays(startDate.value, i)
);
</script>

<template lang="pug">
h2.text-2xl.text-center.mb-4 School Schedule {{ format(startDate, 'dd/MM/yy') }}
.grid.grid-cols-7
  .font-bold.text-center.bg-gray-900.p-2(v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day") {{ day }}
  .border.p-2.border-green-500(v-for="date in calendarDates" :key="date")
    .text-sm.font-semibold {{ format(date, 'dd') }}
    .mt-2.text-xs.text-gray-500 
</template>

<style scoped>
/* Optional styles for better layout */
.grid {
  grid-template-rows: auto;
}
</style>
