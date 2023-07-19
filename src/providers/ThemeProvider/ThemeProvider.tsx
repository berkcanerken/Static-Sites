import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import React from 'react';
import { colors } from '@/colors';

type ThemeProps = React.PropsWithChildren<{ theme?: Partial<typeof colors> }>;

const defaultTheme = colors;

const ThemeProvider: React.FC<ThemeProps> = ({
  theme = defaultTheme,
  children,
}) => <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;

export { ThemeProvider, defaultTheme };
