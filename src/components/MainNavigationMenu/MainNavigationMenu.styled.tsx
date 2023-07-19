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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 8px 0;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  box-shadow: none;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
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
    background-color: #1976d2;
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
`;

const MainNavigationCloseMenuIcon = styled(CloseRoundedIcon)`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
`;

const MainNavigationContentWrapper = styled(Box)<{ isVisible: boolean }>`
  display: ${({ isVisible = false }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-end;
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
  justify-content: space-between;
  gap: 10px;
  padding: 25px 0;
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

const MainNavigationText = styled(Typography)`
  width: max-content;
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const MainNavigationMenuListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;

  ${MainNavigationMenuListItemStyled} {
    ${MainNavigationLinkStyled} {
      font-weight: 600;
    }
  }

  ${MainNavigationMenuListItemStyled}:first-of-type {
    ${MainNavigationLinkStyled} {
      color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
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
