<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { AutoForm } from "@/components/ui/auto-form";
import { useUsersStore } from "@/stores/users";
import { useScheduleStore } from "@/stores/schedule";

definePageMeta({
  layout: "app",
});

const formSchema = z.object({
  name: z.string().describe("Name"),
  start: z.coerce.date().describe("Rotation Start"),
  role: z.enum(["daily", "weekly"]).describe("Rotation Frequency"),
});
const router = useRouter();

const dialogOpen = ref(false);
const usersStore = useUsersStore();
const scheduleStore = useScheduleStore();

const onSubmit = (values) => {
  console.log("submit: ", values);
  const scheduleId = scheduleStore.schedules.length + 1;
  const newSchedule = {
    id: scheduleId,
    users: [1,3],
    ...values,
  };
  scheduleStore.addSchedule(newSchedule);
  router.push('/schedules');
};
</script>

<template>
  <div class="p-6">
    <h2 class="">Create Schedule</h2>
    <AutoForm :schema="formSchema" @submit="onSubmit">
      <Button type="submit" class="mt-5"> Submit </Button>
    </AutoForm>
  </div>
</template>