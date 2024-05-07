import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIncidentStore = defineStore('incidents', () => {
  const incidents = ref([
    {
        id: 1,
        impactedService: 'Service A',
        assignTo: 'John Doe',
        title: 'Incident Title',
        urgency: 'High',
        priority: 'High',
        description: 'Incident Description',
        status: 'New',
        },
        {
        id: 2,
        impactedService: 'Service B',
        assignTo: 'Jane Doe',
        title: 'Incident Title',
        urgency: 'Medium',
        priority: 'Medium',
        description: 'Incident Description',
        status: 'New',
    }
  ])

  function addIncident(newIncident) {
    incidents.value.push({
      id: newIncident.id || Date.now().toString(),
      impactedService: newIncident.impactedService,
      assignTo: newIncident.assignTo,
      title: newIncident.title,
      urgency: newIncident.urgency || 'Default',
      priority: newIncident.priority || 'Medium',
      description: newIncident.description,
      status: newIncident.status || 'New',
    })
  }

  function updateIncident(id, updatedIncident) {
    const index = incidents.value.findIndex(incident => incident.id === id)
    if (index !== -1) {
      incidents.value[index] = { ...incidents.value[index], ...updatedIncident }
    }
  }

  function removeIncident(id) {
    incidents.value = incidents.value.filter(incident => incident.id !== id)
  }

  return {
    incidents,
    addIncident,
    updateIncident,
    removeIncident
  }
})