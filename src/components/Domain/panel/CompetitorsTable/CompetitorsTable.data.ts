import { CompetitorsTableHeadCellsType } from "./CompetitorsTableHead";

const competitorsTableHeadCells = [
    { id: 'id', label: 'Id', isNumeric: true },
    { id: 'name', label: 'Imię', isNumeric: false },
    { id: 'family-name', label: 'Nazwisko', isNumeric: false },
    { id: 'class', label: 'Klasa', isNumeric: false },
    { id: 'license', label: 'Licencja', isNumeric: false },
    {
      id: 'membership-fee',
      label: 'Opłata członkowska',
      isNumeric: false,
    },
  ] as CompetitorsTableHeadCellsType;

  export { competitorsTableHeadCells }