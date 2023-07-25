import React from 'react';
import { InsideLinkStyled } from './InsideLink.styled';

type InsideLinkProps = React.PropsWithChildren<{
  hyperLink?: string;
}>;

const InsideLink: React.FC<InsideLinkProps> = ({
  hyperLink = '/',
  children,
}) => {
  return <InsideLinkStyled href={hyperLink}>{children}</InsideLinkStyled>;
};

export { InsideLink };
