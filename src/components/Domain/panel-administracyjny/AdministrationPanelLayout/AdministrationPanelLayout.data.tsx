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
  icon: React.ReactElement;
  typeOfItem: 'link' | 'button';
  link?: string;
  access?: AccessType;
};

const administrationPanelNavigationItem = (): Omit<
  NavigationPanelItemType,
  'typeOfItem'
>[] => [
  {
    name: 'Panel',
    icon: <AccountTreeRoundedIcon />,
    link: '/',
    access: 'full',
  },

  {
    name: 'Ustawienia',
    icon: <SettingsIcon />,
    link: '/',
    access: 'full',
  },

  {
    name: 'Zarządzaj zawodnikami',
    icon: <Diversity3RoundedIcon />,
    link: '/',
    access: 'trainer',
  },

  {
    name: 'Zarządaj klubem',
    icon: <AssessmentRoundedIcon />,
    link: '/',
    access: 'trainer',
  },

  {
    name: 'Skonfiguruj pŁatności',
    icon: <LocalAtmRoundedIcon />,
    link: '/',
    access: 'competitor',
  },
];

const administrationPanelAccountItems = (): Omit<
  NavigationPanelItemType,
  'access'
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

export { administrationPanelNavigationItem, administrationPanelAccountItems };
