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
import { DirectionObject, DraverContext } from '@/components/Draver';

const AdministrationPanelMobileMenu: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const draverContext = React.useContext(DraverContext);

  const userAccess = 'trainer';

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabLinkClick = (event: React.MouseEvent): void => {
    draverContext?.setDraverObject({
      directionObject: {
        right: false,
      } as DirectionObject,
      children: draverContext.draverObject.children,
    });
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
        {administrationPanelNavigationItem().map(({ name, icon, link }) => (
          <AdministrationPanelMobileMenuItemsStyled
            key={name}
            icon={icon}
            label={name}
            href={link ? link : ''}
            onClick={handleTabLinkClick}
          />
        ))}
      </AdministrationPanelMobileMenuStyled>

      <Divider />

      <AdminstrationPanelMobileMenuAccountWrapperStyled>
        {administrationPanelAccountItems().map(({ name, icon }) => (
          <AdminstrationPanelMobileMenuButtonStyled key={name} startIcon={icon}>
            {name}
          </AdminstrationPanelMobileMenuButtonStyled>
        ))}
      </AdminstrationPanelMobileMenuAccountWrapperStyled>
    </>
  );
};

export { AdministrationPanelMobileMenu };
