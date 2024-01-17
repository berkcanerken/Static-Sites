import React from 'react';
import { TableButtonStyled } from './CompetitorsTable.styled';
import AddIcon from '@mui/icons-material/Add';
import { Paper, Table, TableContainer } from '@mui/material';
import { CompetitorsTableToolbar } from './CompetitorsTableToolbar';
import { CompetitorsTableHead } from './CompetitorsTableHead';
import { competitorsTableHeadCells } from './CompetitorsTable.data';
import { CompetitorsTableBody } from './CompetitorsTableBody';

const CompetitorsTable: React.FC = () => {
  return (
    <>
      <TableButtonStyled variant="text" endIcon={<AddIcon />}>
        Dodaj zawodnika
      </TableButtonStyled>

      <Paper sx={{ width: '100%' }}>
        <CompetitorsTableToolbar />

        <TableContainer component={Paper}>
          <Table>
            <CompetitorsTableHead headCells={competitorsTableHeadCells} />
          </Table>

          {/* <CompetitorsTableBody /> */}
        </TableContainer>
      </Paper>
    </>
  );
};

export { CompetitorsTable };
