import { validationErrorMessages } from '@/consts/validationErrorMessages';
import * as yup  from 'yup';
import { COMPETITOR_CLASS } from './PanelModal.data';
import dayjs from 'dayjs';


// yup.addMethod(yup.date, 'format', function (format) {
//     return this.transform(function (originalValue, originalObject) {
//       const parsedDate = dayjs(originalValue, { strict: false });
//       return parsedDate.isValid() ? parsedDate.toDate() : originalValue;
//     });
//   });

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
    .string()
    .required(validationErrorMessages.requiredField)
    .min(9, validationErrorMessages.toShort)
    .max(12, validationErrorMessages.toLong),
    date: yup
    .date()
    // .format('DD-MM-YYYY')
    .nullable(),
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
