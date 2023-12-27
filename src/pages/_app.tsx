import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { DraverProvider, Draver } from '@/components/Draver';

const App = ({ Component, pageProps: props }: AppProps) => {
  const { session, ...pageProps } = props;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <SessionProvider session={session}>
          <GlobalStyle />

          <DraverProvider>
            <Component {...pageProps} />

            <Draver />
          </DraverProvider>
        </SessionProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
