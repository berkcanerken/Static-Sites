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
  const initialValuesOfFields = Array.from(
    { length: registrationInputs.length },
    () => ''
  );

  const [formFieldValues, setFormFieldValues] = React.useState<string[]>(
    initialValuesOfFields
  );

  const [helperText, setHelperText] = React.useState<string[]>(
    initialValuesOfFields
  );

  const handleFormFields = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const currentFieldsValues = [...formFieldValues];
    currentFieldsValues[index] = event.target.value;

    setFormFieldValues(currentFieldsValues);
  };

  const handleSubmit = (): void => {};

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
                  handleFormFields(event, index),
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
          onSubmit={handleSubmit}
        >
          Zarejestruj się
        </RegistrationFormButtonStyled>
      </RegistrationButtonWrappersStyled>
    </RegistrationFormStyled>
  );
};

export { RegistrationForm };
