import React, { useState } from 'react';

export type BooleanObject = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};
type AccountDraverContextType = {
  booleanObject: BooleanObject;
  setBooleanObject: React.Dispatch<React.SetStateAction<BooleanObject>>;
};

const AccountDraverContext = React.createContext<
  AccountDraverContextType | undefined
>(undefined);

const AccountDraverProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [booleanObject, setBooleanObject] = useState<BooleanObject>({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  return (
    <AccountDraverContext.Provider value={{ booleanObject, setBooleanObject }}>
      {children}
    </AccountDraverContext.Provider>
  );
};

export { AccountDraverProvider, AccountDraverContext };
