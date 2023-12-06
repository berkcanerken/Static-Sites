import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/material';
import { AccountDraverProvider } from '@/components/AccountDraver';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: props }: AppProps) => {
  const { session, ...pageProps } = props;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <SessionProvider session={session}>
          <GlobalStyle />

          <AccountDraverProvider>
            <Component {...pageProps} />
          </AccountDraverProvider>
        </SessionProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
