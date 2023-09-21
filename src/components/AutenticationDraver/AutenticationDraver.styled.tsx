import styled from 'styled-components';
import Draver from '@mui/material/Drawer';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { pxToRem } from '@/handlers/pxToRem';

const AutenticationDraverStyled = styled(Draver)``;

const AuthenticationDraverWrapperStyled = styled.div`
  width: 600px;
  max-width: 90vw;
`;

const AuthenticationDraverTabListStyled = styled(TabList)`
  width: 100%;
  margin-bottom: ${pxToRem(48)};
`;

const AuthenticationDraverTabStyled = styled(Tab)`
  width: 50%;
`;

export {
  AutenticationDraverStyled,
  AuthenticationDraverTabListStyled,
  AuthenticationDraverTabStyled,
  AuthenticationDraverWrapperStyled,
};
