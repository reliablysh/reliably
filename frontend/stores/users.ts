import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { user_id: 1, name: 'John Doe', email: 'john@doe.com', role: 'admin' },
    { user_id: 2, name: 'Jane Doe', email: 'jane@doe.com', role: 'regular' },
    { user_id: 3, name: 'Alice', email: 'alice@doe.com', role: 'regular' },
    { user_id: 4, name: 'Bob', email: 'bob@doe.com', role: 'admin' }
  ])

  function addUser(user: { user_id: string, name: string, email: string, role: string }) {

    users.value.push(user)
  }

  function removeUser(userId: number) {
    users.value = users.value.filter(user => user.user_id !== userId)
  }

  return { users, addUser, removeUser }
})