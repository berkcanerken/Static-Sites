import React from 'react';
import { OutsideLinkStyled } from './OutsideLink.styled';

type OutsideLinkProps = React.PropsWithChildren<{
  hyperLink?: string;
}>;

const OutsideLink: React.FC<OutsideLinkProps> = ({
  hyperLink = '/',
  children,
}) => {
  return <OutsideLinkStyled href={hyperLink}>{children}</OutsideLinkStyled>;
};

export { OutsideLink };
