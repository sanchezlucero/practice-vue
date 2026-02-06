<template>
    <div class="modal-backdrop">
        <div class="modal-container">
            <div class="pb-2">
                <TrashIcon class="icon-delete" />
            </div>
            <h4>{{ title }}</h4>
            <p class="message pb-3" >{{ message }}</p>

            <div class="actions">
                <button class="btn btn-light" @click="onCancel">
                    Cancelar
                </button>
                <button class="btn btn-danger" @click="onConfirm">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    title: {
        type: String,
        default: 'Confirmar acción'
    },
    message: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['confirm', 'close'])

const onConfirm = () => {
    emit('confirm')
}

const onCancel = () => {
    emit('close')
}
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 380px;
    text-align: start;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
}


.message{
    color: #838383;
}
</style>
