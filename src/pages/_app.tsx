import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/material';
import { AutenticationDraverProvider } from '@/components/AutenticationDraver/AutenticationDraver.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GlobalStyle />

        <AutenticationDraverProvider>
          <Component {...pageProps} />
        </AutenticationDraverProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
