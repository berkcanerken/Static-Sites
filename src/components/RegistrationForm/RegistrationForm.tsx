import React from 'react';
import {
  RegistrationFormStyled,
  RegistrationFormBoxStyled,
  RegistrationFormTextFieldStyled,
  RegistrationFormButtonStyled,
  RegistrationButtonWrappersStyled,
} from './RegistrationForm.styled';
import GoogleIcon from '@mui/icons-material/Google';
import { registrationInputs } from './RegistrationForm.data';
import { useDebounce } from '@/hooks/useDebounce';

const RegistrationForm: React.FC = () => {
  const inisialHelperTexts = Array.from(
    { length: registrationInputs.length },
    () => ''
  );

  const [helperText, setHelperText] =
    React.useState<string[]>(inisialHelperTexts);

  const validFormFields = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string,
    index: number
  ): void => {
    const fieldValue = event.target.value;
    const currentMessages = [...helperText];
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const withoutDangerousSingsRegex = /^[^<>'"&;=]*$/;
    const correctPasswordRegex = /^(.*[A-Z]){2,}.*$/;

    if (fieldValue.length !== 0) {
      switch (type) {
        case 'email':
          if (emailRegex.test(fieldValue)) {
            currentMessages[index] = '';

            setHelperText(currentMessages);
          } else {
            currentMessages[index] = 'To nie jest poprawny email';

            setHelperText(currentMessages);
          }

          break;
        case 'text':
          if (withoutDangerousSingsRegex.test(fieldValue)) {
            currentMessages[index] = '';

            setHelperText(currentMessages);
          } else {
            currentMessages[index] =
              'Imię i nazwisko nie może zawierać niebezpiecznych znaków';

            setHelperText(currentMessages);
          }

          break;
        case 'password':
          if (fieldValue.length < 8) {
            currentMessages[
              index
            ] = `Hasło powinno mieć co najmiej 8 liter, a ma ${fieldValue.length}`;

            setHelperText(currentMessages);
          } else if (
            correctPasswordRegex.test(fieldValue) &&
            fieldValue.length >= 8 &&
            fieldValue.length <= 20
          ) {
            currentMessages[index] = '';

            setHelperText(currentMessages);
          } else if (!correctPasswordRegex.test(fieldValue)) {
            currentMessages[index] =
              'Hasło powinno mieć conajmiej 2 duże litery';

            setHelperText(currentMessages);
          } else if (fieldValue.length > 20) {
            currentMessages[
              index
            ] = `Hasło powinno mieć co najwyżej 20 liter, a ma ${fieldValue.length}`;

            setHelperText(currentMessages);
          }
          break;
      }
    } else {
      currentMessages[index] = '';

      setHelperText(currentMessages);
    }
  };

  return (
    <RegistrationFormStyled>
      <RegistrationFormBoxStyled>
        {registrationInputs.map(
          ({ id, label, name, type, autoComplete }, index) => (
            <RegistrationFormTextFieldStyled
              required
              key={id}
              id={id}
              label={label}
              name={name}
              type={type}
              variant="standard"
              helperText={helperText[index]}
              error={helperText[index] === '' ? false : true}
              autoComplete={autoComplete}
              onChange={useDebounce(
                (event: React.ChangeEvent<HTMLInputElement>) =>
                  validFormFields(event, type, index),
                1500
              )}
            />
          )
        )}
      </RegistrationFormBoxStyled>

      <RegistrationButtonWrappersStyled>
        <RegistrationFormButtonStyled
          type="button"
          startIcon={<GoogleIcon />}
          isPrimaryButton={false}
        >
          Kontynuuj z google
        </RegistrationFormButtonStyled>

        <RegistrationFormButtonStyled
          type="submit"
          variant="contained"
          isPrimaryButton
        >
          Zarejestruj się
        </RegistrationFormButtonStyled>
      </RegistrationButtonWrappersStyled>
    </RegistrationFormStyled>
  );
};

export { RegistrationForm };
