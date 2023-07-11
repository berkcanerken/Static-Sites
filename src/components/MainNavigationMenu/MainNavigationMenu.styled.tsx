import { AppBar, Button, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import styled from 'styled-components';

const MainNavigationMenuStyled = styled(AppBar)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const MainNavigationMenuButtonStyled = styled(Button)`
  width: 48px;
  height: 48px;
`;

const MainNavigationMenuMenuListStyled = styled(Menu)``;

const MainNavigationMenuListItemStyled = styled(MenuItem)``;

const MainNavigationLogoWrapper = styled.div`
  width: fit-content;
  display: none;

  &:first-of-type {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: block;

    &:first-of-type {
      display: none;
    }
  }
`;

export {
  MainNavigationMenuStyled,
  MainNavigationMenuListItemStyled,
  MainNavigationMenuMenuListStyled,
  MainNavigationLogoWrapper,
  MainNavigationMenuButtonStyled,
};
