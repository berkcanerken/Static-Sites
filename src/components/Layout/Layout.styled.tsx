import { pxToRem } from '@/handlers/pxToRem';
import styled from 'styled-components';

const LayoutStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${pxToRem(20)};
  width: 100%;
  max-width: ${pxToRem(1400)};
  min-height: 100dvh;
  padding: ${pxToRem(64)};
`;

export { LayoutStyled };
