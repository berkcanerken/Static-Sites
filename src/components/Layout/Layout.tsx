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
import { AutenticationDraver } from '../AutenticationDraver';

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
      <MainNavigationMenu data={[mainMenuLogo, mainMenuContact, mainMenu]} />

      <AutenticationDraver />

      <LayoutChildrenWrapper>{children}</LayoutChildrenWrapper>

      <ContactSpeedDial data={mainMenuContact} />

      <Footer data={[footerSocial, footerPolicy, footerCopyright]} />
    </LayoutStyled>
  );
};

export { Layout };
