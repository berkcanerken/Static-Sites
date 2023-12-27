import React from 'react';
import { LayoutStyled } from './Layout.styled';
import { ContactSpeedDial } from '../ContactSpeedDial';
import { Footer } from '../Footer';
import { MainNavigationMenu } from '../MainNavigationMenu';
import { LayoutChildrenWrapper } from './LayoutChildrenWrapper';
import {
  FooterCopyrightApiType,
  LogoApiType,
  MenuApiType,
} from '../types/server';
import { Draver } from '../Draver';
import { Alert } from '../Alert';
import { AlertProvider } from '../Alert/Alert.context';

export type LayoutProps = {
  mainMenuLogo: LogoApiType;
  mainMenuContact: MenuApiType;
  mainMenu: MenuApiType;
  footerSocial: MenuApiType;
  footerPolicy: MenuApiType;
  footerCopyright: FooterCopyrightApiType;
};

type Props = React.PropsWithChildren<LayoutProps>;

const Layout: React.FC<Props> = ({
  children,
  mainMenuLogo,
  mainMenuContact,
  mainMenu,
  footerSocial,
  footerPolicy,
  footerCopyright,
}) => {
  return (
    <LayoutStyled>
      <AlertProvider>
        <MainNavigationMenu data={[mainMenuLogo, mainMenuContact, mainMenu]} />

        <LayoutChildrenWrapper>{children}</LayoutChildrenWrapper>

        <ContactSpeedDial data={mainMenuContact} />

        <Alert />

        <Footer data={[footerSocial, footerPolicy, footerCopyright]} />
      </AlertProvider>
    </LayoutStyled>
  );
};

export { Layout };
