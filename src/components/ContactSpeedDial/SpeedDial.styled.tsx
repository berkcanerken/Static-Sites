import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialAction } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';

const ContactSpeedDialStyled = styled(SpeedDial)`
  position: fixed;
  right: 16px;
  bottom: 16px;

  .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab {
    background: ${({ theme }) => (theme as typeof defaultTheme).item};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ContactSpeedDialIconStyled = styled(SpeedDialIcon)``;

const ContactSpeedDialActionStyled = styled(SpeedDialAction)``;

const ContactSpeedDialSvgStyled = styled.svg``;

export {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
};
