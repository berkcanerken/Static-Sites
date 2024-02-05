type PanelModalFieldType = {
    label: string;
    type: "email" | "tel" | "date" | 'text';
    autocomplete: string;
    required: boolean;
    name: 'givenName' |'familyName' | 'careGiversName' | 'email' | 'selectGender' | 'selectClass' | 'date' | 'tel'
}

const DIALOG_VARIANT = {
    DEFAULT: 'default',
    EDIT_FORM: 'edit-form',
} as const;

const COMPETITOR_CLASS = {
    F: 'F',
    G: 'G',
    H: 'H'
} as const;

const panelModalFields = [
    {
        label: 'Imię',
        type: 'text',
        autocomplete: 'given-name',
        required: true,
        name: 'givenName',
    },
    {
        label: 'Nazwisko',
        type: 'text',
        autocomplete: 'family-name',
        required: true,
        name: 'familyName',

    },
    {
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        required: true,
        name: 'email',
    },
    {
        label: 'Tel. Kontaktowy',
        type: 'number',
        autocomplete: 'tel',
        required: true,
        name: 'tel',
    },
    {
        label: 'Imię i nazwisko opiekuna',
        type: 'text',
        autocomplete: 'name',
        required: false,
        name: 'careGiversName',
    },
] as PanelModalFieldType[];

export { DIALOG_VARIANT, COMPETITOR_CLASS, panelModalFields };
