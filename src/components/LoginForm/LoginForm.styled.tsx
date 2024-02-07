import styled from 'styled-components';
import { defaultTheme } from '@/providers/ThemeProvider';
import { Button, Switch, TextField, FormControlLabel } from '@mui/material';
import { pxToRem } from '@/handlers/pxToRem';

const LoginFormStyled = styled.form.attrs(() => ({
  noValidate: 'true',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(48)};
  width: 100%;
  max-width: 90vw;
  margin: auto;
`;

const LoginFormHeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
`;

const LoginFormBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: ${pxToRem(20)};
  width: 100%;
`;

const LoginFormTextFieldStyled = styled(TextField)`
  width: 100%;
  max-width: ${pxToRem(350)};
`;

const LoginButtonWrappersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${pxToRem(16)};
`;

const LoginFormButtonStyled = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['isPrimaryButton'].includes(prop),
})<{ isPrimaryButton: boolean }>`
  background: ${({ theme, isPrimaryButton }) =>
    isPrimaryButton
      ? (theme as typeof defaultTheme).primaryItem
      : (theme as typeof defaultTheme).primaryItem};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  padding: ${pxToRem('6 15')};
  border-radius: ${pxToRem(24)};
  text-transform: none;

  &:hover,
  &:focus {
    background: ${({ theme, isPrimaryButton }) =>
      isPrimaryButton
        ? (theme as typeof defaultTheme).primaryItem
        : (theme as typeof defaultTheme).primaryItem};
    color: ${({ theme }) => (theme as typeof defaultTheme).background};
  }
`;

const LoginFormSwitchStyled = styled(Switch)``;

const LoginFormControlStyled = styled(FormControlLabel)``;

export {
  LoginFormStyled,
  LoginFormHeadingStyled,
  LoginFormBoxStyled,
  LoginFormTextFieldStyled,
  LoginFormButtonStyled,
  LoginButtonWrappersStyled,
  LoginFormControlStyled,
  LoginFormSwitchStyled,
};
