import React from 'react';
import { LayoutChildrenWrapperStyled } from './LayoutChildrenWrapper.styled';

type LayoutChildrenWrapperProps = React.PropsWithChildren<{}>;

const LayoutChildrenWrapper: React.FC<LayoutChildrenWrapperProps> = ({
  children,
}) => {
  return <LayoutChildrenWrapperStyled>{children}</LayoutChildrenWrapperStyled>;
};

export { LayoutChildrenWrapper };
