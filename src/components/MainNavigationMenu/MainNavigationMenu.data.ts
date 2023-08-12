const MainNavigationData = [
  {
    name: 'Strona główna',
    href: '/',
  },

  {
    name: 'Związek ',
    href: '/',
  },

  {
    name: 'Członkostwo',
    href: '/',
  },

  {
    name: 'Przypisy',
    href: '/regulations',
  },

  {
    name: 'Kalendarz',
    href: '/',
  },

  {
    name: 'Media',
    href: '/',
  },

  {
    name: 'Logowanie',
    href: '/',
  },

  {
    name: 'Współpraca',
    href: '/cooperation',
  },
] as const;

const MainNavigationContactData = [
  {
    name: 'ul. Olesin 31F, 03-289 Warszawa',
    icon: '/icons/localization.svg',
    alt: 'localizacja',
  },

  {
    name: '+48 501 333 911',
    icon: '/icons/phone.svg',
    alt: 'numer telefonu',
  },

  {
    name: 'kontakt@mztsport.pl',
    icon: '/icons/email.svg',
    alt: 'email',
  },
] as const;

export { MainNavigationData, MainNavigationContactData };
