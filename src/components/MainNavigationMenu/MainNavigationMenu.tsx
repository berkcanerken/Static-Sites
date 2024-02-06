import React from 'react';
import Image from 'next/image';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
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
  MainNavigationActivedLinkStyled,
  MainNavigationChipStyled,
  MainNavigationMenuListButtonStyled,
} from './MainNavigationMenu.styled';
// import { LogoApiType, MenuApiType } from '../../types/server';
import { ButtonActionWrapper } from '../ButtonActionWrapper';
import { CopyContentButton } from '../CopyContentButton';
import { DraverContext, DirectionObject } from '../Draver';
import { LoginForm } from '../LoginForm';

// type MainNavigationMenuProps = {
//   data: [LogoApiType, MenuApiType, MenuApiType];
// };

const getLinkWithoutBaseUrl = (link: string): string => {
  const endingOfLink = link.split('/')[3];

  return `/${endingOfLink}`;
};

const MainNavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [indexOfCurrentLink, setIndexOfCurrentLink] = React.useState<number>(0);
  const draverContext = React.useContext(DraverContext);

  React.useEffect(() => {
    const currentUrl = window.location.href;
    const endingOfUrl = getLinkWithoutBaseUrl(currentUrl);
    const indexOfCurrentLink = MainNavigationData.findIndex(
      (current) => current.href === endingOfUrl
    );

    setIndexOfCurrentLink(indexOfCurrentLink);
  }, [indexOfCurrentLink]);

  const handleClickAway = () => {};

  const toggleDrawer = (): void => {
    const directionObject = {
      ...draverContext?.draverObject.directionObject,
    } as DirectionObject;
    directionObject.right = true;

    draverContext?.setDraverObject({
      directionObject: directionObject,
      children: <LoginForm />,
    });
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <MainNavigationMenuStyled position="static">
        <MainNavigationMenuBoxStyled>
          <MainNavigationLinkStyled href="/">
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

          <MainNavigationMenuButtonStyled onClick={(): void => toggleDrawer()}>
            {isOpen ? (
              <MainNavigationCloseMenuIcon />
            ) : (
              <MainNavigationHamburgerMenuIcon />
            )}
          </MainNavigationMenuButtonStyled>
        </MainNavigationMenuBoxStyled>

        <MainNavigationContentWrapper role="presentation" isVisible={isOpen}>
          <MainNavigationContactListStyled>
            {MainNavigationContactData.map(({ name, icon, alt }) => {
              const href = checkTheContactMethod(name);

              return (
                <MainNavigationMenuListItemStyled key={`${name} : ${uuid()}`}>
                  {href ? (
                    <MainNavigationChipStyled
                      label={name}
                      component="a"
                      href={href}
                      clickable
                      avatar={
                        <Image src={icon} alt={alt} width="26" height="26" />
                      }
                    />
                  ) : (
                    <CopyContentButton
                      textToBeCopied={name}
                      icon={
                        <Image src={icon} alt={alt} width="26" height="26" />
                      }
                    />
                  )}
                </MainNavigationMenuListItemStyled>
              );
            })}
          </MainNavigationContactListStyled>

          <MainNavigationDivider light />

          <MainNavigationMenuListStyled>
            {/* {data[2].map((current, index) => (
              <MainNavigationMenuListItemStyled
                key={`${current.label} : ${uuid()}`}
              >
                <ButtonActionWrapper>
                  {current.label === 'Logowanie' ? (
                    <MainNavigationMenuListButtonStyled
                      onClick={(): void => {
                        toggleDrawer();
                      }}
                    >
                      {current.label}
                    </MainNavigationMenuListButtonStyled>
                  ) : (
                    <MainNavigationActivedLinkStyled
                      isCurrentVisited={
                        index === indexOfCurrentLink ? true : false
                      }
                      href={current.url}
                    >
                      {current.label}
                    </MainNavigationActivedLinkStyled>
                  )}
                </ButtonActionWrapper>
              </MainNavigationMenuListItemStyled>
            ))} */}
          </MainNavigationMenuListStyled>
        </MainNavigationContentWrapper>
      </MainNavigationMenuStyled>
    </ClickAwayListener>
  );
};

export { MainNavigationMenu };
