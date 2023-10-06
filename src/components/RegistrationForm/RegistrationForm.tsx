import React from 'react';
import {
  RegistrationFormStyled,
  RegistrationFormBoxStyled,
  RegistrationFormTextFieldStyled,
  RegistrationFormButtonStyled,
  RegistrationButtonWrappersStyled,
} from './RegistrationForm.styled';
import GoogleIcon from '@mui/icons-material/Google';

const RegistrationForm: React.FC = () => {
  return (
    <RegistrationFormStyled>
      <RegistrationFormBoxStyled>
        <RegistrationFormTextFieldStyled
          required
          id="name-and-last-name"
          label="Imię i Nazwisko"
          name="nameAndLastName"
          variant="standard"
          autoComplete="name"
        />

        <RegistrationFormTextFieldStyled
          required
          id="email"
          label="Email"
          name="email"
          variant="standard"
          autoComplete="email"
        />

        <RegistrationFormTextFieldStyled
          required
          id="password"
          label="Hasło"
          name="password"
          type="password"
          variant="standard"
          autoComplete="new-password"
        />

        <RegistrationFormTextFieldStyled
          required
          id="confirm-password"
          label="Potwierdź hasło"
          name="confirmPassword"
          type="password"
          variant="standard"
          autoComplete="new-password"
        />
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
