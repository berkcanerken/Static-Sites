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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (event: TouchEvent) => {
    const { clientX } = event.touches[0];
    touchStartX.current = clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    const { clientX } = event.touches[0];
    const touchDistance = touchStartX.current - clientX;

    if (touchDistance > 50) {
      handleNextSlide();
    } else if (touchDistance < -50) {
      handlePrevSlide();
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    const { clientX } = event;
    touchStartX.current = clientX;
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX } = event;
    const touchDistance = touchStartX.current - clientX;

    if (touchDistance > 50) {
      handleNextSlide();
    } else if (touchDistance < -50) {
      handlePrevSlide();
    }
  };

  useEffect(() => {
    const slideshowContainer = document.getElementById(
      'slideshow-container'
    ) as HTMLDivElement;

    if (slideshowContainer) {
      slideshowContainer.addEventListener('touchstart', handleTouchStart);
      slideshowContainer.addEventListener('touchmove', handleTouchMove);

      slideshowContainer.addEventListener('mousedown', handleMouseDown);
      slideshowContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (slideshowContainer) {
        slideshowContainer.removeEventListener('touchstart', handleTouchStart);
        slideshowContainer.removeEventListener('touchmove', handleTouchMove);

        slideshowContainer.removeEventListener('mousedown', handleMouseDown);
        slideshowContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <SlideshowStyled id="slideshow-container">
      {slides.map(({ image, heading, date, link }, index) => (
        <SlideshowItemStyled
          key={uuid()}
          style={{
            display:
              index === activeSlideIndex ||
              index === (activeSlideIndex + 1) % slides.length ||
              index === (activeSlideIndex - 1 + slides.length) % slides.length
                ? 'block'
                : 'none',
          }}
        >
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
