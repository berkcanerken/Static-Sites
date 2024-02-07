import React from 'react';

type ThemeType = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = React.createContext<ThemeType | null>(null);

export { ThemeContext };
