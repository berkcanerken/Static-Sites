import { defaultTheme } from '@/providers/ThemeProvider';
import styled from 'styled-components';

const OutsideLinkStyled = styled.a`
  padding: 10px 50px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => (theme as typeof defaultTheme).text};

  &:hover {
    color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  }
`;

export { OutsideLinkStyled };
