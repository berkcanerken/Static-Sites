import React from 'react';
import { PanelModalStyled } from './PanelModal.styled';
import { DialogProps } from '@mui/material';
import { ValueOf } from '@/types/server';
import { DIALOG_VARIANT } from './PanelModal.data';

type PanelModalProps = {
  dialogVariant: ValueOf<typeof DIALOG_VARIANT>;
};

const PanelModal: React.FC<PanelModalProps & DialogProps> = ({
  dialogVariant,
  ...props
}) => {
  return (
    <PanelModalStyled {...props}>
      {dialogVariant === DIALOG_VARIANT.DEFAULT ? 'dupa - default' : 'cyce'}
    </PanelModalStyled>
  );
};

export { PanelModal };
