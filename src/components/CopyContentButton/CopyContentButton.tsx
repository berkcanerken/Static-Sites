import React from 'react';
import {
  CopyContentButtonAlertStyled,
  CopyContentButtonStyled,
  CopyContentButtonWrapperStyled,
} from './CopyContentButton.styled';
import Snackbar from '@mui/material/Snackbar';

type CopyContentButtonProps = {
  textToBeCopied: string;
  icon: React.ReactElement;
};

const CopyContentButton: React.FC<CopyContentButtonProps> = ({
  icon,
  textToBeCopied,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleChipClick = async () => {
    try {
      await navigator.clipboard.writeText(textToBeCopied);

      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <CopyContentButtonWrapperStyled>
      <CopyContentButtonStyled
        avatar={icon}
        label={textToBeCopied}
        onClick={() => handleChipClick()}
        clickable
      />

      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <CopyContentButtonAlertStyled
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Skopiowano do schowka
        </CopyContentButtonAlertStyled>
      </Snackbar>
    </CopyContentButtonWrapperStyled>
  );
};

export { CopyContentButton };
