import React from 'react';
import { CompetitorsDataType } from './CompetitorsTable.types';
import { competitorsDataRows } from './CompetitorsTable.data';

type CompetitorsTableContextType = {
  data: CompetitorsDataType[] | undefined;
  setData: React.Dispatch<React.SetStateAction<CompetitorsDataType[]>>;
};

const CompetitorsTableDataContext = React.createContext<
  CompetitorsTableContextType | undefined
>(undefined);

const CompetitorsTableDataProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] =
    React.useState<CompetitorsDataType[]>(competitorsDataRows);

  return (
    <CompetitorsTableDataContext.Provider value={{ data, setData }}>
      {children}
    </CompetitorsTableDataContext.Provider>
  );
};

export { CompetitorsTableDataContext, CompetitorsTableDataProvider };
