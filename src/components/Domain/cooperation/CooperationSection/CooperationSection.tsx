import React from 'react';
import {
  CooperationBoxStyled,
  CooperationLogoDescriptionStyled,
  CooperationLogoImgStyled,
  CooperationLogoTitleStyled,
  CooperationSectionStyled,
} from './CooperationSection.styled';
import { CooperationInformation } from './CooperationSection.data';
import { v4 as uuid } from 'uuid';

const CooperationSection = () => {
  return (
    <>
      <CooperationSectionStyled>
        {CooperationInformation.map(
          ({ title, description, href, image, width, height }) => {
            return (
              <CooperationBoxStyled href={href} key={uuid()}>
                <CooperationLogoTitleStyled>{title}</CooperationLogoTitleStyled>
                <CooperationLogoImgStyled
                  src={image}
                  width={width}
                  height={height}
                  alt={description}
                />
              </CooperationBoxStyled>
            );
          }
        )}
      </CooperationSectionStyled>
    </>
  );
};

export { CooperationSection };
