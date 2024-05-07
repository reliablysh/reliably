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

definePageMeta({
  layout: "app",
});

const formSchema = z.object({
  name: z.string().describe("Name"),
  email: z.string().email().describe("Email"),
  role: z.enum(["admin", "user"]).describe("Role"),
});

const dialogOpen = ref(false);
const usersStore = useUsersStore();

const onSubmit = (values) => {
  const userId = usersStore.users.length + 1
  const newUser = {
    user_id: userId,
    ...values
  }
  usersStore.addUser(newUser);
  dialogOpen.value = false;
};
</script>

<template>
  <div class="p-6">
    <Dialog v-model:open="dialogOpen">
      <DialogTrigger as-child>
        <Button variant="outline"> Add a new User </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
        </DialogHeader>

        <AutoForm :schema="formSchema" @submit="onSubmit">
          <Button type="submit" class="mt-5"> Submit </Button>
        </AutoForm>
      </DialogContent>
    </Dialog>
  </div>
</template>