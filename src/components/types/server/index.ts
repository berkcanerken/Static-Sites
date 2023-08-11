

export type PlugApiType<T> = Partial<Record<string, unknown>> & T

export type MenuItemApiType = {
    id: number;
    href: string;
    label: string;
    target: string | null;
};

export type MenuApiType = MenuItemApiType[];

export type MenuApiResponseType = PlugApiType<{
    data: PlugApiType<{
        attributes: PlugApiType<{
            links: MenuApiType;
        }>;
    }>;
}>;

export type ContactMenuApiResponseType = PlugApiType<{
    data: PlugApiType<{
        attributes: PlugApiType<{
            contactLinks: MenuApiType;
        }>;
    }>;
}>; 

export type FooterCopyrightApiType = string

export type FooterCopyrightApiResponseType = PlugApiType<{
    data: PlugApiType<{
        attributes: PlugApiType<{
            name: FooterCopyrightApiType;
        }>;
    }>;
}>;

export type LogoItemType = {
    id: number;
    width: number;
    height: number;
    alt: string;
}

export type LogoApiType = LogoItemType[];

export type LogoResponseType = PlugApiType<{
    data: PlugApiType<{
        attributes: PlugApiType<{
            mobileLogo: LogoApiType;
            desktopLogo: LogoApiType;
        }>
    }>
}>

