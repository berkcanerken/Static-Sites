import React from 'react';
import {
  BannerBackgroundStyled,
  BannerHeadingStyled,
  BannerLogoStyled,
  BannerStyled,
  BannerWrapperStyled,
  BannertextStyled,
} from './Banner.styled';
import { bannerData } from './Banner.data';
import { InsideLink } from '../InsideLink';

const Banner = () => {
  return (
    <BannerStyled>
      <BannerBackgroundStyled
        src={bannerData.image.src}
        alt={bannerData.image.alt}
        width={bannerData.image.width}
        height={bannerData.image.height}
      />

      <BannerWrapperStyled>
        <BannerHeadingStyled>
          {bannerData.eventContent.heading}
        </BannerHeadingStyled>

        <BannertextStyled>{bannerData.eventContent.date}</BannertextStyled>

        <BannertextStyled>{bannerData.eventContent.location}</BannertextStyled>
      </BannerWrapperStyled>

      <BannerWrapperStyled>
        <BannerLogoStyled
          src={bannerData.link.Image.src}
          alt={bannerData.link.Image.alt}
          width={bannerData.link.Image.width}
          height={bannerData.link.Image.height}
        ></BannerLogoStyled>

        <InsideLink hyperLink={bannerData.link.link}>
          {bannerData.link.text}
        </InsideLink>
      </BannerWrapperStyled>
    </BannerStyled>
  );
};

export { Banner };
