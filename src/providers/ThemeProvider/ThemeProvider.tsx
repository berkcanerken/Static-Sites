import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import React from 'react';
import { darkThemeColors } from '@/colors';

type ThemeProps = React.PropsWithChildren<{
  theme?: Partial<typeof darkThemeColors>;
}>;

const defaultTheme = darkThemeColors;

const ThemeProvider: React.FC<ThemeProps> = ({
  theme = defaultTheme,
  children,
}) => <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;

export { ThemeProvider, defaultTheme };
