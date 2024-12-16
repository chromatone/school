<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { parseISO, startOfWeek, addDays, isSameDay, format, isFirstDayOfMonth } from "date-fns";

import { createDirectus, rest, readItems } from '@directus/sdk'
import { useHash } from "../use/useHash";

const client = createDirectus('https://schooldb.chromatone.center/').with(rest())

const classes = ref([])

onMounted(async () => {
  classes.value = await client.request(readItems('classes', {
    fields: ['*', 'module.title', 'course.level', 'course.program.slug'],
  }));
})


// Calendar setup
const startDate = ref(startOfWeek(new Date(), { weekStartsOn: 0 }));
const daysInWeek = 7;
const weeksToDisplay = 5;

// Generate calendar dates
const calendarDates = computed(() =>
  Array.from({ length: daysInWeek * weeksToDisplay }, (_, i) => addDays(startDate.value, i))
);

// Filter classes for a specific date
const getClassesForDate = (date) =>
  classes.value.filter((cls) => isSameDay(parseISO(cls.date || ''), date)
  );

const hash = useHash()

</script>

<template lang="pug">
h2.text-2xl.mt-8 Class Schedule 
h3.text-lg.mb-4 Starting {{ format(startDate, 'dd/MM/yy') }}

.grid.grid-cols-7.gap-2.mb-8.not-prose.overflow-x-scroll.font-mono
  .rounded.font-bold.bg-gray-400.p-2(v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day") {{ day }}
  .rounded.p-1.bg-light-50.flex.flex-col.gap-1(v-for="date in calendarDates" :key="date" :class="{ 'border-4': isSameDay(date, Date.now()), 'op-50': getClassesForDate(date).length == 0 }")
    .text-sm.font-semibold {{ format(date, 'dd') }} {{ isFirstDayOfMonth(date) ? format(date, 'MMM') : '' }}
    ul(v-if="classes")
      li.text-sm.rounded(v-for="cls in getClassesForDate(date)" :key="cls.title" :class="{ 'bg-light-500': cls.id == hash }")
        a.flex.flex-col.gap-1.items-start.bg-light-300.p-1.rounded-xl(:href="`/classes/#${cls.id}`")
          .text-sm {{ format(parseISO(cls.date), 'HH:mm') }}  
          .text-sm.uppercase {{ cls.course.program.slug }} {{ cls.course.level }} 
          .text-sm {{ cls.module.title }}
</template>
