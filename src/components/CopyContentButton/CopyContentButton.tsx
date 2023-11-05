import React from 'react';
import {
  CopyContentButtonStyled,
  CopyContentButtonWrapperStyled,
} from './CopyContentButton.styled';
import { AlertContext } from '../Alert/Alert.context';

type CopyContentButtonProps = {
  textToBeCopied: string;
  icon: React.ReactElement;
};

const CopyContentButton: React.FC<CopyContentButtonProps> = ({
  icon,
  textToBeCopied,
}) => {
  const Alert = React.useContext(AlertContext);

  const handleChipClick = async () => {
    try {
      await navigator.clipboard.writeText(textToBeCopied);

      Alert?.setMessage(textToBeCopied);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CopyContentButtonWrapperStyled>
      <CopyContentButtonStyled
        avatar={icon}
        label={textToBeCopied}
        onClick={() => handleChipClick()}
        clickable
      />
    </CopyContentButtonWrapperStyled>
  );
};

export { CopyContentButton };
