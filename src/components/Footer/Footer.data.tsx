import React from 'react';
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

type FooterDataProps = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const getFooterContactData = (): FooterDataProps[] => [
  {
    name: 'zobacz nas na Facebook',
    icon: <FacebookRoundedIcon />,
    link: 'https://www.facebook.com/MZTSport',
  },
];

const getPolicyData = (): FooterDataProps[] => [
  {
    name: 'Polityka prywatności',
    icon: <PrivacyTipRoundedIcon />,
    link: '',
  },

  {
    name: 'Polityka cookies',
    icon: <CookieRoundedIcon />,
    link: '',
  },
];

export { getFooterContactData, getPolicyData };
