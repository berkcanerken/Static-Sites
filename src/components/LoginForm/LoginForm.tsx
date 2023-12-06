import React from 'react';
import {
  LoginFormStyled,
  LoginFormBoxStyled,
  LoginFormTextFieldStyled,
  LoginFormButtonStyled,
  LoginButtonWrappersStyled,
  LoginFormControlStyled,
  LoginFormSwitchStyled,
} from './LoginForm.styled';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from './LoginForm.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { AlertContext } from '../Alert/Alert.context';
import { signIn } from 'next-auth/react';

type LoginFormType = {
  email: string;
  password: string;
};

type CredentialsType = {
  identifier: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const toasts = React.useContext(AlertContext);

  const objectWithInicialValues = {
    email: '',
    password: '',
  } as LoginFormType;

  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: objectWithInicialValues,
    resolver: yupResolver(loginSchema),
  });

  const handleSignIn = async (credentials: CredentialsType) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.identifier,
        password: credentials.password,
      });

      if (!result?.ok) {
        toasts?.setMessage({
          text: 'Email lub hasło jest błędne',
          icon: <ReportGmailerrorredRoundedIcon />,
          color: 'error',
          severity: 'error',
        });
      } else {
        console.log('odpowiedź: ', result);

        toasts?.setMessage({
          text: `Witaj`,
          icon: <CheckCircleRoundedIcon />,
          color: 'success',
          severity: 'success',
        });
      }
    } catch (error) {
      console.error(error);

      toasts?.setMessage({
        text: 'Problem z odpowiedzią servera',
        icon: <ReportGmailerrorredRoundedIcon />,
        color: 'error',
        severity: 'error',
      });
    }
  };

  const handleSubmitValid: SubmitHandler<LoginFormType> = (formValues) => {
    const credentials: CredentialsType = {
      identifier: formValues.email,
      password: formValues.password,
    };

    handleSignIn(credentials);

    toasts?.setMessage({
      text: 'Info: Zapytanie zostało wysłane na server',
      icon: <CheckCircleRoundedIcon />,
      color: 'info',
      severity: 'info',
    });
  };

  const handleSubmitInvalid = () => {
    toasts?.setMessage({
      text: 'Błąd: Pole formularza są wypełnione niepoprawnie',
      icon: <ReportGmailerrorredRoundedIcon />,
      color: 'error',
      severity: 'error',
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    handleSubmit(handleSubmitValid, handleSubmitInvalid)(event);
  };

  return (
    <LoginFormStyled onSubmit={onSubmit}>
      <LoginFormBoxStyled>
        <LoginFormTextFieldStyled
          required
          {...register('email')}
          id="email"
          label="Email"
          name="email"
          variant="standard"
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email ? errors?.email.message : null}
        />

        <LoginFormTextFieldStyled
          required
          {...register('password')}
          id="password"
          label="Hasło"
          name="password"
          type={isPasswordVisible ? 'text' : 'password'}
          variant="standard"
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password ? errors?.password.message : null}
        />
      </LoginFormBoxStyled>

      <LoginButtonWrappersStyled>
        <LoginFormControlStyled
          label="Pokaż hasło"
          control={
            <LoginFormSwitchStyled
              onChange={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
        />

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
