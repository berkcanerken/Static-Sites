import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialAction } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { pxToRem } from '@/handlers/pxToRem';
import MuiAlert from '@mui/material/Alert';

const ContactSpeedDialStyled = styled(SpeedDial).withConfig({
  shouldForwardProp: (prop) => !['bottom'].includes(prop),
})<{ bottom: number }>`
  position: ${({ bottom }) => (bottom === 0 ? 'fixed' : 'absolute')};
  right: ${pxToRem(16)};
  bottom: ${pxToRem(16)};
  z-index: 1001;
  margin-bottom: ${({ bottom }) => (bottom === 0 ? 0 : pxToRem(bottom))};

  & > button {
    background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};

    &:hover,
    &:focus {
      background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
    }
  }

  @media screen and (min-width: ${pxToRem(1024)}) {
    display: none;
  }
`;

const ContactSpeedDialIconStyled = styled(QuestionAnswerOutlinedIcon)``;

const ContactSpeedDialActionStyled = styled(SpeedDialAction)``;

const ContactSpeedDialSvgStyled = styled.svg``;

const ContactSpeedDialAlertStyled = styled(MuiAlert)`
  background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
`;

export {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
  ContactSpeedDialAlertStyled,
};
