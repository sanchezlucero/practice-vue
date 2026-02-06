# CRUD de Usuarios - Practice Vue

Este es un proyecto de práctica desarrollado con **Vue 3** y **Vite**. La aplicación permite gestionar un listado de usuarios (Crear, Leer, Actualizar y Eliminar) consumiendo datos de una API simulada.

## Características
- **Listado de Usuarios**: Visualización de usuarios con estados de carga.
- **Operaciones CRUD**: Gestión completa de usuarios en estado local.
- **Modales Reutilizables**: Componentes para formularios y confirmación de acciones.
- **UX Mejorada**: Notificaciones en tiempo real con `vue3-toastify` e iconos de `HeroIcons`.

## Tecnologías Utilizadas
- **Vue 3 (Composition API)**: Framework principal para la interfaz.
- **Vite**: Herramienta de construcción (build tool) ultra rápida.
- **Bootstrap 5**: Framework de CSS para un diseño responsivo.
- **HeroIcons**: Set de iconos para acciones de edición y eliminación.
- **JSONPlaceholder**: API externa para la simulación inicial de datos.

## Estructura del Proyecto
Basado en las mejores prácticas de Vue, el proyecto se organiza así:
- `src/components`: Componentes pequeños y reutilizables (Modales, Tablas).
- `src/views`: Vistas principales (páginas) de la aplicación.
- `src/composables`: Lógica de negocio reutilizable y manejo de estado reactivo (ej. useUsers.js).
- `src/assets`: Estilos globales y archivos estáticos.
- `src/utils`: Funciones de utilidad y validadores de formularios.

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/sanchezlucero/practice-vue.git](https://github.com/sanchezlucero/practice-vue.git)
   