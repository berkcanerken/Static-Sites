import { validationErrorMessages } from '@/consts/validationErrorMessages';
import * as yup  from 'yup';
import { COMPETITOR_CLASS } from './PanelModal.data';
import dayjs from 'dayjs';

const competitorsShema = yup.object().shape({
    givenName: yup
    .string()
    .required(validationErrorMessages.requiredField),
    familyName: yup
    .string()
    .required(validationErrorMessages.requiredField),
    careGiversName: yup
    .string()
    .required(validationErrorMessages.requiredField),
    email: yup
    .string()
    .email(validationErrorMessages.emailField)
    .required(validationErrorMessages.requiredField),
    phoneNumber: yup
    .string()
    .required(validationErrorMessages.requiredField)
    .min(9, validationErrorMessages.toShort)
    .max(12, validationErrorMessages.toLong),
    selectClass: yup
    .string()
    .required(validationErrorMessages.requiredField)
    .oneOf(Object.values(COMPETITOR_CLASS))
    .label('Klasa'),
    selectSex: yup
    .string()
    .required(validationErrorMessages.requiredField)
    .oneOf(['Kobieta', 'Mężczyzna'])
    .label('Płeć')
});

export { competitorsShema };
