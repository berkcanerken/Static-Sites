import React, { useState, useRef, useEffect } from 'react';
import {
  SlideshowImageStyled,
  SlideshowItemStyled,
  SlideshowStyled,
  SlideshowTextStyled,
} from './Slideshow.styled';
import { v4 as uuid } from 'uuid';
import { InsideLink } from '../InsideLink';

export type SlideProps = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heading: string;
  date: string;
  link: {
    link: string;
    text: string;
  };
};

type SlideshowProps = {
  slides: SlideProps[];
};

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const ListRef = useRef<HTMLUListElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (ListRef.current) {
      const listItemWidth = 443;
      const numberOfVisibleItems = Math.floor(
        ListRef.current.offsetWidth / listItemWidth
      );
      const calculatedContainerWidth = numberOfVisibleItems * listItemWidth;

      // console.log('szerokość: ', calculatedContainerWidth);
      setContainerWidth(calculatedContainerWidth);
    }
  }, [slides]);

  return (
    <SlideshowStyled ref={ListRef} width={containerWidth}>
      {slides.map(({ image, heading, date, link }, index) => (
        <SlideshowItemStyled key={uuid()}>
          <SlideshowImageStyled
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />

          <SlideshowTextStyled>{heading}</SlideshowTextStyled>

          <SlideshowTextStyled>{date}</SlideshowTextStyled>

          <InsideLink hyperLink={link.link}>{link.text}</InsideLink>
        </SlideshowItemStyled>
      ))}
    </SlideshowStyled>
  );
};

export { Slideshow };
