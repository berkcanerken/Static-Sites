import styled from 'styled-components';
import Image from 'next/image';

const HeroStyled = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  overflow: hidden;
`;

const HeroImageStyles = styled(Image)`
  width: 100%;
  min-height: 450px;
  height: auto;
  object-fit: cover;
`;

export { HeroStyled, HeroImageStyles };
