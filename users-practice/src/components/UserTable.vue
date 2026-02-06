<template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="fw-bold">{{ user.name }}</td>
          <td>
            <span class="badge-username">@{{ user.username }}</span>
          </td>
          <td>{{ user.email }}</td>
          <td class="text-muted">{{ user.phone }}</td>
          <td>
            <div class="actions-wrapper">
              <button class="action-btn edit" @click="$emit('edit', user)" title="Editar">
                <PencilIcon class="icon-svg" />
              </button>
              <button class="action-btn delete" @click="$emit('delete', user)" title="Eliminar">
                <TrashIcon class="icon-svg" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline"

// Props para recibir los datos
defineProps({
  users: {
    type: Array,
    required: true
  }
})

// Emits para avisar al padre (UsersView) qué usuario se clickeó
defineEmits(['edit', 'delete'])
</script>

<style scoped>
.table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-top: 20px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.custom-table thead {
  background-color: #f8f9fa;
  border-bottom: 2px solid #eee;
}

.custom-table th {
  padding: 16px;
  text-align: left;
  color: #6c757d;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

.custom-table td {
  padding: 16px;
  vertical-align: middle;
  border-bottom: 1px solid #f1f1f1;
  color: #444;
}

.custom-table tbody tr:hover {
  background-color: #fcfcfc;
}

.badge-username {
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #495057;
}

.actions-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.action-btn {
  border: none;
  background: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}

.action-btn.edit {
  color: #0d6efd;
}

.action-btn.edit:hover {
  background-color: #e7f0ff;
}

.action-btn.delete {
  color: #dc3545;
}

.action-btn.delete:hover {
  background-color: #ffeef0;
}

.icon-svg {
  width: 18px;
  height: 18px;
}
</style>