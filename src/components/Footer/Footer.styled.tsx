import { defaultTheme } from '@/providers/ThemeProvider';
import { Avatar, Box, Chip } from '@mui/material';
import styled from 'styled-components';
import Link from 'next/link';

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100vw;
  min-height: 400px;
  height: fit-content;
  padding: 40px 25px;
  background: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const FootersContentWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

const FooterTextStyled = styled.p<{ opacity: number }>`
  color: white;
  opacity: ${({ opacity = 100 }) => opacity}%;
  text-align: center;
`;

const FooterLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: max-content;
  color: white;
`;

const FooterAvaterStyled = styled(Avatar)`
  background: ${({ theme }) => (theme as typeof defaultTheme).item};

  & .MuiSvgIcon-fontSizeMedium {
    width: 48px;
    height: 48px;
  }
`;

export {
  FooterStyled,
  FootersContentWrapperStyled,
  FooterTextStyled,
  FooterLinkStyled,
  FooterAvaterStyled,
};
