import { ContactMenuApiResponseType, FooterCopyrightApiResponseType, LogoResponseType, MenuApiResponseType } from '@/components/types/server';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const getLayoutProps = async <P extends Record<string, unknown>>(staticPropsContext: GetStaticPropsContext, getPageProps?: GetStaticProps<P>) => {
    const mainMenuLogoResponse = await fetch('http://127.0.0.1:1337/api/menu-logo?populate=*');
    const mainMenuLogo = await mainMenuLogoResponse.json() as LogoResponseType;
    const mainMenuContactResponse = await fetch('http://127.0.0.1:1337/api/contact-menu?populate=contactLinks');
    const mainMenuContact = await mainMenuContactResponse.json() as ContactMenuApiResponseType;
    const mainMenuResponse = await fetch('http://127.0.0.1:1337/api/navigation-menu?populate=links');
    const mainMenu = await mainMenuResponse.json() as MenuApiResponseType;
    const footerSocialResponse = await fetch('http://127.0.0.1:1337/api/footer-social-media?populate=links');
    const footerSocial = await footerSocialResponse.json() as MenuApiResponseType;
    const footerPolicyResponse = await fetch('http://127.0.0.1:1337/api/footer-policy-list?populate=links');
    const footerPolicy = await footerPolicyResponse.json() as MenuApiResponseType;
    const footerCopyrightResponse = await fetch('http://127.0.0.1:1337/api/footer-copyright');
    const footerCopyright = await footerCopyrightResponse.json() as FooterCopyrightApiResponseType;
 
    const pageProps = await (typeof getPageProps === 'function' ? getPageProps : () => new Promise((resolve) => { resolve({}) }))(staticPropsContext);

    return {
        ...(typeof pageProps === 'object' ? pageProps : {}),
        props: {
            mainMenuLogo: mainMenuLogo.data.attributes,
            mainMenuContact: mainMenuContact.data.attributes.contactLinks,
            mainMenu: mainMenu.data.attributes.links,
            footerSocial: footerSocial.data.attributes.links,
            footerPolicy: footerPolicy.data.attributes.links,
            footerCopyright: footerCopyright.data.attributes.name,
            ...(typeof pageProps === 'object' && pageProps && pageProps.hasOwnProperty('props') ? (pageProps as Record<string, unknown> & Record<'props', Record<string, unknown>>)?.props : {}),
        }
    };
};

export { getLayoutProps };
