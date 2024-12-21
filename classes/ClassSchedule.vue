<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { parseISO, startOfWeek, addDays, isSameDay, format, isFirstDayOfMonth, isWeekend, getWeek } from "date-fns";

import { createDirectus, rest, readItems } from '@directus/sdk'
import { useHash } from "../use/useHash";

const client = createDirectus('https://schooldb.chromatone.center/').with(rest())

const classes = ref([])

onMounted(async () => {
  classes.value = await client.request(readItems('classes', {
    fields: ['*', 'module.title', 'course.level', 'course.program.slug', 'course.program.color'],
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
.flex.flex-col.gap-0

  .text-2xl.mt-8.mx-2 Class Schedule
  .text-lg.mb-4.mx-2 Week {{ getWeek(Date.now()) }}

  .grid.grid-cols-7.gap-2.mb-8.not-prose.overflow-x-scroll.font-mono.max-w-100vw
    .rounded.font-bold.bg-gray-400.p-2(v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day" :class="{ 'bg-orange-300': ['Sat', 'Sun'].includes(day) }") {{ day }}
    .rounded.p-1.bg-light-50.flex.flex-col.gap-1(v-for="date in calendarDates" :key="date" :class="{ 'bg-orange-300': isSameDay(date, Date.now()), 'bg-light-900': isWeekend(date), 'op-50': getClassesForDate(date).length == 0 }")
      .text-sm.font-semibold {{ format(date, 'dd') }} {{ isFirstDayOfMonth(date) ? format(date, 'MMM') : '' }}
      ul.flex.flex-col.gap-2(v-if="classes")
        li.text-sm.rounded(v-for="cls in getClassesForDate(date)" :key="cls.title" )
          a.flex.flex-wrap.items-center.gap-1.items-start.bg-light-500.rounded.p-1(:href="`/classes/#${cls.id}`" :class="{ 'bg-orange-200': cls.id == hash }")
            .text-xs.font-bold.bg-light-100.bg-op-80.rounded.p-1 {{ format(parseISO(cls.date), 'HH:mm') }}
            .flex-1
            .text-10px.uppercase.px-1.rounded.font-bold.brightness-140.saturate-80(:style="{ backgroundColor: cls?.course?.program?.color }") {{ cls?.course?.program?.slug }} {{ cls?.course?.level }} 
            .flex-1 
            .text-sm {{ cls?.module?.title }}

            
</template>
