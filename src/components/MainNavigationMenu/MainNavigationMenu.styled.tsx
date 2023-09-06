import {
  AppBar,
  Button,
  List,
  ListItem,
  Box,
  Link as MuiLInk,
  Divider,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { defaultTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';

const MainNavigationMenuStyled = styled(AppBar)`
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  box-shadow: none;
  z-index: 1002;

  @media screen and (min-width: 1024px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

const MainNavigationMenuBoxStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;

  @media screen and (min-width: 1024px) {
    width: fit-content;
  }
`;

const MainNavigationLogoWrapper = styled.div`
  width: fit-content;
  display: none;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const MainNavigationLogoWrapperOnMobile = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const MainNavigationMenuButtonStyled = styled(Button)`
  min-width: 48px;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.background};
  border-radius: 50%;
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const MainNavigationHamburgerMenuIcon = styled(MenuRoundedIcon)`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};

  &:first-child {
    fill: ${({ theme }) => (theme as typeof defaultTheme).item};
  }
`;

const MainNavigationCloseMenuIcon = styled(CloseRoundedIcon)`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};

  &:first-child {
    fill: ${({ theme }) => (theme as typeof defaultTheme).item};
  }
`;

const MainNavigationContentWrapper = styled(Box).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})<{ isVisible: boolean }>`
  display: ${({ isVisible = false }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-end;
    width: fit-content;
  }
`;

const MainNavigationDivider = styled(Divider)`
  display: none;
  width: 90%;
  background-color: ${({ theme }) => (theme as typeof defaultTheme).item};

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const MainNavigationMenuListItemStyled = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 0;

  @media screen and (min-width: 1024px) {
    width: fit-content;
    height: fit-content;
    padding: 25px 0;
  }
`;

const MainNavigationContactListStyled = styled(List)`
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  ${MainNavigationMenuListItemStyled} {
    padding: 10px 0;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const MainNavigationLinkStyled = styled(Link)`
  width: max-content;
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const MainNavigationActivedLinkStyled = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['isCurrentVisited'].includes(prop),
})<{
  isCurrentVisited: boolean;
}>`
  width: max-content;
  color: ${({ theme, isCurrentVisited }) =>
    isCurrentVisited
      ? (theme as typeof defaultTheme).primaryItem
      : (theme as typeof defaultTheme).item};
  font-weight: 600;
`;

const MainNavigationText = styled(Typography)`
  width: max-content;
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const MainNavigationMenuListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: fit-content;
    flex-direction: row;
    gap: 15px;
  }

  @media screen and (min-width: 1280px) {
    gap: 25px;
  }
`;

export {
  MainNavigationMenuStyled,
  MainNavigationMenuListItemStyled,
  MainNavigationMenuListStyled,
  MainNavigationLogoWrapper,
  MainNavigationLogoWrapperOnMobile,
  MainNavigationMenuButtonStyled,
  MainNavigationMenuBoxStyled,
  MainNavigationLinkStyled,
  MainNavigationActivedLinkStyled,
  MainNavigationContentWrapper,
  MainNavigationDivider,
  MainNavigationCloseMenuIcon,
  MainNavigationHamburgerMenuIcon,
  MainNavigationContactListStyled,
  MainNavigationText,
};
