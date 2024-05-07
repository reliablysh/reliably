import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { user_id: 1, name: 'John Doe' },
    { user_id: 2, name: 'Jane Doe' },
    { user_id: 3, name: 'Alice' },
    { user_id: 4, name: 'Bob' }
  ])

  function addUser(user: { user_id: number; name: string }) {
    users.value.push(user)
  }

  function removeUser(userId: number) {
    users.value = users.value.filter(user => user.user_id !== userId)
  }

  return { users, addUser, removeUser }
})