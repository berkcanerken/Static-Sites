import * as yup from 'yup';
import { validationErrorMessages } from '@/consts/validationErrorMessages';

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email(validationErrorMessages.emailField)
        .required(validationErrorMessages.requiredField),
    password: yup
        .string()
        .min(8, validationErrorMessages.passwordLength)
        .max(20, validationErrorMessages.passwordLength)
        .matches(/^(?=.*[A-Z].*[A-Z])[A-Za-z\d@$!%*#?&]+$/, validationErrorMessages.passwordPattern)
        .required(validationErrorMessages.requiredField),
});

export { loginSchema };