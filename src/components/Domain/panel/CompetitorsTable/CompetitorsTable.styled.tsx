import { pxToRem } from '@/handlers/pxToRem';
import { Button, TableCell } from '@mui/material';
import styled from 'styled-components';

const TableButtonStyled = styled(Button)`
  align-self: end;
`;

const CompetitorsTableCellStyled = styled(TableCell)`
  height: ${pxToRem(64)};
  padding: ${pxToRem('0 16')};

  @media screen and (min-width: 600px) {
    &:last-of-type {
      padding: ${pxToRem('0 24 0 16')};
    }

    &:first-of-type {
      padding: ${pxToRem('0 16 0 24')};
    }
  }
`;

export { TableButtonStyled, CompetitorsTableCellStyled };
