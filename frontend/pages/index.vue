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

definePageMeta({
  layout: "app",
});

const formSchema = z.object({
  username: z.string().describe("Your username"),
  someValue: z.string(), // Will be "Some Value"
});

const onSubmit = (values) => {
  console.log("submit: ", values);
};
</script>

<template>
    <UsersList />
  <div class="p-6">
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Create a new schedule </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription> Create a new oncall schedule </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right"> Name </Label>
            <Input id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Username </Label>
            <Input id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>

  <p>Auto Form</p>
  <AutoForm
    :schema="formSchema"
    :field-config="{
      username: {
        label: 'Custom username',
      },
    }"
    @submit="onSubmit"
  >
    <Button type="submit"> Submit </Button>
  </AutoForm>
</template>