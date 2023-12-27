import { pxToRem } from '@/handlers/pxToRem';
import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import { Button } from '@mui/material';

const AdministrationPanelMobileMenuStyled = styled(Tabs)`
  display: flex;
  align-items: end;
  padding: ${pxToRem('30 30 30 0')};
`;

const AdministrationPanelMobileMenuItemsStyled = styled(Tab)`
  flex-direction: row-reverse;
  justify-content: flex-start;
  gap: ${pxToRem(20)};
`;

const AdminstrationPanelMobileMenuAccountWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: ${pxToRem(30)};
`;

const AdminstrationPanelMobileMenuButtonStyled = styled(Button)``;

export {
  AdministrationPanelMobileMenuItemsStyled,
  AdministrationPanelMobileMenuStyled,
  AdminstrationPanelMobileMenuAccountWrapperStyled,
  AdminstrationPanelMobileMenuButtonStyled,
};
