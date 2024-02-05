import { validationErrorMessages } from '@/consts/validationErrorMessages';
import * as yup  from 'yup';
import { COMPETITOR_CLASS } from './PanelModal.data';

const competitorsShema = yup.object().shape({
    givenName: yup
    .string()
    .required(validationErrorMessages.requiredField),
    familyName: yup
    .string()
    .required(validationErrorMessages.requiredField),
    careGiversName: yup
    .string(),
    email: yup
    .string()
    .email(validationErrorMessages.emailField)
    .required(validationErrorMessages.requiredField),
    tel: yup
    .number()
    .min(9, validationErrorMessages.toShort)
    .max(12, validationErrorMessages.toLong)
    .required(validationErrorMessages.requiredField),
    date: yup
    .date()
    .required(validationErrorMessages.requiredField),
    selectClass: yup
    .string()
    .required(validationErrorMessages.requiredField)
    .oneOf(Object.values(COMPETITOR_CLASS))
    .label('Klasa'),
    selectGender: yup
    .string()
    .required(validationErrorMessages.requiredField)
    .oneOf(['Kobieta', 'Mężczyzna'])
    .label('Płeć')
});

export { competitorsShema };
