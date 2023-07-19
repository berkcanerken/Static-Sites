import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '@/providers/ThemeProvider';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Six+Caps&display=swap');

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
        background-color: ${({ theme }) =>
          (theme as typeof defaultTheme).background};
        position: relative;
        overflow-x: hidden;
        min-height: 100vh;
        height: 100%;
        font-family: Montserrat;
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
