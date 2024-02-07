import { defaultTheme } from '@/providers/ThemeProvider';
import Chip from '@mui/material/Chip';
import MuiAlert from '@mui/material/Alert';
import styled from 'styled-components';

const CopyContentButtonStyled = styled(Chip)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  font-size: 16px;
`;

const CopyContentButtonWrapperStyled = styled.div`
  position: relative;
`;

export { CopyContentButtonStyled, CopyContentButtonWrapperStyled };
