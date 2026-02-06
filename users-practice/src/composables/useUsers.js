import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export function useUsers() {
  const users = ref([])
  const loading = ref(false)

  const fetchUsers = async () => {
    loading.value = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      users.value = await response.json()
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const getNextId = () => users.value.length === 0 ? 1 : Math.max(...users.value.map(u => u.id)) + 1

  const saveUser = (formData, isEditing) => {
    if (isEditing) {
      const index = users.value.findIndex(u => u.id === formData.id)
      if (index !== -1) users.value[index] = formData
      toast.success('Usuario editado correctamente')
    } else {
      users.value.push({ ...formData, id: getNextId() })
      toast.success('Usuario creado correctamente')
    }
  }

  const removeUser = (id) => {
    users.value = users.value.filter(u => u.id !== id)
    toast.success('Usuario eliminado correctamente')
  }

  return { users, loading, fetchUsers, saveUser, removeUser }
}