import { defaultTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import styled from 'styled-components';

const InsideLinkStyled = styled(Link)<{ isPrimary: boolean }>`
  padding: 10px 50px;
  border: solid 2px
    ${({ theme, isPrimary }) =>
      isPrimary
        ? (theme as typeof defaultTheme).primaryItem
        : (theme as typeof defaultTheme).item};
  border-radius: 24px;
  background: ${({ theme, isPrimary }) =>
    isPrimary
      ? (theme as typeof defaultTheme).primaryItem
      : (theme as typeof defaultTheme).item};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => (theme as typeof defaultTheme).background};
    color: ${({ theme, isPrimary }) =>
      isPrimary
        ? (theme as typeof defaultTheme).primaryItem
        : (theme as typeof defaultTheme).item};
  }
`;

export { InsideLinkStyled };
