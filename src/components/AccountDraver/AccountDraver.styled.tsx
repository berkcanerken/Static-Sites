import styled from 'styled-components';
import Draver from '@mui/material/Drawer';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { pxToRem } from '@/handlers/pxToRem';
import { Button } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';
import KeyboardTabRoundedIcon from '@mui/icons-material/KeyboardTabRounded';

const AccountDraverStyled = styled(Draver)``;

const AccountDraverWrapperStyled = styled.div`
  width: ${pxToRem(600)};
  max-width: 100vw;
`;

const AccountDraverTabListStyled = styled(TabList)`
  width: 100%;
  margin-bottom: 12%;
`;

const AccountDraverTabStyled = styled(Tab)`
  width: 50%;
`;

const AccountExitButton = styled(Button)`
  width: 100%;
  height: ${pxToRem(48)};
  border-bottom: solid 2px
    ${({ theme }) => (theme as typeof defaultTheme).muiPanel};
  border-radius: 0;
`;

const AccountExitIcon = styled(KeyboardTabRoundedIcon)`
  color: ${({ theme }) => (theme as typeof defaultTheme).muiPanel};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
`;
export {
  AccountDraverStyled,
  AccountDraverTabListStyled,
  AccountDraverTabStyled,
  AccountDraverWrapperStyled,
  AccountExitButton,
  AccountExitIcon,
};
