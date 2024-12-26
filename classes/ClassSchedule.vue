<script setup>
import { ref, computed } from "vue";
import { parseISO, startOfWeek, addDays, isSameDay, format, isFirstDayOfMonth, isWeekend, getWeek, isSameMonth } from "date-fns";

import { createDirectus, rest, readItems } from '@directus/sdk'
import { useHash } from "../use/useHash";
import { computedAsync } from "@vueuse/core";

const client = createDirectus('https://schooldb.chromatone.center/').with(rest())

const classes = computedAsync(async () => await client.request(readItems('classes', {
  fields: ['*', 'module.title', 'course.level', 'course.program.slug', 'course.program.color'],
})), [])

const events = computedAsync(async () => await client.request(readItems('events', {
  fields: ['*'],
})), [])

const startDate = ref(startOfWeek(new Date(), { weekStartsOn: 0 }));
const daysInWeek = 7;
const weeksToDisplay = 5;

const calendarDates = computed(() =>
  Array.from({ length: daysInWeek * weeksToDisplay }, (_, i) => addDays(startDate.value, i))
);

const getClassesForDate = (date) =>
  classes.value.filter((cls) => isSameDay(parseISO(cls.date || ''), date)
  );

const hash = useHash()

</script>

<template lang="pug">
.flex.flex-col.max-w-100vw.max-h-80vh.bg-light-700.mx-4.shadow-xl.rounded-xl.my-12
  .flex.p-4
    .text-2xl.font-bold Our Schedule
    .flex-1
    .text-lg Week {{ getWeek(Date.now()) }}

  .grid.gap-2.not-prose.overflow-x-scroll.font-mono.overscroll-x-contain( style="scrollbar-width: thin; grid-template-columns: 1fr 1fr 3fr 1fr 3fr 1fr 3fr;")

    .rounded.font-bold.bg-gray-400.p-2.sticky.top-0.z-100(v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day" :class="{ 'bg-orange-300': ['Sat', 'Sun'].includes(day) }") {{ day }}

    .rounded.p-1.bg-light-50.flex.flex-col.gap-1(v-for="date in calendarDates" :key="date" :class="{ 'bg-orange-300': isSameDay(date, Date.now()), 'bg-light-900': isWeekend(date), 'op-50': classes.filter((cls) => isSameDay(parseISO(cls.date), date)).length == 0 && events.filter((ev) => isSameDay(parseISO(ev.date), date)).length == 0 }")

      .text-sm.font-semibold {{ format(date, 'dd') }} {{ isFirstDayOfMonth(date) ? format(date, 'MMM') : '' }} {{ isFirstDayOfMonth(date) && isSameMonth(date, new Date(date.getFullYear(), 0, 1)) ? format(date, 'yyyy') : '' }} {{ isSameDay(date, Date.now()) ? 'Today' : '' }}

      ul.flex.flex-col.gap-2(v-if="events")
        li.text-sm.rounded(v-for="ev in events.filter((ev) => isSameDay(parseISO(ev.date), date))" :key="ev.title")
          a.flex.flex-wrap.items-center.gap-1.items-start.bg-light-500.rounded.p-1(:href="`/events/#${ev.id}`" :class="{ 'bg-orange-200': ev.id == hash }")
            .text-xs.font-bold.bg-light-100.bg-op-80.rounded.p-1 {{ format(parseISO(ev.date), 'HH:mm') }}
            .flex-1
            .text-10px.uppercase.px-1.rounded.font-bold.brightness-140.saturate-80 {{ ev?.type }} 

            .text-sm {{ ev?.title }}
            .text-sm.bg-orange-600.px-1.text-white.rounded {{ ev?.price > 0 ? Number(ev.price) : 'FREE' }}

      ul.flex.flex-col.gap-2(v-if="classes")
        li.text-sm.rounded(v-for="cls in classes.filter((cls) => isSameDay(parseISO(cls.date), date))" :key="cls.title")
          a.flex.flex-wrap.items-center.gap-1.items-start.bg-light-500.rounded.p-1(:href="`/classes/#${cls.id}`" :class="{ 'bg-orange-200': cls.id == hash }")
            .text-xs.font-bold.bg-light-100.bg-op-80.rounded.p-1 {{ format(parseISO(cls.date), 'HH:mm') }}
            .flex-1
            .text-10px.uppercase.px-1.rounded.font-bold.brightness-140.saturate-80(:style="{ backgroundColor: cls?.course?.program?.color }") {{ cls?.course?.program?.slug }} {{ cls?.course?.level }} 

            .text-sm(style="flex: 1 1 220px") {{ cls?.module?.title }}
            
</template>
