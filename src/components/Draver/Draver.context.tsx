import React from 'react';

export type DirectionObject = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};

export type DraverObjectType = {
  directionObject: DirectionObject;
  children: React.ReactNode | null;
};

type DraverContextType = {
  draverObject: DraverObjectType;
  setDraverObject: React.Dispatch<React.SetStateAction<DraverObjectType>>;
};

const DraverContext = React.createContext<DraverContextType | undefined>(
  undefined
);

const DraverProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [draverObject, setDraverObject] = React.useState<DraverObjectType>({
    directionObject: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
    children: null,
  });

  return (
    <DraverContext.Provider value={{ draverObject, setDraverObject }}>
      {children}
    </DraverContext.Provider>
  );
};

export { DraverProvider, DraverContext };
