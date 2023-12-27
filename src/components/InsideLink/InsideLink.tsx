import React from 'react';
import { InsideLinkFABStyled, InsideLinkStyled } from './InsideLink.styled';
import { defaultTheme } from '@/providers/ThemeProvider';
import { colors } from '@/colors';

type InsideLinkProps = React.PropsWithChildren<{
  hyperLink?: string;
  borderRadius?: string;
  padding?: string | 0;
  isBoxShadowExist?: boolean;
}>;

const InsideLink: React.FC<InsideLinkProps> = ({
  hyperLink = '/',
  children,
  borderRadius = '50%',
  padding = 0,
  isBoxShadowExist = false,
}) => {
  return (
    <InsideLinkStyled href={hyperLink} passHref>
      <InsideLinkFABStyled
        borderRadius={borderRadius}
        padding={padding}
        isBoxShadowExist={isBoxShadowExist}
      >
        {children}
      </InsideLinkFABStyled>
    </InsideLinkStyled>
  );
};

export { InsideLink };
