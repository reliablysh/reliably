<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useUsersStore } from "~/stores/users";

const usersStore = useUsersStore();
const users = usersStore.users;
</script>

<template>
  <div>
    <UsersCreate />
  </div>
  <Table>
    <TableCaption>List of Users</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Name </TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.user_id">
        <TableCell class="font-medium">
          {{ user.name }}
        </TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.role }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>