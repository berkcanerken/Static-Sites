const bannerData = {
    image: {
        src: '/icons/banner.png',
        alt: '',
        width: '1276',
        height: '300',
    },

    link: {
        text: 'Sprawdź',
        link: '',
        Image: {
            src: '/icons/mztsLogoWithoutText.svg',
            alt: 'MZTS logo',
            width: '220',
            height: '170',
        },
    },

    eventContent: {
        heading: 'Wiosenny Turniej Tańca',
        date: '15.04.2023',
        location: 'Warszawa',
    },
} as const;

export { bannerData };