import styled from 'styled-components';
import { defaultTheme } from '@/providers/ThemeProvider';
import { Box, Button, TextField } from '@mui/material';
import { pxToRem } from '@/handlers/pxToRem';

const RegistrationFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(48)};
  width: 100%;
  max-width: 90vw;
  margin: auto;
`;

const RegistrationFormHeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const RegistrationFormBoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: ${pxToRem(20)};
  width: 100%;
`;

const RegistrationFormTextFieldStyled = styled(TextField)`
  width: 100%;

  @media screen and (min-width: 520px) {
    width: ${pxToRem(200)};
  }

  @media screen and (min-width: 616px) {
    width: ${pxToRem(220)};
  }

  @media screen and (min-width: 670px) {
    width: ${pxToRem(250)};
  }
`;

const RegistrationButtonWrappersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: ${pxToRem(16)};
`;

const RegistrationFormButtonStyled = styled(Button)<{
  isPrimaryButton: boolean;
}>`
  background: ${({ theme, isPrimaryButton }) =>
    isPrimaryButton
      ? (theme as typeof defaultTheme).primaryItem
      : (theme as typeof defaultTheme).item};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  padding: 6px 15px;
  border-radius: 24px;
  text-transform: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    background: ${({ theme, isPrimaryButton }) =>
      isPrimaryButton
        ? (theme as typeof defaultTheme).primaryItem
        : (theme as typeof defaultTheme).item};
    color: ${({ theme }) => (theme as typeof defaultTheme).background};
  }
`;

export {
  RegistrationFormStyled,
  RegistrationFormHeadingStyled,
  RegistrationFormBoxStyled,
  RegistrationFormTextFieldStyled,
  RegistrationFormButtonStyled,
  RegistrationButtonWrappersStyled,
};
