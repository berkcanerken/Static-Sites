import React from 'react';
import {
  AboutUsSectionHeadingStyled,
  AboutUsSectionListItemStyled,
  AboutUsSectionListStyled,
  AboutUsSectionStyled,
  AboutUsSectionTextStyled,
  AboutUsSectionImgStyled,
} from './AboutUsSection.styled';
import { aboutUsSectionData } from './AboutUsSection.data';

const AboutUsSection = () => {
  return (
    <AboutUsSectionStyled>
      <AboutUsSectionImgStyled
        src={aboutUsSectionData.img.src}
        alt={aboutUsSectionData.img.alt}
        width={aboutUsSectionData.img.defaultWidth}
        height={aboutUsSectionData.img.defaultHeight}
      ></AboutUsSectionImgStyled>

      <AboutUsSectionListStyled>
        {aboutUsSectionData.Content.map((item) => (
          <AboutUsSectionListItemStyled key={item.heading}>
            <AboutUsSectionHeadingStyled>
              {item.heading}
            </AboutUsSectionHeadingStyled>

            <AboutUsSectionTextStyled>{item.text}</AboutUsSectionTextStyled>
          </AboutUsSectionListItemStyled>
        ))}
      </AboutUsSectionListStyled>
    </AboutUsSectionStyled>
  );
};

export { AboutUsSection };
