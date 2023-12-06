
const validationErrorMessages = {
    requiredField: 'To pole jest wymagane',
    passwordLength: 'Hasło powinno mieć od 8 do 20 znaków',
    passwordPattern: 'Hasło powinno zawierać co najmniej 2 duże litery',
    comparePasswordFields: 'Hasła nie są takie same',
    emailField: 'Podaj poprawny Email',
} as const;

export { validationErrorMessages };