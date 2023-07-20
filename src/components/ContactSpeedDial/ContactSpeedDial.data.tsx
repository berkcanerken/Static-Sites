import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

type Contact = {
  name: string;
  icon: React.ReactNode;
  action: string;
};

const getContactData = (): Contact[] => [
  {
    name: 'ul. Olesin 31F, 03-289 Warszawa',
    icon: <LocationOnRoundedIcon />,
    action: 'copy',
  },

  {
    name: '+48 501 333 911',
    icon: <LocalPhoneRoundedIcon />,
    action: 'copy',
  },

  {
    name: 'kontakt@mztsport.pl',
    icon: <EmailRoundedIcon />,
    action: 'copy',
  },
];

export { getContactData };
