import React from 'react';
import {
  CompetitorsTableCellStyled,
  TableButtonStyled,
} from './CompetitorsTable.styled';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from 'uuid';
import {
  Checkbox,
  DialogProps,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import { CompetitorsTableToolbar } from './CompetitorsTableToolbar';
import { CompetitorsTableHead } from './CompetitorsTableHead';
import {
  competitorsDataRows,
  competitorsTableHeadCells,
  visibleCompetitorsDataRows,
} from './CompetitorsTable.data';
import {
  CompetitorsDataType,
  Order,
  VisibleCompetitorsDataType,
} from './CompetitorsTable.types';
import { getComparator, stableSort } from './CompetitorsTableHead.handlers';
import EditIcon from '@mui/icons-material/Edit';
import ContactsIcon from '@mui/icons-material/Contacts';
import { CompetitorsTableDataContext } from './CompetitorsTable.context';
import { PanelModal } from '../PanelModal';
import { ValueOf } from '@/types/utils';
import { DIALOG_VARIANT } from '../PanelModal/PanelModal.data';

const CompetitorsTable: React.FC = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] =
    React.useState<keyof VisibleCompetitorsDataType>('id');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogVariant, setDialogVariant] = React.useState<
    ValueOf<typeof DIALOG_VARIANT>
  >(DIALOG_VARIANT.DEFAULT);

  const dataContext = React.useContext(CompetitorsTableDataContext);
  const { data } = dataContext || {};

  React.useEffect((): void => {
    const html = document.querySelector('html');

    if (html) {
      openDialog
        ? (html.style.overflowY = 'hidden')
        : (html.style.overflowY = 'auto');
    }
  }, [openDialog]);

  React.useEffect((): void => {
    setSelected([]);
  }, [data?.length]);

  const rows = visibleCompetitorsDataRows(data ?? []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof VisibleCompetitorsDataType
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((current) => current.givenName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <TableButtonStyled
        variant="text"
        endIcon={<AddIcon />}
        onClick={(): void => setOpenDialog(true)}
      >
        Dodaj zawodnika
      </TableButtonStyled>

      <PanelModal
        dialogVariant={dialogVariant}
        open={openDialog}
        onClose={(): void => setOpenDialog(false)}
        handelExitButton={(): void => setOpenDialog(false)}
      />

      <Paper sx={{ width: '100%' }}>
        <CompetitorsTableToolbar
          selectedRows={selected.length}
          rowsToDelete={selected}
        />

        <TableContainer>
          <Table>
            <CompetitorsTableHead
              headCells={competitorsTableHeadCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.givenName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.givenName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={uuid()}
                      selected={isItemSelected}
                    >
                      <CompetitorsTableCellStyled>
                        <Tooltip title="Zaznacz">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </Tooltip>
                      </CompetitorsTableCellStyled>

                      <CompetitorsTableCellStyled
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </CompetitorsTableCellStyled>

                      {Object.values(row)
                        .filter((current) => current !== row.id)
                        .map((current) => (
                          <CompetitorsTableCellStyled key={current}>
                            {current}
                          </CompetitorsTableCellStyled>
                        ))}

                      <CompetitorsTableCellStyled>
                        <Tooltip title="Kontakt" aria-label="Kontakt">
                          <IconButton
                            onClick={(): void => console.log('test -> kontakt')}
                          >
                            <ContactsIcon />
                          </IconButton>
                        </Tooltip>
                      </CompetitorsTableCellStyled>

                      <CompetitorsTableCellStyled>
                        <Tooltip
                          title="Edytuj"
                          aria-label="Edytuj informacje o zawodniku"
                        >
                          <IconButton
                            onClick={(): void => console.log('test -> edytuj')}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </CompetitorsTableCellStyled>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53,
                  }}
                >
                  <CompetitorsTableCellStyled colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[
            5,
            10,
            25,
            { value: rows.length, label: 'Wszystkie' },
          ]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Wiersze na stronę"
        />
      </Paper>
    </>
  );
};

export { CompetitorsTable };
