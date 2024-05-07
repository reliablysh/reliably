import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { user_id: 1, name: 'Abhishek Ray', email: 'abhishekray07@gmail.com', role: 'admin' },
  ])

  const getUser = (userId: number) => users.value.find(user => user.user_id === userId)

  function addUser(user: { user_id: string, name: string, email: string, role: string }) {

    users.value.push(user)
  }

  function removeUser(userId: number) {
    users.value = users.value.filter(user => user.user_id !== userId)
  }

  return { users, addUser, removeUser, getUser }
})