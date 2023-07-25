import { defaultTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import styled from 'styled-components';

const InsideLinkStyled = styled(Link)`
  padding: 10px 50px;
  border: solid 2px ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  border-radius: 24px;
  background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => (theme as typeof defaultTheme).background};
    color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  }
`;

export { InsideLinkStyled };
