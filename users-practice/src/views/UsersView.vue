<template>
    <div>
        <div class="d-flex justify-content-between">
            <h1>CRUD de usuarios</h1>
            <button class="btn btn-primary mb-3" :disabled="loading" @click="openCreate">
                <PlusIcon class="icon" /> Agregar usuario
            </button>
        </div>

        <UserFormModal v-if="showForm" :user="selectedUser" :isEditing="isEditing" @close="showForm = false"
            @save="handleSave" />

        <ConfirmModal v-if="showConfirm" title="Eliminar usuario"
            :message="`¿Seguro que deseas eliminar ${userToDelete?.name}?`" @confirm="confirmDelete"
            @close="showConfirm = false" />

        <div v-if="loading" class="loading-container">
            <div class="spinner"></div>
            <p>Cargando usuarios...</p>
        </div>

        <UserTable v-else :users="users" @edit="openEdit" @delete="triggerConfirmDelete" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PlusIcon } from "@heroicons/vue/24/outline"
import UserTable from '@/components/UserTable.vue'
import UserFormModal from '@/components/UserFormModal.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import { useUsers } from '@/composables/useUsers'

const { users, loading, fetchUsers, saveUser, removeUser } = useUsers()

const showForm = ref(false)
const isEditing = ref(false)
const selectedUser = ref(null)
const showConfirm = ref(false)
const userToDelete = ref(null)

onMounted(fetchUsers)

const openCreate = () => {
    selectedUser.value = null
    isEditing.value = false
    showForm.value = true
}

const openEdit = (user) => {
    selectedUser.value = { ...user } 
    isEditing.value = true
    showForm.value = true
}

const handleSave = (formData) => {
    saveUser(formData, isEditing.value)
    showForm.value = false
}

const triggerConfirmDelete = (user) => {
    userToDelete.value = user
    showConfirm.value = true
}

const confirmDelete = () => {
    removeUser(userToDelete.value.id)
    showConfirm.value = false
}
</script>

<style scoped>
.icon {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    color: white;
}

.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #555;
}

.spinner {
    width: 36px;
    height: 36px;
    border: 4px solid #ddd;
    border-top-color: #0d6efd;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
