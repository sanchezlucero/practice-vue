<template>
    <div class="modal-backdrop">
        <div class="modal-container">
            <h3>{{ isEditing ? 'Editar usuario' : 'Nuevo usuario' }}</h3>

            <form @submit.prevent="onSave">
                <div class="mb-2">
                    <input v-model="localForm.name" placeholder="Nombre" type="text" class="form-control"
                        :class="{ 'is-invalid': errors.name }" />

                    <div v-if="errors.name" class="form-text text-danger">
                        {{ errors.name }}
                    </div>
                </div>
                <div class="mb-2">
                    <input v-model="localForm.username" placeholder="Usuario" class="form-control" />
                </div>
                <div class="mb-2">
                    <input v-model="localForm.email" type="email" placeholder="Email" class="form-control"
                        :class="{ 'is-invalid': errors.email }" />
                    <div v-if="errors.email" class="form-text text-danger">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="mb-3">
                    <input v-model="localForm.phone" placeholder="Teléfono" class="form-control" />
                </div>




                <div class="actions">
                    <button type="button" class="btn btn-light" @click="onCancel">
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Guardar
                    </button>

                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { isValidEmail, isValidName } from '@/utils/validators'
import { ref, watch } from 'vue'


const props = defineProps({
    user: Object,
    isEditing: Boolean
})

const emit = defineEmits(['save', 'close'])

const localForm = ref({
    id: null,
    name: '',
    username: '',
    email: '',
    phone: ''
})

const errors = ref({
    name: '',
    email: ''
})


watch(
    () => props.user,
    (newUser) => {
        if (newUser) {
            localForm.value = { ...newUser }
        } else {
            localForm.value = {
                id: null,
                name: '',
                username: '',
                email: '',
                phone: ''
            }
        }
    },
    { immediate: true }
)

const onSave = () => {
    errors.value = {
        name: '',
        email: ''
    }

    if (!localForm.value.name.trim()) {
        errors.value.name = 'El nombre es obligatorio'

    } else if (!isValidName(localForm.value.name)) {
        errors.value.name = 'El nombre solo debe contener letras'
    }


    if (!isValidEmail(localForm.value.email)) {
        errors.value.email = 'El email no es válido'
    }

    if (errors.value.name || errors.value.email) {
        return
    }

    emit('save', localForm.value)
}

const onCancel = () => {
    emit('close')
}
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal-container {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 8px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-container h3 {
    margin-bottom: 16px;
    text-align: center;
}

.modal-container input {
    width: 100%;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>
