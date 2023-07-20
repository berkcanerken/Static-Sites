import styled from 'styled-components';
import Image from 'next/image';

const HeroStyled = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;

const HeroImageStyles = styled(Image)`
  width: 100%;
  height: auto;
`;

export { HeroStyled, HeroImageStyles };
