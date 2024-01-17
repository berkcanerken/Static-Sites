import React from 'react';
import {
  CompetitorsTableHeadStyled,
  CompetitorsTableCellStyled,
  CompetitorsTableCheckboxStyled,
} from './CompetitorsTableHead.styled';
import { TableRow, TableSortLabel, Tooltip } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
// import EditIcon from '@mui/icons-material/Edit';

export type CompetitorsTableHeadCellsType = {
  id: string;
  label: string;
  isNumeric: boolean;
}[];

type CompetitorsTableHeadProps = {
  headCells: CompetitorsTableHeadCellsType;
};

const CompetitorsTableHead: React.FC<CompetitorsTableHeadProps> = ({
  headCells,
}) => {
  return (
    <CompetitorsTableHeadStyled>
      <TableRow>
        <CompetitorsTableCellStyled>
          <Tooltip title="Zaznacz wszystko">
            <CompetitorsTableCheckboxStyled />
          </Tooltip>
        </CompetitorsTableCellStyled>

        {headCells.map(({ id, label, isNumeric }) => (
          <CompetitorsTableCellStyled key={id}>
            <TableSortLabel>{label}</TableSortLabel>
          </CompetitorsTableCellStyled>
        ))}

        <CompetitorsTableCellStyled />
        {/* <CompetitorsTableCellStyled>
          <Tooltip title="Edytuj">
            <IconButton aria-label="Edytuj dane zawodnika">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </CompetitorsTableCellStyled> */}
      </TableRow>
    </CompetitorsTableHeadStyled>
  );
};

export { CompetitorsTableHead };
