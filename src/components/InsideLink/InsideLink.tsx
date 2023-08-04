import React from 'react';
import { InsideLinkStyled } from './InsideLink.styled';

type InsideLinkProps = React.PropsWithChildren<{
  hyperLink?: string;
  isPrimary?: boolean;
}>;

const InsideLink: React.FC<InsideLinkProps> = ({
  hyperLink = '/',
  isPrimary = false,
  children,
}) => {
  return (
    <InsideLinkStyled isPrimary={isPrimary} href={hyperLink}>
      {children}
    </InsideLinkStyled>
  );
};

export { InsideLink };
