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
  contentText?: string;
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
    contentText: `Zarządzaj swoją platformą z łatwością! Panel administracyjny
    dostarcza narzędzi, które umożliwiają pełną kontrolę nad
    treściami, użytkownikami i ustawieniami.`,
    urlIdentifier: 'panel',
    icon: <AccountTreeRoundedIcon />,
    link: '/panel',
    access: 'full',
  },

  {
    name: 'Ustawienia',
    contentText: `Dostosuj ustawienia z łatwością! Precyzyjnie kontroluj konfigurację, personalizuj interfejs i dostosuj preferencje zgodnie z twoimi potrzebami.`,
    urlIdentifier: 'ustawienia',
    icon: <SettingsIcon />,
    link: '/panel/ustawienia',
    access: 'full',
  },

  {
    name: 'Zarządzaj zawodnikami',
    contentText: `Profesjonalne zarządzanie zawodnikami! Wspieraj rozwój zawodników, by osiągnęli swój pełny potencjał.`,
    urlIdentifier: 'zarzadzaj-zawodnikami',
    icon: <Diversity3RoundedIcon />,
    link: '/panel/zarzadzaj-zawodnikami',
    access: 'trainer',
  },

  {
    name: 'Zarządaj klubem',
    contentText: `Efektywne zarządzanie klubem! Skutecznie organizuj zespoły, harmonogramy i działania klubowe, aby osiągnąć sukces z łatwością.`,
    urlIdentifier: 'zarzadzaj-klubem',
    icon: <AssessmentRoundedIcon />,
    link: '/panel/zarzadzaj-klubem',
    access: 'trainer',
  },

  {
    name: 'Zapłać',
    contentText: `Szybka i bezpieczna płatność! Wygodna opcja opłat online umożliwiająca płynne rozliczenia i transakcje bez zbędnych komplikacji.`,
    urlIdentifier: 'zaplac',
    icon: <LocalAtmRoundedIcon />,
    link: '/panel/zaplac',
    access: 'competitor',
  },
];

const administrationPanelAccountItems = (): Omit<
  NavigationPanelItemType,
  'access' | 'urlIdentifier' | 'contentText'
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
