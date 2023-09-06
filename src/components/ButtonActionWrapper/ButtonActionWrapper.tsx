import React from 'react';
import { ButtonActionWrapperStyled } from './ButtonActionWrapper.styled';

type ButtonActionWrapperProps = React.PropsWithChildren;

const ButtonActionWrapper: React.FC<ButtonActionWrapperProps> = ({
  children,
}) => {
  return <ButtonActionWrapperStyled>{children}</ButtonActionWrapperStyled>;
};

export { ButtonActionWrapper };
