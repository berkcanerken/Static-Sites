import React from 'react';
import {
  AdministrationPanelMobileMenuItemsStyled,
  AdministrationPanelMobileMenuStyled,
  AdminstrationPanelMobileMenuAccountWrapperStyled,
  AdminstrationPanelMobileMenuButtonStyled,
} from './AdministrationPanelMobileMenu.styled';
import { tabsClasses } from '@mui/material/Tabs';
import {
  administrationPanelNavigationItem,
  administrationPanelAccountItems,
} from '../AdministrationPanelLayout.data';
import { Divider } from '@/components/Divider';

const AdministrationPanelMobileMenu: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const userAccess = 'trainer';

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AdministrationPanelMobileMenuStyled
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="visible arrows tabs example"
        orientation="vertical"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {administrationPanelNavigationItem().map(({ name, icon }) => (
          <AdministrationPanelMobileMenuItemsStyled
            key={name}
            icon={icon}
            label={name}
          />
        ))}
      </AdministrationPanelMobileMenuStyled>

      <Divider />

      <AdminstrationPanelMobileMenuAccountWrapperStyled>
        {administrationPanelAccountItems().map(({ name, icon }) => (
          <AdminstrationPanelMobileMenuButtonStyled startIcon={icon}>
            {name}
          </AdminstrationPanelMobileMenuButtonStyled>
        ))}
      </AdminstrationPanelMobileMenuAccountWrapperStyled>
    </>
  );
};

export { AdministrationPanelMobileMenu };
