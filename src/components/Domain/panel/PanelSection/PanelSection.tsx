import { ValueOf } from '@/types/server';
import {
  PANEL_SECTION_COMPONENT,
  PANEL_SECTION_HEADING,
  PANEL_SECTION_VARIANT,
} from './PanelSection.data';
import React from 'react';
import {
  PanelSectionBackgroudElement,
  PanelSectionContentWrapperStyled,
  PanelSectionHeaderStyled,
  PanelSectionIconWrapperStyled,
  PanelSectionStyled,
} from './PanelSection.styled';

type PanelSectionProps = React.PropsWithChildren<{
  component: ValueOf<typeof PANEL_SECTION_COMPONENT>;
  headingComponent: ValueOf<typeof PANEL_SECTION_HEADING>;
  heading: string;
  icon?: React.ReactNode;
  variant: ValueOf<typeof PANEL_SECTION_VARIANT>;
}>;

const PanelSection: React.FC<PanelSectionProps> = ({
  children,
  component,
  headingComponent,
  heading,
  icon = null,
  variant,
}) => {
  return (
    <PanelSectionStyled
      as={component}
      variant={variant}
      isHeroComponent={component === PANEL_SECTION_COMPONENT.HEADER}
    >
      <PanelSectionIconWrapperStyled>
        <PanelSectionBackgroudElement />

        {icon}
      </PanelSectionIconWrapperStyled>

      <PanelSectionContentWrapperStyled>
        <PanelSectionHeaderStyled as={headingComponent}>
          {heading}
        </PanelSectionHeaderStyled>

        {children}
      </PanelSectionContentWrapperStyled>
    </PanelSectionStyled>
  );
};

export { PanelSection };
