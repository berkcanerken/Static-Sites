import styled from 'styled-components';
import Draver from '@mui/material/Drawer';
import { defaultTheme } from '@/providers/ThemeProvider';

const AutenticationDraverStyled = styled(Draver)`
  h2 {
    color: ${({ theme }) => (theme as typeof defaultTheme).placeHolder};
    padding: 30px;
  }
`;

export { AutenticationDraverStyled };
