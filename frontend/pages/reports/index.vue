<script setup lang="ts">
import { LineChart } from "@/components/ui/chart-line";
import { format, subMonths, startOfMonth } from 'date-fns';

// Helper function to generate the last 6 months
function getLastSixMonths() {
  const months = [];
  for (let i = 0; i < 6; i++) {
    months.push(format(subMonths(startOfMonth(new Date()), i), 'MMM yyyy'));
  }
  return months.reverse();
}

const months = getLastSixMonths();

const dataAcknowledge = months.map((month, index) => ({
  month,
  value: 30 - index * 2 // Mock decreasing values
}));

const dataResolve = months.map((month, index) => ({
  month,
  value: 120 - index * 5 // Mock decreasing values
}));

const dataIncidents = months.map((month, index) => ({
  month,
  value: 200 + index * 20 // Mock increasing values
}));
definePageMeta({
  layout: "app",
});
</script>

<template>
    <div class="p-6">
      <h2 class="text-lg font-bold mb-4">Reports</h2>

      <div class="mb-6">
        <h3 class="font-semibold mb-2">Average Time to Acknowledge an Incident</h3>
        <LineChart
          :data="dataAcknowledge"
          index="month"
          :categories="['value']"
          :y-formatter="(tick) => `${tick} mins`"
        />
      </div>

      <div class="mb-6">
        <h3 class="font-semibold mb-2">Average Time to Resolve an Incident</h3>
        <LineChart
          :data="dataResolve"
          index="month"
          :categories="['value']"
          :y-formatter="(tick) => `${tick} mins`"
        />
      </div>

      <div class="mb-6">
        <h3 class="font-semibold mb-2">Total Number of Incidents Over Time</h3>
        <LineChart
          :data="dataIncidents"
          index="month"
          :categories="['value']"
          :y-formatter="(tick) => `${tick} incidents`"
        />
      </div>
    </div>
  </template>