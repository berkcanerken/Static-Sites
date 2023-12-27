import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/material';
import { DraverProvider, Draver } from '@/components/Draver';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GlobalStyle />

        <DraverProvider>
          <Component {...pageProps} />

          <Draver />
        </DraverProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
