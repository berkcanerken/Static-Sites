import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';

type AccessType = 'trainer' | 'competitor' | 'full';

type NavigationPanelItemType = {
  name: string;
  urlIdentifier: string;
  icon: React.ReactElement;
  typeOfItem: 'link' | 'button';
  link?: string;
  access?: AccessType;
};

export type TabsObjectStateType = {
  previous: number;
  current: number;
};

const administrationPanelNavigationItem = (): Omit<
  NavigationPanelItemType,
  'typeOfItem'
>[] => [
  {
    name: 'Panel',
    urlIdentifier: 'panel',
    icon: <AccountTreeRoundedIcon />,
    link: '/panel',
    access: 'full',
  },

  {
    name: 'Ustawienia',
    urlIdentifier: 'ustawienia',
    icon: <SettingsIcon />,
    link: '/panel/ustawienia',
    access: 'full',
  },

  {
    name: 'Zarządzaj zawodnikami',
    urlIdentifier: 'zarzadzaj-zawodnikami',
    icon: <Diversity3RoundedIcon />,
    link: '/panel/zarzadzaj-zawodnikami',
    access: 'trainer',
  },

  {
    name: 'Zarządaj klubem',
    urlIdentifier: 'zarzadzaj-klubem',
    icon: <AssessmentRoundedIcon />,
    link: '/panel/zarzadzaj-klubem',
    access: 'trainer',
  },

  {
    name: 'Skonfiguruj pŁatności',
    urlIdentifier: 'skonfiguruj-platnosci',
    icon: <LocalAtmRoundedIcon />,
    link: '/panel/skonfiguruj-platnosci',
    access: 'competitor',
  },
];

const administrationPanelAccountItems = (): Omit<
  NavigationPanelItemType,
  'access' | 'urlIdentifier'
>[] => [
  {
    name: 'Twoje konto',
    icon: <AccountCircleRoundedIcon />,
    typeOfItem: 'button',
  },

  {
    name: 'Wyloguj się',
    icon: <LogoutIcon />,
    typeOfItem: 'link',
    link: '/',
  },
];

const flattedArrayOfUrl = administrationPanelNavigationItem().map(
  (current) => current.urlIdentifier
);

export {
  administrationPanelNavigationItem,
  administrationPanelAccountItems,
  flattedArrayOfUrl,
};
