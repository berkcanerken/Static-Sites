import React from 'react';
import {
  CompetitorsTableToolbarHeadingStyled,
  CompetitorsTableToolbarStyled,
} from './CompetitorsTableToolbar.styled';
import { IconButton, Tooltip } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

type CompetitorsTableToolbarProps = {
  selectedRows?: number;
};

const CompetitorsTableToolbar: React.FC<CompetitorsTableToolbarProps> = ({
  selectedRows = 0,
}) => {
  return (
    <CompetitorsTableToolbarStyled isSelected={selectedRows > 0}>
      {selectedRows > 0 ? (
        <>
          <CompetitorsTableToolbarHeadingStyled as="p">
            {`Wybrano ${selectedRows}`}
          </CompetitorsTableToolbarHeadingStyled>

          <Tooltip title="Usuń">
            <IconButton aria-label="Usuń">
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
