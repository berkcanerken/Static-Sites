import React from 'react';
import { CompetitorsDataType } from './CompetitorsTable.types';
import { CompetitorsDataRows } from './CompetitorsTable.data';

type CompetitorsTableContextType = {
  data: CompetitorsDataType[];
  setData: React.Dispatch<React.SetStateAction<CompetitorsDataType[]>>;
};

const CompetitorsTableDataContext = React.createContext<
  CompetitorsTableContextType | undefined
>(undefined);

const CompetitorsTableDataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] =
    React.useState<CompetitorsDataType[]>(CompetitorsDataRows);

  return (
    <CompetitorsTableDataContext.Provider value={{ data, setData }}>
      {children}
    </CompetitorsTableDataContext.Provider>
  );
};

export { CompetitorsTableDataContext, CompetitorsTableDataProvider };
