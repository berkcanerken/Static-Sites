import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { DraverProvider, Draver } from '@/components/Draver';
import { colors, darkThemeColors } from '@/colors';
import { ThemeContext } from '@/contexts';
import React from 'react';
import { useRouter } from 'next/router';
import { AlertProvider } from '@/components/Alert/Alert.context';

const App = ({ Component, pageProps: props }: AppProps) => {
  const { session, ...pageProps } = props;
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);

  const theme = React.useMemo<typeof colors>(
    () => (isDarkTheme ? darkThemeColors : colors),
    [isDarkTheme]
  );

  const { pathname } = useRouter();

  React.useLayoutEffect(() => {
    const value = pathname.includes('panel') ? false : true;

    setIsDarkTheme(value);
  }, [pathname]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <GlobalStyle />

            <AlertProvider>
              <DraverProvider>
                <Component {...pageProps} />

                <Draver />
              </DraverProvider>
            </AlertProvider>
          </SessionProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default App;
