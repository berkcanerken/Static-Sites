import { MainNavigationMenu } from '@/components/MainNavigationMenu';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { ContactSpeedDial } from '@/components/ContactSpeedDial';
import { Footer } from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <MainNavigationMenu />

      <Component {...pageProps} />

      <ContactSpeedDial />

      <Footer />
    </ThemeProvider>
  );
}
