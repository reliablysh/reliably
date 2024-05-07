<script setup lang="ts">
import { useEscalationStore } from "@/stores/escalation";
import { useScheduleStore } from "@/stores/schedule";

const scheduleStore = useScheduleStore();
const schedules = scheduleStore.schedules;

const escalationStore = useEscalationStore();
const escalation = ref({
  name: "",
  levels: [{ schedule: "", minutesToAcknowledge: 10, name: "Level 1" }],
  repeat: 3,
});

function addLevel(index: number) {
  escalation.value.levels.push({ schedule: "", minutesToAcknowledge: 10, name: `Level ${index + 1}` });
}


const router = useRouter();

const handleSubmit = () => {
  escalationStore.addEscalation(escalation.value);
  // Navigate back or reset form

  router.push('/escalations');
};
</script>

<template>
  <div class="ml-6 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label
          for="escalationName"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Escalation path name</label
        >
        <input
          type="text"
          id="escalationName"
          v-model="escalation.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter a name"
          required
        />
      </div>

      <div
        v-for="(level, index) in escalation.levels"
        :key="index"
        class="mb-6"
      >
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Level {{ index + 1 }}</label
        >
        <div class="mb-4">
          <label
            for="notify"
            class="block mb-2 text-sm font-medium text-gray-900"
            >When escalating to this path, first notify:</label
          >
          <select
            v-model="level.schedule"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option disabled value="">Choose a schedule</option>
            <option
              v-for="schedule in schedules"
              :key="schedule.id"
              :value="schedule.id"
            >
              {{ schedule.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="minutesToAcknowledge"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Give them</label
          >
          <input
            type="number"
            v-model="level.minutesToAcknowledge"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            min="1"
            required
          />
          <span class="text-sm text-gray-500">minutes to acknowledge</span>
        </div>
      </div>

      <button
        type="button"
        @click="addLevel(escalation.levels.length)"
        class="mb-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Level
      </button>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>