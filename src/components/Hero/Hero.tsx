import React from 'react';
import { HeroImageStyles, HeroStyled } from './Hero.styled';

type HeroProps = React.PropsWithChildren<{
  image: string;
  alt: string;
}>;

const Hero: React.FC<HeroProps> = ({ children, image, alt }) => (
  <HeroStyled>
    <HeroImageStyles
      src={image}
      alt={alt}
      width={100}
      height={100}
    ></HeroImageStyles>

    {children}
  </HeroStyled>
);

export { Hero };
