import React from 'react';
import {
  CompetitorsTableHeadStyled,
  CompetitorsTableCellStyled,
  CompetitorsTableCheckboxStyled,
} from './CompetitorsTableHead.styled';
import { Box, TableRow, TableSortLabel, Tooltip } from '@mui/material';
import {
  CompetitorsDataType,
  CompetitorsTableHeadCellsType,
  Order,
} from '../CompetitorsTable.types';
import { visuallyHidden } from '@mui/utils';

type CompetitorsTableHeadProps = {
  headCells: CompetitorsTableHeadCellsType;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CompetitorsDataType
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
};

const CompetitorsTableHead: React.FC<CompetitorsTableHeadProps> = ({
  headCells,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
}) => {
  const createSortHandler =
    (property: keyof CompetitorsDataType) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <CompetitorsTableHeadStyled>
      <TableRow>
        <CompetitorsTableCellStyled>
          <Tooltip title="Zaznacz wszystko">
            <CompetitorsTableCheckboxStyled
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'Zaznacz wszystko',
              }}
            />
          </Tooltip>
        </CompetitorsTableCellStyled>

        {headCells.map(({ id, label }) => (
          <CompetitorsTableCellStyled
            key={id}
            sortDirection={orderBy === id ? order : false}
          >
            <TableSortLabel
              active={orderBy === id}
              direction={orderBy === id ? order : 'asc'}
              onClick={createSortHandler(id)}
            >
              {label}

              {orderBy === id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc'
                    ? 'Posortowane malejąco'
                    : 'Posortowane rosnąco'}
                </Box>
              ) : null}
            </TableSortLabel>
          </CompetitorsTableCellStyled>
        ))}

        <CompetitorsTableCellStyled />
      </TableRow>
    </CompetitorsTableHeadStyled>
  );
};

export { CompetitorsTableHead };
