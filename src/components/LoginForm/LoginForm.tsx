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
  const [emailHelpText, setEmailHelpText] = React.useState<string>('');
  const [passwordHelpText, setPasswordHelpText] = React.useState<string>('');
  const [isCorrect, setisCorrect] = React.useState<boolean[]>([false, false]);

  const validEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const emailValue = event.target.value;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
      const isCorrectState = [...isCorrect];
      isCorrectState[0] = false;

      setEmailHelpText('');
      setisCorrect(isCorrectState);
    } else if (emailValue.length === 0) {
      const isCorrectState = [...isCorrect];
      isCorrectState[0] = false;

      setEmailHelpText('');
      setisCorrect(isCorrectState);
    } else {
      const isCorrectState = [...isCorrect];
      isCorrectState[0] = true;

      setEmailHelpText('To nie jest poprawny email');
      setisCorrect(isCorrectState);
    }
  };

  const validPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const passwordValue = event.target.value;
    const correctPasswordRegex =
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*()_+={};':",.<>?])[A-Za-z\d!@#$%^&*()_+={};':",.<>?]{5,}$/;
    const withMinTwoUpperLettersRegex = /^(.*[A-Z]){2,}.*$/;
    const withSpecjalSignRegex = /.*[!@#$%^&*()_+={};':",.<>?].*/;

    if (
      passwordValue.length >= 8 &&
      passwordValue.length <= 20 &&
      correctPasswordRegex.test(passwordValue)
    ) {
      const isCorrectState = [...isCorrect];
      isCorrectState[1] = false;

      setPasswordHelpText('');
      setisCorrect(isCorrectState);
    } else if (passwordValue.length === 0) {
      const isCorrectState = [...isCorrect];
      isCorrectState[1] = false;

      setPasswordHelpText('');
      setisCorrect(isCorrectState);
    } else {
      const isCorrectState = [...isCorrect];
      isCorrectState[1] = true;

      setisCorrect(isCorrectState);

      if (passwordValue.length < 8) {
        setPasswordHelpText(
          `Twoje hasło powinno mieć conajmniej 8 liter, a ma ${passwordValue.length}`
        );
      } else if (
        !withMinTwoUpperLettersRegex.test(passwordValue) &&
        withSpecjalSignRegex.test(passwordValue)
      ) {
        setPasswordHelpText(
          `Hasło powinno z zawierać co najmniej 2 duże litery`
        );
      } else if (
        !withSpecjalSignRegex.test(passwordValue) &&
        withMinTwoUpperLettersRegex.test(passwordValue)
      ) {
        setPasswordHelpText(
          `Hasło powinno z zawierać co najmniej 1 znak specjalny`
        );
      } else if (!correctPasswordRegex.test(passwordValue)) {
        setPasswordHelpText(
          `Hasło powinno z zawierać co najmniej 2 duże litery i 1 znak specjalny`
        );
      } else if (20 < passwordValue.length) {
        setPasswordHelpText(
          `Twoje hasło powinno mieć conajwyżej 20 liter, a ma ${passwordValue.length}`
        );
      }
    }
  };

  const handleSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
  };

  return (
    <LoginFormStyled>
      <LoginFormBoxStyled>
        <LoginFormTextFieldStyled
          required
          id="email"
          label="Email"
          name="email"
          variant="standard"
          autoComplete="email"
          error={isCorrect[0]}
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
          error={isCorrect[1]}
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
          onClick={handleSubmit}
        >
          Zaloguj się
        </LoginFormButtonStyled>
      </LoginButtonWrappersStyled>
    </LoginFormStyled>
  );
};

export { LoginForm };
