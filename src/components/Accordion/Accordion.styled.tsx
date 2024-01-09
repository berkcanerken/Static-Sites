import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import { AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import styled from 'styled-components';

const AccordionWrapperStyled = styled.div`
  width: 100%;
`;

const AccordionStyled = styled(Accordion)``;

const AccordionSummaryStyled = styled(AccordionSummary)`
  font-weight: 500;
  text-transform: uppercase;
`;

const AccordionDetailsStyled = styled(AccordionDetails)`
  background: ${({ theme }) => (theme as typeof defaultTheme).PanelBackground};
  font-weight: 500;
`;

export {
  AccordionWrapperStyled,
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
};
