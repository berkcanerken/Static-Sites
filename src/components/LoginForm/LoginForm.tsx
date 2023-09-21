import React from 'react';
import {
  LoginFormStyled,
  LoginFormBoxStyled,
  LoginFormTextFieldStyled,
  LoginFormButtonStyled,
} from './LoginForm.styled';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm: React.FC = () => {
  return (
    <LoginFormStyled>
      <LoginFormButtonStyled
        type="button"
        startIcon={<GoogleIcon />}
        isPrimaryButton={false}
      >
        Kontynuuj z google
      </LoginFormButtonStyled>

      <LoginFormBoxStyled>
        <LoginFormTextFieldStyled
          required
          id="email"
          label="Email"
          name="email"
          variant="standard"
        />

        <LoginFormTextFieldStyled
          required
          id="password"
          label="Hasło"
          name="password"
          type="password"
          variant="standard"
        />
      </LoginFormBoxStyled>

      <LoginFormButtonStyled type="submit" variant="contained" isPrimaryButton>
        Zaloguj się
      </LoginFormButtonStyled>
    </LoginFormStyled>
  );
};

export { LoginForm };
