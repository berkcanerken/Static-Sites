import styled from 'styled-components';
import Draver from '@mui/material/Drawer';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { pxToRem } from '@/handlers/pxToRem';
import { Button, Divider } from '@mui/material';
import { defaultTheme } from '@/providers/ThemeProvider';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const DraverStyled = styled(Draver)``;

const DraverWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: ${pxToRem(600)};
  max-width: 100vw;
  height: 100dvh;
`;

const DraverTabListStyled = styled(TabList)`
  width: 100%;
  margin-bottom: ${pxToRem(48)};
`;

const DraverTabStyled = styled(Tab)`
  width: 50%;
`;

const ExitButton = styled(Button)`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
`;

const ExitIcon = styled(CloseRoundedIcon)`
  color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
`;

const DividerStyled = styled(Divider)`
  width: 100%;
  background: ${({ theme }) => (theme as typeof defaultTheme).secondaryItem};
`;

export {
  DraverStyled,
  DraverTabListStyled,
  DraverTabStyled,
  DraverWrapperStyled,
  DividerStyled,
  ExitButton,
  ExitIcon,
};
