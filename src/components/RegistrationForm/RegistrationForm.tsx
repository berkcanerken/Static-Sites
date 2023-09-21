import React from 'react';
import {
  RegistrationFormStyled,
  RegistrationFormBoxStyled,
  RegistrationFormTextFieldStyled,
  RegistrationFormButtonStyled,
} from './RegistrationForm.styled';
import GoogleIcon from '@mui/icons-material/Google';

const RegistrationForm: React.FC = () => {
  return (
    <RegistrationFormStyled>
      <RegistrationFormButtonStyled
        type="button"
        startIcon={<GoogleIcon />}
        isPrimaryButton={false}
      >
        Kontynuuj z google
      </RegistrationFormButtonStyled>

      <RegistrationFormBoxStyled>
        <RegistrationFormTextFieldStyled
          required
          id="name-and-last-name"
          label="Imię i Nazwisko"
          name="nameAndLastName"
          variant="standard"
        />

        <RegistrationFormTextFieldStyled
          required
          id="email"
          label="Email"
          name="email"
          variant="standard"
        />

        <RegistrationFormTextFieldStyled
          required
          id="password"
          label="Hasło"
          name="password"
          type="password"
          variant="standard"
        />

        <RegistrationFormTextFieldStyled
          required
          id="confirm-password"
          label="Potwierdź hasło"
          name="confirmPassword"
          type="password"
          variant="standard"
        />
      </RegistrationFormBoxStyled>

      <RegistrationFormButtonStyled
        type="submit"
        variant="contained"
        isPrimaryButton
      >
        Zarejestruj się
      </RegistrationFormButtonStyled>
    </RegistrationFormStyled>
  );
};

export { RegistrationForm };
