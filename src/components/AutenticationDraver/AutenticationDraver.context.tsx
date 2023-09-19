import React, { useState } from 'react';

export type BooleanObject = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};
type AutenticationDraverContextType = {
  booleanObject: BooleanObject;
  setBooleanObject: React.Dispatch<React.SetStateAction<BooleanObject>>;
};

const AutenticationDraverContext = React.createContext<
  AutenticationDraverContextType | undefined
>(undefined);

const AutenticationDraverProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [booleanObject, setBooleanObject] = useState<BooleanObject>({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  return (
    <AutenticationDraverContext.Provider
      value={{ booleanObject, setBooleanObject }}
    >
      {children}
    </AutenticationDraverContext.Provider>
  );
};

export { AutenticationDraverProvider, AutenticationDraverContext };
