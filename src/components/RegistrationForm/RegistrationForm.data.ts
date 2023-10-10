const registrationInputs = [
    {
        id: 'name-and-last-name',
        name: 'nameAndLastName',
        label: 'Imię i Nazwisko',
        type: 'text',
        autoComplete: 'name',
    },

    {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        autoComplete: 'email',
    },

    {
        id: 'password',
        name: 'password',
        label: 'Hasło',
        type: 'password',
        autoComplete: 'new-password',
    },
    
    {
        id: 'confirm-password',
        name: 'confirmPassword',
        label: 'Potwierdź hasło',
        type: 'password',
        autoComplete: 'new-password',
    },
] as const;

export { registrationInputs };