import React from 'react';
import {
  RegulationsBoxStyled,
  RegulationsHeadingStyled,
  RegulationsSectioinStyled,
} from './RegulationsSection.styled';
import {
  RegulationsInDanceSportsData,
  RegulationsInPreparatorySportsData,
  RegulationsOtherFormsOfDanceData,
} from './RegulationsSection.data';
import { OutsideLink } from '@/components/OutsideLink/OutsideLink';

const RegulationsSection: React.FC = () => {
  return (
    <>
      <RegulationsSectioinStyled>
        <RegulationsHeadingStyled>
          Przepisy rywalizacji w sporcie tanecznym
        </RegulationsHeadingStyled>
        <RegulationsBoxStyled>
          {RegulationsInDanceSportsData.map(({ name, href }) => {
            return <OutsideLink hyperLink={href}>{name}</OutsideLink>;
          })}
        </RegulationsBoxStyled>
      </RegulationsSectioinStyled>

      <RegulationsSectioinStyled>
        <RegulationsHeadingStyled>
          Przepisy rywalizacji w sporcie przygotowawczym - klasy HGF
        </RegulationsHeadingStyled>
        <RegulationsBoxStyled>
          {RegulationsInPreparatorySportsData.map(({ name, href, data }) => {
            return (
              <OutsideLink hyperLink={href}>
                {name} - obowiązuje od {data}
              </OutsideLink>
            );
          })}
        </RegulationsBoxStyled>
      </RegulationsSectioinStyled>

      <RegulationsSectioinStyled>
        <RegulationsHeadingStyled>Inne formy tańca</RegulationsHeadingStyled>
        <RegulationsBoxStyled>
          {RegulationsOtherFormsOfDanceData.map(({ name, href }) => {
            return <OutsideLink hyperLink={href}>{name}</OutsideLink>;
          })}
        </RegulationsBoxStyled>
      </RegulationsSectioinStyled>
    </>
  );
};

export { RegulationsSection };
