import React, { FC } from 'react';
import {
  MainNavigationMenuStyled,
  MainNavigationLogoWrapper,
  MainNavigationMenuButtonStyled,
  MainNavigationMenuMenuListStyled,
  MainNavigationMenuListItemStyled,
} from './MainNavigationMenu.styled';
import Image from 'next/image';
import Draver from '@mui/material/Drawer';
import { MainNavigationData } from './MainNavigationMenu.data';
import { v4 as uuid } from 'uuid';

const MainNavigationMenu = () => {
  const anchor = 'top' as const;

  return (
    <MainNavigationMenuStyled position="static">
      <MainNavigationLogoWrapper>
        <Image
          src="/icons/mztsLogoWithoutText.svg"
          alt="logo MZTS"
          width="64"
          height="64"
        ></Image>
      </MainNavigationLogoWrapper>

      <MainNavigationLogoWrapper>
        <Image
          src="/icons/mztsLogo.svg"
          alt="logo MZTS"
          width="128"
          height="128"
        ></Image>
      </MainNavigationLogoWrapper>

      <MainNavigationMenuButtonStyled onClick={toggleDrawer(anchor, true)}>
        {anchor}
      </MainNavigationMenuButtonStyled>

      <Draver
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <MainNavigationMenuMenuListStyled>
          {MainNavigationData.map(({ href, name }) => (
            <MainNavigationMenuListItemStyled key={`${name} : ${uuid()}`}>
              {name}
            </MainNavigationMenuListItemStyled>
          ))}
        </MainNavigationMenuMenuListStyled>
      </Draver>
    </MainNavigationMenuStyled>
  );
};

export { MainNavigationMenu };
