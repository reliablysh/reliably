
<script setup lang="ts">
import { useIncidentStore } from "@/stores/incident";
import { useEscalationStore } from "@/stores/escalation";

const incidentStore = useIncidentStore();
const escalationStore = useEscalationStore();

const incident = ref({
  impactedService: "",
  assignTo: "",
  title: "",
  urgency: "Default",
  priority: "Medium",
  description: "",
});

const router = useRouter();

function handleSubmit() {
  incidentStore.addIncident(incident.value);
  // Optionally reset the form or navigate away
  router.push("/incidents");
}
</script>

<template>
  <div class="ml-6 w-[500px] mx-auto p-6 bg-white shadow-md rounded-lg">

    {{ incident }}
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="incident.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="assignTo"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Assign to</label
        >
        <select
          id="assignTo"
          v-model="incident.assignTo"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option disabled value="">Select an escalation policy</option>
          <option
            v-for="escalation in escalationStore.escalations"
            :key="escalation.id"
            :value="escalation.id"
          >
            {{ escalation.name }}
          </option>
        </select>
      </div>
      <div class="mb-6">
        <label
          for="priority"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Incident Priority</label
        >
        <select
          id="priority"
          v-model="incident.priority"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Description</label
        >
        <textarea
          id="description"
          v-model="incident.description"
          rows="4"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Describe the incident"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Incident
        </button>
      </div>
    </form>
  </div>
</template>
