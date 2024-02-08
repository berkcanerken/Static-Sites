import React from 'react';
import { LayoutStyled } from './Layout.styled';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export { Layout };
