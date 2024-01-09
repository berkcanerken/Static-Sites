import { ValueOf } from '@/types/server';
import {
  PANEL_SECTION_COMPONENT,
  PANEL_SECTION_HEADER,
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
  headerComponent: ValueOf<typeof PANEL_SECTION_HEADER>;
  header: string;
  icon?: React.ReactNode;
  variant: ValueOf<typeof PANEL_SECTION_VARIANT>;
}>;

const PanelSection: React.FC<PanelSectionProps> = ({
  children,
  component,
  headerComponent,
  header,
  icon = null,
  variant,
}) => {
  return (
    <PanelSectionStyled as={component} variant={variant}>
      <PanelSectionIconWrapperStyled>
        <PanelSectionBackgroudElement />

        {icon}
      </PanelSectionIconWrapperStyled>

      <PanelSectionContentWrapperStyled>
        <PanelSectionHeaderStyled as={headerComponent}>
          {header}
        </PanelSectionHeaderStyled>

        {children}
      </PanelSectionContentWrapperStyled>
    </PanelSectionStyled>
  );
};

export { PanelSection };
