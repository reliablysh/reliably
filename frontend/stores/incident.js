import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIncidentStore = defineStore('incidents', () => {
  const incidents = ref([
  ])

  const addIncident = async (newIncident) => {
    incidents.value.push({
        id: newIncident.id || Date.now().toString(),
        impactedService: newIncident.impactedService,
        assignTo: newIncident.assignTo,
        title: newIncident.title,
        urgency: newIncident.urgency || 'Default',
        priority: newIncident.priority || 'Medium',
        description: newIncident.description,
        status: newIncident.status || 'New',
    });

    try {
        const response = await $fetch('/api/incident/create', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newIncident)
        });

        if (!response.ok) {
            throw new Error('Failed to create incident: ' + response);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
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