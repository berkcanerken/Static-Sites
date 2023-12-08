import React from 'react';
import {
  AdministrationPanelHeaderStyled,
  ArticleStyled,
  LinkStyled,
} from './AdministrationPanelLayout.styled';
import Link from 'next/link';
import Image from 'next/image';

type AdministrationPanelLayoutProps = React.PropsWithChildren;

const AdminstrationPanelLayout: React.FC<AdministrationPanelLayoutProps> = ({
  children,
}) => {
  return (
    <ArticleStyled>
      <AdministrationPanelHeaderStyled>
        <LinkStyled href="/">
          <Image
            src="/icons/mztsLogoWithoutText.svg"
            alt="logo MZTS"
            width="56"
            height="56"
          />
        </LinkStyled>
        <LinkStyled href="/"></LinkStyled>
      </AdministrationPanelHeaderStyled>
    </ArticleStyled>
  );
};

export { AdminstrationPanelLayout };
