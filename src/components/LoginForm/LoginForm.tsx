import React from 'react';
import {
  LoginFormStyled,
  LoginFormBoxStyled,
  LoginFormTextFieldStyled,
  LoginFormButtonStyled,
  LoginButtonWrappersStyled,
} from './LoginForm.styled';
import GoogleIcon from '@mui/icons-material/Google';
import { useDebounce } from '@/hooks/useDebounce';

const LoginForm: React.FC = () => {
  type LoginValuesType = {
    identifier: string;
    password: string;
  };

  const [emailHelpText, setEmailHelpText] = React.useState<string>('');
  const [passwordHelpText, setPasswordHelpText] = React.useState<string>('');
  const [fieldValues, setFieldValues] = React.useState<string[]>(['', '']);

  const validEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const emailValue = event.target.value;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
      const isCorrectState = [...fieldValues];
      isCorrectState[0] = emailValue;

      setEmailHelpText('');
      setFieldValues(isCorrectState);
    } else if (emailValue.length === 0) {
      const isCorrectState = [...fieldValues];
      isCorrectState[0] = '';

      setEmailHelpText('');
      setFieldValues(isCorrectState);
    } else {
      const isCorrectState = [...fieldValues];
      isCorrectState[0] = '';

      setEmailHelpText('To nie jest poprawny email');
      setFieldValues(isCorrectState);
    }
  };

  const validPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const passwordValue = event.target.value;
    const withMinTwoUpperLettersRegex = /^(.*[A-Z]){2,}.*$/;

    if (
      passwordValue.length >= 8 &&
      passwordValue.length <= 20 &&
      withMinTwoUpperLettersRegex.test(passwordValue)
    ) {
      const isCorrectState = [...fieldValues];
      isCorrectState[1] = passwordValue;

      setPasswordHelpText('');
      setFieldValues(isCorrectState);
    } else if (passwordValue.length === 0) {
      const isCorrectState = [...fieldValues];
      isCorrectState[1] = '';

      setPasswordHelpText('');
      setFieldValues(isCorrectState);
    } else {
      const isCorrectState = [...fieldValues];
      isCorrectState[1] = '';

      setFieldValues(isCorrectState);

      if (passwordValue.length < 8) {
        setPasswordHelpText(
          `Twoje hasło powinno mieć conajmniej 8 liter, a ma ${passwordValue.length}`
        );
      } else if (!withMinTwoUpperLettersRegex.test(passwordValue)) {
        setPasswordHelpText(
          `Hasło powinno z zawierać co najmniej 2 duże litery`
        );
      } else if (passwordValue.length > 20) {
        setPasswordHelpText(
          `Twoje hasło powinno mieć conajwyżej 20 liter, a ma ${passwordValue.length}`
        );
      }
    }
  };

  const login = async (message: LoginValuesType) => {
    try {
      const response = await fetch(
        'https://strapi-139719-0.cloudclusters.net/api/auth/local',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(message),
        }
      );

      const unpackedRespnse = await response.json();

      console.log(
        'dane użytkownika: ',
        unpackedRespnse?.user,
        'token: ',
        unpackedRespnse.jwt
      );
    } catch (error) {
      console.error('logowanie nieudane: ', error);
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    login({ identifier: fieldValues[0], password: fieldValues[1] });
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <LoginFormBoxStyled>
        <LoginFormTextFieldStyled
          required
          id="email"
          label="Email"
          name="email"
          variant="standard"
          autoComplete="email"
          error={emailHelpText === '' ? false : true}
          helperText={emailHelpText}
          onChange={useDebounce(validEmail, 1500)}
        />

        <LoginFormTextFieldStyled
          required
          id="password"
          label="Hasło"
          name="password"
          type="password"
          variant="standard"
          autoComplete="current-password"
          error={passwordHelpText === '' ? false : true}
          helperText={passwordHelpText}
          onChange={useDebounce(validPassword, 1500)}
        />
      </LoginFormBoxStyled>

      <LoginButtonWrappersStyled>
        <LoginFormButtonStyled
          type="button"
          startIcon={<GoogleIcon />}
          isPrimaryButton={false}
        >
          Kontynuuj z google
        </LoginFormButtonStyled>

        <LoginFormButtonStyled
          type="submit"
          variant="contained"
          isPrimaryButton
        >
          Zaloguj się
        </LoginFormButtonStyled>
      </LoginButtonWrappersStyled>
    </LoginFormStyled>
  );
};

export { LoginForm };
