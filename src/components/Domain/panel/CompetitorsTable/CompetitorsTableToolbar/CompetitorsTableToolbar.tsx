import React from 'react';
import {
  CompetitorsTableToolbarHeadingStyled,
  CompetitorsTableToolbarStyled,
} from './CompetitorsTableToolbar.styled';
import { IconButton, Tooltip } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { CompetitorsTableDataContext } from '../CompetitorsTable.context';
import { CompetitorsDataType } from '../CompetitorsTable.types';

type CompetitorsTableToolbarProps = {
  selectedRows?: number;
  rowsToDelete: readonly string[];
};

const CompetitorsTableToolbar: React.FC<CompetitorsTableToolbarProps> = ({
  selectedRows = 0,
  rowsToDelete,
}) => {
  const competitorsContext = React.useContext(CompetitorsTableDataContext);

  const handleDeleteButton = (): void => {
    const data = competitorsContext?.data;
    const resolvedData = data?.filter(
      ({ givenName }) => !rowsToDelete.includes(givenName)
    );

    competitorsContext?.setData(resolvedData as CompetitorsDataType[]);
  };

  return (
    <CompetitorsTableToolbarStyled isSelected={selectedRows > 0}>
      {selectedRows > 0 ? (
        <>
          <CompetitorsTableToolbarHeadingStyled as="p">
            {`Wybrano ${selectedRows}`}
          </CompetitorsTableToolbarHeadingStyled>

          <Tooltip title="Usuń">
            <IconButton aria-label="Usuń" onClick={handleDeleteButton}>
              <DeleteRoundedIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <CompetitorsTableToolbarHeadingStyled>
            Zawodnicy
          </CompetitorsTableToolbarHeadingStyled>

          <Tooltip title="Filtry">
            <IconButton aria-label="Filtry">
              <FilterListRoundedIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </CompetitorsTableToolbarStyled>
  );
};

export { CompetitorsTableToolbar };
