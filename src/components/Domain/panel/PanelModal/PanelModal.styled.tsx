import { pxToRem } from '@/handlers/pxToRem';
import { Dialog, FormControl } from '@mui/material';
import styled from 'styled-components';

const PanelModalStyled = styled(Dialog)``;

const PanelFormStyled = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${pxToRem(16)};
  flex-wrap: wrap;
  padding: ${pxToRem(32)};
`;

export { PanelModalStyled, PanelFormStyled };
