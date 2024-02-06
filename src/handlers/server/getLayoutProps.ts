// import { ContactMenuApiResponseType, FooterCopyrightApiResponseType, LogoResponseType, MenuApiResponseType } from '../../types/server';
// import { GetStaticProps, GetStaticPropsContext } from 'next';

// const strapiUrl = process.env.STRAPI_URL;

// const getLayoutProps = async <P extends Record<string, unknown>>(staticPropsContext: GetStaticPropsContext, getPageProps?: GetStaticProps<P>) => {
//     const mainMenuLogoResponse = await fetch(`${strapiUrl}/api/menu-logo?populate=*`);
//     const mainMenuLogo = await (mainMenuLogoResponse.ok ? mainMenuLogoResponse.json() : null) as LogoResponseType | null;

//     const mainMenuContactResponse = await fetch(`${strapiUrl}/api/contact-menu?populate=contactLinks`);
//     const mainMenuContact = await (mainMenuContactResponse.ok ? mainMenuContactResponse.json() : null) as ContactMenuApiResponseType | null;

//     const mainMenuResponse = await fetch(`${strapiUrl}/api/navigation-menu?populate=links`);
//     const mainMenu = await (mainMenuResponse.ok ? mainMenuResponse.json() : null) as MenuApiResponseType | null;

//     const footerSocialResponse = await fetch(`${strapiUrl}/api/footer-social-media?populate=links`);
//     const footerSocial = await (footerSocialResponse.ok ? footerSocialResponse.json() : null) as MenuApiResponseType | null;

//     const footerPolicyResponse = await fetch(`${strapiUrl}/api/footer-policy-list?populate=links`);
//     const footerPolicy = await (footerPolicyResponse.ok ? footerPolicyResponse.json() : null) as MenuApiResponseType | null;

//     const footerCopyrightResponse = await fetch(`${strapiUrl}/api/footer-copyright`);
//     const footerCopyright = await (footerCopyrightResponse.ok ? footerCopyrightResponse.json(): null)  as FooterCopyrightApiResponseType | null;
 
//     const pageProps = await (typeof getPageProps === 'function' ? getPageProps : () => new Promise((resolve) => { resolve({}) }))(staticPropsContext);

//     return {
//         ...(typeof pageProps === 'object' ? pageProps : {}),
//         props: {
//             mainMenuLogo: mainMenuLogo?.data?.attributes ?? null,
//             mainMenuContact: mainMenuContact?.data?.attributes?.contactLinks ?? null,
//             mainMenu: mainMenu?.data?.attributes?.links ?? null,
//             footerSocial: footerSocial?.data?.attributes?.links ?? null,
//             footerPolicy: footerPolicy?.data?.attributes?.links ?? null,
//             footerCopyright: footerCopyright?.data?.attributes?.name ?? null,
//             ...(typeof pageProps === 'object' && pageProps && pageProps.hasOwnProperty('props') ? (pageProps as Record<string, unknown> & Record<'props', Record<string, unknown>>)?.props : {}),
//         }
//     };
// };

export {};
