import React, { useState, useRef } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {
  CaruselImageStyles,
  CaruselPrevButtonStyle,
  CaruselNextButtonStyle,
  CaruselStyle,
} from './Carusel.styled';

type CarouselProps = React.PropsWithChildren<{
  imagesList: {
    image: string;
    description: string;
    height: number;
    width: number;
  }[];
}>;

const Carusel: React.FC<CarouselProps> = ({ imagesList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imagesList.length - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < imagesList.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 0) {
      goToPreviousSlide();
    } else if (deltaX < 0) {
      goToNextSlide();
    }

    touchStartX.current = null;
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    mouseStartX.current = event.clientX;
    event.preventDefault();
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (mouseStartX.current === null) {
      return;
    }

    const mouseEndX = event.clientX;
    const deltaX = mouseEndX - mouseStartX.current;

    if (deltaX > 0) {
      goToPreviousSlide();
    } else if (deltaX < 0) {
      goToNextSlide();
    }

    mouseStartX.current = null;
    event.preventDefault();
  };

  return (
    <CaruselStyle
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <CaruselImageStyles
        src={imagesList[currentIndex].image}
        alt={imagesList[currentIndex].description}
        width={imagesList[currentIndex].height}
        height={imagesList[currentIndex].width}
      />

      <CaruselNextButtonStyle>
        <ArrowBackIosNewRoundedIcon
          onClick={goToNextSlide}
          sx={{ fontSize: 100 }}
        />
      </CaruselNextButtonStyle>

      <CaruselPrevButtonStyle>
        <ArrowBackIosNewRoundedIcon
          onClick={goToPreviousSlide}
          sx={{ fontSize: 100 }}
        />
      </CaruselPrevButtonStyle>
    </CaruselStyle>
  );
};

export default Carusel;
