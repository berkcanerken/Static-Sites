import React from 'react';
import { TableButtonStyled } from './CompetitorsTable.styled';
import AddIcon from '@mui/icons-material/Add';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CompetitorsTableToolbar } from './CompetitorsTableToolbar';

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
            <TableHead>
              <TableRow></TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export { CompetitorsTable };
