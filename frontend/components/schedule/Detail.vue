
<template>
    <div class="schedule-container">
      <div class="header">
        <button @click="goToPreviousWeek">←</button>
        <span>{{ displayWeek }}</span>
        <button @click="goToNextWeek">→</button>
      </div>
      <div class="schedule">
        <div class="schedule-row" v-for="day in weekDays" :key="day">
          <div class="day-label">{{ day }}</div>
          <div class="day-schedule">
            <div class="event" v-for="event in events[day]" :key="event.id" :style="{ left: getLeftOffset(event.start), width: getEventWidth(event.start, event.end) }">
              {{ event.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue';
  import { addDays, startOfWeek, format } from 'date-fns';

  const currentDate = ref(new Date());
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const events = ref({
    // Example events data structure
    Mon: [{ id: 1, name: 'Abhishek Ray', start: 9, end: 17 }],
    // Add other days and events as needed
  });

  const displayWeek = computed(() => {
    const start = startOfWeek(currentDate.value, { weekStartsOn: 1 });
    return `${format(start, 'MMM d')} - ${format(addDays(start, 6), 'MMM d')}`;
  });

  function goToPreviousWeek() {
    currentDate.value = addDays(currentDate.value, -7);
  }

  function goToNextWeek() {
    currentDate.value = addDays(currentDate.value, 7);
  }

  function getLeftOffset(hour) {
    return `${hour / 24 * 100}%`;
  }

  function getEventWidth(start, end) {
    return `${(end - start) / 24 * 100}%`;
  }
  </script>

  <style scoped>
  .schedule-container {
    width: 100%;
    font-family: Arial, sans-serif;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f0f0f0;
  }
  .schedule {
    display: flex;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .schedule-row {
    flex: 1;
    border-right: 1px solid #eee;
  }
  .day-label {
    text-align: center;
    background-color: #f9f9f9;
    border-bottom: 1px solid #eee;
  }
  .day-schedule {
    position: relative;
    height: 100px; /* Adjust based on needs */
  }
  .event {
    position: absolute;
    background-color: #007BFF;
    color: white;
    padding: 2px;
    border-radius: 4px;
  }
  </style>