<script setup lang="ts">
import { Button } from "@/components/ui/button";

type ButtonConfig = {
  icon: string; // SVG
  title: string;
  path: string;
};

const props = defineProps<{
  buttons: ButtonConfig[];
}>();
</script>

<template>
  <div class="pb-12">
    <div class="space-y-4 py-4" v-for="button in buttons" :key="button.title">
      <div class="px-3 py-2">
        <div class="space-y-1">
          <NuxtLink :to="button.path" class="flex space-x-2 gap-x-2 w-full justify-start">
            <span v-html="button.icon" class="mr-2 h-3 w-auto"></span>
            {{ button.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>