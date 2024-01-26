type PanelModalFieldType = {
    label: string;
    type: string;
    required: boolean;
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
        required: true,
    },
    {
        label: 'Nazwisko',
        type: 'text',
        required: true,
    },
    {
        label: 'Email',
        type: 'email',
        required: true,
    },
    {
        label: 'Tel. Kontaktowy',
        type: 'tel',
        required: true,
    },
    {
        label: 'Imię i nazwisko Opiekuna',
        type: 'text',
        required: true,
    },
] as PanelModalFieldType[];

export { DIALOG_VARIANT, COMPETITOR_CLASS, panelModalFields };
