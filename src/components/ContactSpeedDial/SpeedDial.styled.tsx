import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialAction } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { pxToRem } from '@/handlers/pxToRem';

const ContactSpeedDialStyled = styled(SpeedDial).withConfig({
  shouldForwardProp: (prop) => !['bottomMargin'].includes(prop),
})<{ bottomMargin: number }>`
  position: fixed;
  right: ${pxToRem(16)};
  bottom: ${pxToRem(16)};
  z-index: 1001;
  margin-bottom: ${({ bottomMargin }) => pxToRem(bottomMargin)};

  & > button {
    background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  }

  @media screen and (min-width: ${pxToRem(1024)}) {
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
