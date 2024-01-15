import React from 'react';
import { CompetitorsButtonStyled } from './CompetitorsContent.styled';
import AddIcon from '@mui/icons-material/Add';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const CompetitorsContent: React.FC = () => {
  return (
    <>
      <CompetitorsButtonStyled variant="text" endIcon={<AddIcon />}>
        Dodaj zawodnika
      </CompetitorsButtonStyled>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};

export { CompetitorsContent };
