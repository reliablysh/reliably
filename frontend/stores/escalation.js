import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEscalationStore = defineStore('escalations', () => {
  const escalations = ref([
    {
        id: 1,
        name: 'Service A',
        levels: [
          { id: 1, name: 'Level 1', schedule: 1 },
        ],
    }
  ])

  function addEscalation(newEscalation) {
    escalations.value.push({
      id: newEscalation.id || Date.now().toString(),
      name: newEscalation.name,
      levels: newEscalation.levels,
      repeat: newEscalation.repeat
    })
  }

  function updateEscalation(id, updatedEscalation) {
    const index = escalations.value.findIndex(e => e.id === id)
    if (index !== -1) {
      escalations.value[index] = { ...escalations.value[index], ...updatedEscalation }
    }
  }

  function removeEscalation(id) {
    escalations.value = escalations.value.filter(e => e.id !== id)
  }

  return {
    escalations,
    addEscalation,
    updateEscalation,
    removeEscalation
  }
})