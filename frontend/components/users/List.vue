<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.user_id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </template>

  <script setup>
  import { useUsersStore } from '~/stores/users'

  const usersStore = useUsersStore()
  const users = usersStore.users
  </script>