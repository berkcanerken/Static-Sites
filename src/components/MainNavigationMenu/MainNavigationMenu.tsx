import React from 'react';
import Image from 'next/image';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { v4 as uuid } from 'uuid';
import { checkTheContactMethod } from '@/handlers/checkTheContactMethod';
import {
  MainNavigationData,
  MainNavigationContactData,
} from './MainNavigationMenu.data';
import {
  MainNavigationMenuStyled,
  MainNavigationLogoWrapper,
  MainNavigationMenuButtonStyled,
  MainNavigationMenuListStyled,
  MainNavigationMenuListItemStyled,
  MainNavigationLogoWrapperOnMobile,
  MainNavigationMenuBoxStyled,
  MainNavigationLinkStyled,
  MainNavigationContentWrapper,
  MainNavigationDivider,
  MainNavigationHamburgerMenuIcon,
  MainNavigationCloseMenuIcon,
  MainNavigationContactListStyled,
  MainNavigationText,
} from './MainNavigationMenu.styled';
import { LogoApiType, MenuApiType } from '../types/server';

type MainNavigationMenuProps = {
  data: [LogoApiType, MenuApiType, MenuApiType];
};

const MainNavigationMenu: React.FC<MainNavigationMenuProps> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <MainNavigationMenuStyled position="static">
        <MainNavigationMenuBoxStyled>
          <MainNavigationLinkStyled href="/" underline="none">
            <MainNavigationLogoWrapperOnMobile>
              <Image
                src="/icons/mztsLogoWithoutText.svg"
                alt="logo MZTS"
                width="56"
                height="56"
              />
            </MainNavigationLogoWrapperOnMobile>

            <MainNavigationLogoWrapper>
              <Image
                src="/icons/mztsLogo.svg"
                alt="logo MZTS"
                width="128"
                height="128"
              />
            </MainNavigationLogoWrapper>
          </MainNavigationLinkStyled>

          <MainNavigationMenuButtonStyled onClick={toggleDrawer(!isOpen)}>
            {isOpen ? (
              <MainNavigationCloseMenuIcon />
            ) : (
              <MainNavigationHamburgerMenuIcon />
            )}
          </MainNavigationMenuButtonStyled>
        </MainNavigationMenuBoxStyled>

        <MainNavigationContentWrapper
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          isVisible={isOpen}
        >
          <MainNavigationContactListStyled>
            {MainNavigationContactData.map(({ name, icon, alt }) => {
              const href = checkTheContactMethod(name);

              return (
                <MainNavigationMenuListItemStyled key={`${name} : ${uuid()}`}>
                  <Image src={icon} alt={alt} width="26" height="26" />

                  {href ? (
                    <MainNavigationLinkStyled href={href} underline="none">
                      {name}
                    </MainNavigationLinkStyled>
                  ) : (
                    <MainNavigationText>{name}</MainNavigationText>
                  )}
                </MainNavigationMenuListItemStyled>
              );
            })}
          </MainNavigationContactListStyled>

          <MainNavigationDivider light />

          <MainNavigationMenuListStyled>
            {MainNavigationData.map(({ href, name }) => (
              <MainNavigationMenuListItemStyled key={`${name} : ${uuid()}`}>
                <MainNavigationLinkStyled href={href} underline="none">
                  {name}
                </MainNavigationLinkStyled>
              </MainNavigationMenuListItemStyled>
            ))}
          </MainNavigationMenuListStyled>
        </MainNavigationContentWrapper>
      </MainNavigationMenuStyled>
    </ClickAwayListener>
  );
};

export { MainNavigationMenu };
