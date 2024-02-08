import { ValueOf } from "@/types/utils";
import { INVISIBLE_VALUES } from "./CompetitorsTable.data";

  export type CompetitorsDataType = {
    id: number;
    email: string;
    phoneNumber: string;
    givenName: string;
    familyName: string;
    careGiversName: string;
    class: 'H' | 'G' | 'F';
    selectSex: "Kobieta" | "Mężczyzna";
    license: 'Aktualna' | 'Brak aktualnej licencji' | 'Niedotyczy';
    membershipFee: 'Opłacono' | 'Nieopłacono' | 'Niedotyczy';
    sportClub: string;
    pairId: number | false;
  };

  export type VisibleCompetitorsDataType = Omit<CompetitorsDataType, ValueOf<typeof INVISIBLE_VALUES>>;

  export type CompetitorsTableHeadCellsType = {
    id: keyof Omit<CompetitorsDataType, ValueOf<typeof INVISIBLE_VALUES>>;
    label: string;
    isNumeric: boolean;
  }[];
  
 export type Order = 'asc' | 'desc';