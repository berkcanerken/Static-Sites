  export type CompetitorsDataType = {
    id: number;
    name: string;
    familyName: string;
    class: 'H' | 'G' | 'F';
    license: 'Aktualna' | 'Brak aktualnej licencji' | 'Niedotyczy';
    membershipFee: 'Opłacono' | 'Nieopłacono' | 'Niedotyczy';
  };

  export type CompetitorsTableHeadCellsType = {
    id: keyof CompetitorsDataType;
    label: string;
    isNumeric: boolean;
  }[];
  
 export type Order = 'asc' | 'desc';