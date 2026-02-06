export const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidName = (name) => nameRegex.test(name)

export const isValidEmail = (email) => emailRegex.test(email)
