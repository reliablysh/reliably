import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScheduleStore = defineStore('schedules', () => {
  const schedules = ref([
    {
        id: 1,
        name: 'Service A Oncall Schedule',
        start: '2024-02-04T10:00:00',
        users: [1],
        shiftRotation: 'weekly',
        },
        {
        id: 2,
        name: 'Service B Oncall Schedule',
        start: '2023-05-05T12:00:00',
        users: [1],
        shiftRotation: 'daily',
    }
  ])

  function addSchedule(schedule) {
    schedules.value.push({
      id: schedule.id, // Assume an ID is generated elsewhere or passed in
      name: schedule.name,
      start: schedule.start,
      users: schedule.users,
      shiftRotation: schedule.shiftRotation,
    })
  }

  function updateSchedule(id, updatedSchedule) {
    const index = schedules.value.findIndex(s => s.id === id)
    if (index !== -1) {
      schedules.value[index] = { ...schedules.value[index], ...updatedSchedule }
    }
  }

  function removeSchedule(id) {
    schedules.value = schedules.value.filter(s => s.id !== id)
  }

  const getSchedule = (id) => {
    return schedules.value.find(s => s.id === id)
  }

  return {
    schedules,
    addSchedule,
    updateSchedule,
    removeSchedule,
    getSchedule,
  }
})