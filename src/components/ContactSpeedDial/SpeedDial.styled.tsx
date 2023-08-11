import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialAction } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const ContactSpeedDialStyled = styled(SpeedDial).withConfig({
  shouldForwardProp: (prop) => !['isNearBottom'].includes(prop),
})<{ isNearBottom: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1001;
  margin-bottom: ${(isNearBootom) => (!isNearBootom ? '400px' : '0')};

  .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab {
    background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ContactSpeedDialIconStyled = styled(QuestionAnswerOutlinedIcon)``;

const ContactSpeedDialActionStyled = styled(SpeedDialAction)``;

const ContactSpeedDialSvgStyled = styled.svg``;

export {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
};
