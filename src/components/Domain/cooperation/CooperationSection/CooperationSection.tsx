import React from 'react';
import {
  CooperationBoxStyled,
  CooperationLogoDescriptionStyled,
  CooperationLogoTitleStyled,
  CooperationSectionStyled,
} from './CooperationSection.styled';
import { CooperationInformation } from './CooperationSection.data';
import { v4 as uuid } from 'uuid';

const CooperationSection = () => {
  return (
    <>
      <CooperationSectionStyled>
        {CooperationInformation.map(({ title, description, href }) => {
          return (
            <CooperationBoxStyled href={href} key={uuid()}>
              <CooperationLogoTitleStyled>{title}</CooperationLogoTitleStyled>
              <CooperationLogoDescriptionStyled>
                {description}
              </CooperationLogoDescriptionStyled>
            </CooperationBoxStyled>
          );
        })}
      </CooperationSectionStyled>
    </>
  );
};

export { CooperationSection };
