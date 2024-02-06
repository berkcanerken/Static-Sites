import React from 'react';
import { LayoutStyled } from './Layout.styled';
import { ContactSpeedDial } from '../ContactSpeedDial';
import { Footer } from '../Footer';
import { MainNavigationMenu } from '../MainNavigationMenu';
import { LayoutChildrenWrapper } from './LayoutChildrenWrapper';
// import {
//   FooterCopyrightApiType,
//   LogoApiType,
//   MenuApiType,
// } from '../../types/server';
import { Alert } from '../Alert';
import { AlertProvider } from '../Alert/Alert.context';

// export type LayoutProps = {
//   mainMenuLogo: LogoApiType;
//   mainMenuContact: MenuApiType;
//   mainMenu: MenuApiType;
//   footerSocial: MenuApiType;
//   footerPolicy: MenuApiType;
//   footerCopyright: FooterCopyrightApiType;
// };

type Props = React.PropsWithChildren;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyled>
      <AlertProvider>
        <LayoutChildrenWrapper>{children}</LayoutChildrenWrapper>

        <Alert />
      </AlertProvider>
    </LayoutStyled>
  );
};

export { Layout };
