import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import { CircularProgress, Dialog } from '@mui/material';
import styled from 'styled-components';

const PanelModalStyled = styled(Dialog)``;

const PanelFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${pxToRem(16)};
  width: ${pxToRem(450)};
  max-width: 100%;
  padding: ${pxToRem(32)};
  overflow-y: auto;
`;

export { PanelModalStyled, PanelFormStyled };
