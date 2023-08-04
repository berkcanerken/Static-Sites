import React from 'react';
import {
  SectionHeadingStyled,
  SectionStyled,
  SectionWrapperStyled,
} from './Section.styled';

type SectionProps = React.PropsWithChildren<{
  heading: string;
}>;

const Section: React.FC<SectionProps> = ({ children, heading }) => {
  return (
    <SectionStyled>
      <SectionHeadingStyled>{heading}</SectionHeadingStyled>

      <SectionWrapperStyled>{children}</SectionWrapperStyled>
    </SectionStyled>
  );
};

export { Section };
