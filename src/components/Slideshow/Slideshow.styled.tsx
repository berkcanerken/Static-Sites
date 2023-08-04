import styled from 'styled-components';
import { List, ListItem } from '@mui/material';
import Image from 'next/image';
import { defaultTheme } from '@/providers/ThemeProvider';

const SlideshowStyled = styled(List)<{ width: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-x: scroll;
  /* width: ${({ width }) => width}px; */

  &::-webkit-scrollbar {
    display: none;
  }

  &::-moz-scrollbar {
    display: none;
  }

  @media screen and (min-width: 360px) and (max-width: 361px) {
    padding: 0 14px;
  }
`;

const SlideshowItemStyled = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const SlideshowImageStyled = styled(Image)`
  border: solid 1px ${({ theme }) => (theme as typeof defaultTheme).lightBorder};
  border-radius: 24px;
  overflow-x: hidden;
`;

const SlideshowTextStyled = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => (theme as typeof defaultTheme).text};
`;

export {
  SlideshowStyled,
  SlideshowItemStyled,
  SlideshowImageStyled,
  SlideshowTextStyled,
};
