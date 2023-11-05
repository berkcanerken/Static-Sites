import React from 'react';

type CategoryMessageType = 'error' | 'info' | 'success' | 'warning';

export type MessageType = {
  text: string;
  icon: React.ReactNode | false;
  color: CategoryMessageType;
  severity: CategoryMessageType;
};

type AlertContextType = {
  message: MessageType | string;
  setMessage: React.Dispatch<React.SetStateAction<MessageType | string>>;
};

const AlertContext = React.createContext<AlertContextType | undefined>(
  undefined
);

const AlertProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = React.useState<MessageType | string>('');

  return (
    <AlertContext.Provider value={{ message, setMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };
