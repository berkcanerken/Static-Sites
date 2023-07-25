import { defaultTheme } from '@/providers/ThemeProvider';
import Image from 'next/image';
import styled from 'styled-components';

const BannerStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 300px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding: 40px;
  }
`;

const BannerBackgroundStyled = styled(Image)`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 100%;
  height: 100%;
  transform: translate(50%, -50%);
  object-fit: cover;
  object-position: right;
  z-index: -1;

  @media screen and (min-width: 768px) {
    object-position: left;
  }
`;

const BannerHeadingStyled = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const BannerWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:has(${BannerHeadingStyled}) {
    @media screen and (min-width: 1024px) {
      position: absolute;
      top: 50%;
      left: 50%;
      gap: 20px;
      transform: translate(-50%, -50%);
    }
  }
`;

const BannertextStyled = styled.p`
  font-size: 24px;
  color: ${({ theme }) => (theme as typeof defaultTheme).background};

  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

const BannerLogoStyled = styled(Image)`
  width: 175px;
  height: 127.5px;
  transform: translatex(15px);
`;

export {
  BannerStyled,
  BannerBackgroundStyled,
  BannerWrapperStyled,
  BannerHeadingStyled,
  BannertextStyled,
  BannerLogoStyled,
};
