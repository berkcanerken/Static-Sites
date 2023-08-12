import {
  AppBar,
  Button,
  List,
  ListItem,
  Box,
  Link,
  Divider,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { defaultTheme } from '@/providers/ThemeProvider';

const MainNavigationMenuStyled = styled(AppBar)`
  position: fixed !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 8px 0 !important;
  background: ${({ theme }) =>
    (theme as typeof defaultTheme).background} !important;
  box-shadow: none;
  z-index: 1002;

  @media screen and (min-width: 1024px) {
    position: relative !important;
    flex-direction: row !important;
    justify-content: center !important;
    padding: 0 !important;
    gap: 20px !important;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px !important;
  }
`;

const MainNavigationMenuBoxStyled = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;
  padding: 0 40px !important;

  @media screen and (min-width: 1024px) {
    width: fit-content !important;
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
  min-width: 48px !important;
  width: 48px !important;
  height: 48px !important;
  background: ${({ theme }) => theme.background} !important;
  border-radius: 50% !important;
  overflow: hidden !important;

  &:hover,
  &:focus {
    transform: scale(1.05) !important;
  }

  @media screen and (min-width: 1024px) {
    display: none !important;
  }
`;

const MainNavigationHamburgerMenuIcon = styled(MenuRoundedIcon)`
  width: 48px !important;
  height: 48px !important;
  background: ${({ theme }) =>
    (theme as typeof defaultTheme).background} !important;

  &:first-child {
    fill: ${({ theme }) => (theme as typeof defaultTheme).item} !important;
  }
`;

const MainNavigationCloseMenuIcon = styled(CloseRoundedIcon)`
  width: 48px !important;
  height: 48px !important;
  background: ${({ theme }) =>
    (theme as typeof defaultTheme).background} !important;

  &:first-child {
    fill: ${({ theme }) => (theme as typeof defaultTheme).item} !important;
  }
`;

const MainNavigationContentWrapper = styled(Box).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})<{ isVisible: boolean }>`
  display: ${({ isVisible = false }) =>
    isVisible ? 'flex' : 'none'} !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;

  @media screen and (min-width: 1024px) {
    display: flex !important;
    align-items: flex-end !important;
    width: fit-content !important;
  }
`;

const MainNavigationDivider = styled(Divider)`
  display: none !important;
  width: 90% !important;
  background-color: ${({ theme }) =>
    (theme as typeof defaultTheme).item} !important;

  @media screen and (min-width: 1024px) {
    display: block !important;
  }
`;

const MainNavigationMenuListItemStyled = styled(ListItem)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: 100% !important;
  height: 40px !important;
  padding: 0 !important;

  @media screen and (min-width: 1024px) {
    width: fit-content !important;
    height: fit-content !important;
    padding: 25px 0 !important;
  }
`;

const MainNavigationContactListStyled = styled(List)`
  display: none !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 25px !important;

  ${MainNavigationMenuListItemStyled} {
    padding: 10px 0 !important;
  }

  @media screen and (min-width: 1024px) {
    display: flex !important;
  }
`;

const MainNavigationLinkStyled = styled(Link)`
  width: max-content !important;
  color: ${({ theme }) => (theme as typeof defaultTheme).item} !important;
`;

const MainNavigationText = styled(Typography)`
  width: max-content !important;
  color: ${({ theme }) => (theme as typeof defaultTheme).item} !important;
`;

const MainNavigationMenuListStyled = styled(List)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;

  ${MainNavigationMenuListItemStyled} {
    ${MainNavigationLinkStyled} {
      font-weight: 600 !important;
    }
  }

  ${MainNavigationMenuListItemStyled}:first-of-type {
    ${MainNavigationLinkStyled} {
      color: ${({ theme }) =>
        (theme as typeof defaultTheme).primaryItem} !important;
    }
  }

  @media screen and (min-width: 1024px) {
    width: fit-content !important;
    flex-direction: row !important;
    gap: 15px !important;
  }

  @media screen and (min-width: 1280px) {
    gap: 25px !important;
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
  MainNavigationContentWrapper,
  MainNavigationDivider,
  MainNavigationCloseMenuIcon,
  MainNavigationHamburgerMenuIcon,
  MainNavigationContactListStyled,
  MainNavigationText,
};
