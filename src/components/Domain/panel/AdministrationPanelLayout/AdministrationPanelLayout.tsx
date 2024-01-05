import React from 'react';
import {
  AdministrationPanelHeaderStyled,
  ArticleStyled,
  TabsStyled,
  ContentStyled,
  ContentWrapperStyled,
  AdministrationPanelIconButtonStyled,
  AdministrationPanelNavigationButtonsWrapper,
  AdministrationPanelNavigationWrapperStyled,
  AdministrationPanelAccountButtonsWrapperStyled,
  AdministrationPanelAccountButtonStyled,
  PanelFullScreenWidthWrapperStyled,
} from './AdministrationPanelLayout.styled';
import Image from 'next/image';
import { InsideLink } from '@/components/InsideLink';
import { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import { DirectionObject, DraverContext } from '@/components/Draver';
import { AdministrationPanelMobileMenu } from './AdministrationPanelMobileMenu';
import {
  administrationPanelAccountItems,
  administrationPanelNavigationItem,
} from './AdministrationPanelLayout.data';
import { Divider } from '@/components/Divider';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getValueFromPath } from './AdministrationPanelLayout.handlers';
import Link from 'next/link';
import { PanelSection } from '../PanelSection';
import {
  PANEL_SECTION_COMPONENT,
  PANEL_SECTION_HEADER,
} from '../PanelSection/PanelSection.data';

type AdministrationPanelLayoutProps = React.PropsWithChildren;

export type TabsStatesType = {
  previous: number;
  current: number;
};

type HeroContentType = {
  heading: string;
  text: string;
  icon: React.ReactNode;
};

const defaultHeroContent = {
  heading: '',
  icon: null,
  text: '',
} as HeroContentType;

const AdminstrationPanelLayout: React.FC<AdministrationPanelLayoutProps> = ({
  children,
}) => {
  const [value, setValue] = React.useState<number>(0);
  const [heroContent, setHeroContent] =
    React.useState<HeroContentType>(defaultHeroContent);

  React.useEffect(() => {
    const path = window.location.pathname;
    const lastChunkOfPath = path.split('/').reverse()[0];

    const currentObjectFormPath = administrationPanelNavigationItem().find(
      (current) => current.urlIdentifier === lastChunkOfPath
    );

    setHeroContent({
      heading: currentObjectFormPath?.name ?? '',
      text: currentObjectFormPath?.contentText ?? '',
      icon: currentObjectFormPath?.icon,
    });
    setValue(getValueFromPath(lastChunkOfPath));
  }, []);

  const draverContext = React.useContext(DraverContext);

  const accountSettings = (): React.ReactNode => <h2>Ustawienia konta</h2>;

  const openAccoutDraver = (): void => {
    const directionObject = {
      ...draverContext?.draverObject.directionObject,
    } as DirectionObject;
    directionObject.right = true;

    draverContext?.setDraverObject({
      directionObject: directionObject,
      children: accountSettings(),
    });
  };

  const handleAccountButton = (): void => {
    openAccoutDraver();
  };

  const handleMenuButton = (): void => {
    const directionObject = {
      ...draverContext?.draverObject.directionObject,
    } as DirectionObject;
    directionObject.right = true;

    draverContext?.setDraverObject({
      directionObject: directionObject,
      children: <AdministrationPanelMobileMenu />,
    });
  };

  const handleAccountButtonClick = (name: string): void => {
    if (name === 'Twoje konto') {
      openAccoutDraver();
    }
  };

  return (
    <ArticleStyled>
      <AdministrationPanelHeaderStyled>
        <InsideLink padding="6 10">
          <Image
            src="/icons/mztsLogoWithoutText.svg"
            alt="logo MZTS"
            width="48"
            height="48"
          />
        </InsideLink>

        <AdministrationPanelNavigationButtonsWrapper>
          <AdministrationPanelIconButtonStyled
            displayNoneOnDesktop={false}
            onClick={handleAccountButton}
          >
            <AccountCircleRoundedIcon fontSize="large" />
          </AdministrationPanelIconButtonStyled>

          <AdministrationPanelIconButtonStyled
            displayNoneOnDesktop
            onClick={handleMenuButton}
          >
            <DragHandleRoundedIcon fontSize="large" />
          </AdministrationPanelIconButtonStyled>
        </AdministrationPanelNavigationButtonsWrapper>
      </AdministrationPanelHeaderStyled>

      <ContentWrapperStyled>
        <AdministrationPanelNavigationWrapperStyled>
          <TabsStyled
            value={value}
            variant="scrollable"
            aria-label="visible arrows tabs example"
            orientation="vertical"
            role="navigation"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
          >
            {administrationPanelNavigationItem().map(({ name, icon, link }) => (
              <Tab
                key={name}
                icon={icon}
                label={name}
                LinkComponent={Link}
                href={link ? link : ''}
              />
            ))}
          </TabsStyled>

          <AdministrationPanelAccountButtonsWrapperStyled>
            {administrationPanelAccountItems().map(({ name, icon }) => (
              <AdministrationPanelAccountButtonStyled
                key={name}
                startIcon={icon}
                onClick={(): void => handleAccountButtonClick(name)}
              >
                {name}
              </AdministrationPanelAccountButtonStyled>
            ))}
          </AdministrationPanelAccountButtonsWrapperStyled>
        </AdministrationPanelNavigationWrapperStyled>

        <ContentStyled>
          <PanelFullScreenWidthWrapperStyled>
            <Breadcrumbs />

            <Divider />
          </PanelFullScreenWidthWrapperStyled>

          <PanelSection
            component={PANEL_SECTION_COMPONENT.HEADER}
            headerComponent={PANEL_SECTION_HEADER.H1}
            header={heroContent.heading}
            icon={heroContent.icon}
          >
            <p>{heroContent.text}</p>
          </PanelSection>

          {children}
        </ContentStyled>
      </ContentWrapperStyled>
    </ArticleStyled>
  );
};

export { AdminstrationPanelLayout };
