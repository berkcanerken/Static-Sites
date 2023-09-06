import { defaultTheme } from '@/providers/ThemeProvider';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1) scaleY(1.25);
    }

    100% {
        transform: scale(1);
    }
`;

const ButtonActionWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  background: transparent;
  border-radius: 24px;

  &::after {
    content: '';
    position: absolute;
    display: flex;
    width: calc(100% + 15px);
    height: 30px;
    background-color: #3b82f680;
    border-radius: 24px;
    z-index: -1;
    transform: scaleX(0.8) scaleY(0);
    transition: transform 90ms ease-in-out;
    opacity: 25%;
  }

  &:hover,
  &:focus-within {
    &::after {
      transform: scale(1);
    }
  }

  &:active {
    &::after {
      animation: ${Animation} 200ms ease-in-out;
    }
  }
`;

export { ButtonActionWrapperStyled };
