import React from 'react';
import {
  CompetitorsTableToolbarHeadingStyled,
  CompetitorsTableToolbarStyled,
} from './CompetitorsTableToolbar.styled';
import { IconButton } from '@mui/material';
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

          <IconButton aria-label="Usuń">
            <DeleteRoundedIcon />
          </IconButton>
        </>
      ) : (
        <>
          <CompetitorsTableToolbarHeadingStyled>
            Zawodnicy
          </CompetitorsTableToolbarHeadingStyled>

          <IconButton aria-label="Filtry">
            <FilterListRoundedIcon />
          </IconButton>
        </>
      )}
    </CompetitorsTableToolbarStyled>
  );
};

export { CompetitorsTableToolbar };
