import React from 'react';
import { AlertStyled } from './Alert.styled';
import { Snackbar } from '@mui/material';
import { AlertContext } from './Alert.context';

const Alert: React.FC = () => {
  const MessageContext = React.useContext(AlertContext);
  const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (MessageContext && typeof MessageContext.message !== 'string') {
      MessageContext.message.text && MessageContext.message.text.length > 0
        ? setIsAlertOpen(true)
        : setIsAlertOpen(false);
    } else {
      typeof MessageContext?.message === 'string' &&
      MessageContext.message.length > 0
        ? setIsAlertOpen(true)
        : setIsAlertOpen(false);
    }
  }, [MessageContext]);

  const handleAlertClose = (): void => {
    setIsAlertOpen(false);
    MessageContext?.setMessage('');
  };

  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={4000}
      onClose={() => handleAlertClose()}
    >
      <AlertStyled
        onClose={() => handleAlertClose()}
        icon={
          typeof MessageContext?.message === 'string'
            ? false
            : MessageContext?.message.icon
        }
        severity={
          typeof MessageContext?.message === 'string'
            ? 'info'
            : MessageContext?.message.severity
        }
        color={
          typeof MessageContext?.message === 'string'
            ? 'info'
            : MessageContext?.message.color
        }
        variant="filled"
      >
        {typeof MessageContext?.message === 'string'
          ? MessageContext.message
          : MessageContext?.message.text}
      </AlertStyled>
    </Snackbar>
  );
};

export { Alert };
