import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import { ValueOf } from '@/types/server';
import styled, { css } from 'styled-components';
import { PANEL_SECTION_VARIANT } from './PanelSection.data';

const PanelSectionHeaderStyled = styled.h2`
  font-size: ${pxToRem(28)};
  text-transform: uppercase;
`;

const PanelSectionIconWrapperStyled = styled.div`
  position: static;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${pxToRem(50)};
  min-width: 50%;
  width: 100%;
  height: ${pxToRem(200)};
  background: ${({ theme }) => (theme as typeof defaultTheme).PanelBackground};
  order: 1;

  svg {
    width: ${pxToRem(150)};
    height: ${pxToRem(150)};
    fill: ${({ theme }) => (theme as typeof defaultTheme).background};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 0;
    max-width: 50%;
    transform: translateY(-50%);
  }
`;

const PanelSectionBackgroudElement = styled.div`
  display: block;
  width: 0;
  height: 0;
  border-bottom: ${pxToRem(200)} solid
    ${({ theme }) => (theme as typeof defaultTheme).background};
  border-right: ${pxToRem(70)} solid transparent;
`;

const PanelSectionContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: ${pxToRem(15)};
  width: fit-content;
  padding: ${pxToRem('10 20')};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  font-size: 18px;

  @media screen and (min-width: 768px) {
    max-width: 50%;
    color: ${({ theme }) => (theme as typeof defaultTheme).text};
  }
`;

const PanelSectionStyled = styled.div.withConfig({
  shouldForwardProp: (props) => !['variant', 'isHeroComponent'].includes(props),
})<{
  variant: ValueOf<typeof PANEL_SECTION_VARIANT>;
  isHeroComponent: boolean;
}>`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem(200)};
  margin-top: ${({ isHeroComponent }) => (isHeroComponent ? '0' : pxToRem(30))};
  background: ${({ theme, variant }) =>
    variant === PANEL_SECTION_VARIANT.DEFAULT
      ? (theme as typeof defaultTheme).PanelBackground
      : (theme as typeof defaultTheme).background};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    align-self: center;
    align-items: flex-start;
    width: calc(100% + ${pxToRem(30)});
    padding: ${pxToRem('0 15')};
    background: transparent;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100% + ${pxToRem(60)});
    padding: ${pxToRem('0 30')};
  }

  ${({ variant }) =>
    variant === PANEL_SECTION_VARIANT.WITHOUT_IMG &&
    css`
      overflow: visible;

      & ${PanelSectionIconWrapperStyled} {
        display: none;
      }

      & ${PanelSectionHeaderStyled} {
        color: ${({ theme }) => (theme as typeof defaultTheme).text};
      }

      & ${PanelSectionContentWrapperStyled} {
        justify-content: start;
        align-items: center;
        width: 100%;
        max-width: 100%;
        color: ${({ theme }) => (theme as typeof defaultTheme).text};
      }

      & ${PanelSectionContentWrapperStyled} {
        padding: 0;

        @media screen and (min-width: 768px) {
          padding: ${pxToRem('10 20')};
        }
      }
    `}
`;

export {
  PanelSectionStyled,
  PanelSectionHeaderStyled,
  PanelSectionIconWrapperStyled,
  PanelSectionBackgroudElement,
  PanelSectionContentWrapperStyled,
};
