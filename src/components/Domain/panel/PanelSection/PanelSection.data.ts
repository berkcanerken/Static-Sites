const PANEL_SECTION_COMPONENT = {
    HEADER: 'header',
    SECTION: 'section',
    DIV: 'div',
} as const;

const PANEL_SECTION_HEADING = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
} as const;

const PANEL_SECTION_VARIANT = {
    DEFAULT: 'default',
    WITHOUT_IMG: 'without-img',
} as const;

export { PANEL_SECTION_COMPONENT, PANEL_SECTION_HEADING, PANEL_SECTION_VARIANT };