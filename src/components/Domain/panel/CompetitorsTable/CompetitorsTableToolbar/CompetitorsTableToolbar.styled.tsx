import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import { Toolbar } from '@mui/material';
import styled from 'styled-components';

const CompetitorsTableToolbarHeadingStyled = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  height: ${pxToRem(64)};
  text-transform: uppercase;
`;

const CompetitorsTableToolbarStyled = styled(Toolbar).withConfig({
  shouldForwardProp: (props) => !['isSelected'].includes(props),
})<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 100%;
  height: ${pxToRem(64)};
  background: ${({ isSelected, theme }) =>
    isSelected
      ? (theme as typeof defaultTheme).muiPanelActived
      : (theme as typeof defaultTheme).background};

  ${CompetitorsTableToolbarHeadingStyled} {
    font-weight: ${({ isSelected }) => (isSelected ? 500 : 600)};
  }
`;

export { CompetitorsTableToolbarStyled, CompetitorsTableToolbarHeadingStyled };
