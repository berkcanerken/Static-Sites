import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styled from 'styled-components';

const CaruselStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  overflow: hidden;
`;

const CaruselImageStyles = styled(Image)`
  width: 100%;
  min-height: ${pxToRem(450)};
  height: auto;
  object-fit: cover;
`;

const CaruselPrevButtonStyle = styled(Button)`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    position: absolute;
    left: ${pxToRem(120)};
    color: ${({ theme }) => (theme as typeof defaultTheme).placeHolder};
  }
`;

const CaruselNextButtonStyle = styled(CaruselPrevButtonStyle)`
  @media screen and (min-width: 1024px) {
    transform: rotate(180deg);
    right: ${pxToRem(120)};
    left: auto;
  }
`;

export {
  CaruselImageStyles,
  CaruselStyle,
  CaruselPrevButtonStyle,
  CaruselNextButtonStyle,
};
