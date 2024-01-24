import { pxToRem } from '@/handlers/pxToRem';
import { Checkbox, TableCell, TableHead } from '@mui/material';
import styled from 'styled-components';

const CompetitorsTableHeadStyled = styled(TableHead)``;

const CompetitorsTableCellStyled = styled(TableCell)`
  height: ${pxToRem(64)};
  padding: ${pxToRem('0 16')};
  text-transform: uppercase;

  @media screen and (min-width: 600px) {
    &:last-of-type {
      padding: ${pxToRem('0 24 0 16')};
    }

    &:first-of-type {
      padding: ${pxToRem('0 16 0 24')};
    }
  }
`;

const CompetitorsTableCheckboxStyled = styled(Checkbox)``;

export {
  CompetitorsTableHeadStyled,
  CompetitorsTableCellStyled,
  CompetitorsTableCheckboxStyled,
};
