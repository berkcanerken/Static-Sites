import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '@/providers/ThemeProvider';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => (theme as typeof defaultTheme).background};
        position: relative;
        overflow-x: hidden;
        min-height: 100dvh;
        height: 100%;
        font-family: 'Montserrat', sans-serif !important;
    }

    @media (prefers-reduced-motion) {
        *,
        *::after,
        *::before {
            animation: none !important;
            transition: none !important;
        }
    }
`;

export default GlobalStyle;
