import React from 'react';
import { PanelFormStyled, PanelModalStyled } from './PanelModal.styled';
import {
  Button,
  DialogProps,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { ValueOf } from '@/types/server';
import {
  COMPETITOR_CLASS,
  DIALOG_VARIANT,
  panelModalFields,
} from './PanelModal.data';
import { SelectChangeEvent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
// import { plPL } from '@mui/material/locale';

type PanelModalProps = {
  dialogVariant: ValueOf<typeof DIALOG_VARIANT>;
  handelExitButton: React.MouseEventHandler<HTMLButtonElement>;
};

const PanelModal: React.FC<PanelModalProps & DialogProps> = ({
  dialogVariant,
  handelExitButton,
  ...props
}) => {
  const [competitorClass, setCompetitorClass] = React.useState<
    ValueOf<typeof COMPETITOR_CLASS>
  >(COMPETITOR_CLASS.F);

  const handleSelectChange = ({ target }: SelectChangeEvent): void =>
    setCompetitorClass(target.value as ValueOf<typeof COMPETITOR_CLASS>);

  return (
    <PanelModalStyled {...props}>
      {dialogVariant === DIALOG_VARIANT.DEFAULT ? (
        <PanelFormStyled>
          <Tooltip title="Powrót" aria-label="Powrót">
            <Button
              type="button"
              variant="contained"
              sx={{ alignSelf: 'end' }}
              onClick={handelExitButton}
            >
              <CloseIcon />
            </Button>
          </Tooltip>

          {panelModalFields.map(({ label, type, required }) => (
            <TextField
              label={label}
              type={type}
              required={required}
              fullWidth
            />
          ))}

          <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">
              Klasa
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={competitorClass}
              onChange={handleSelectChange}
              required
              autoWidth
              label="Klasa"
            >
              {Object.values(COMPETITOR_CLASS).map((current) => (
                <MenuItem key={current} value={current}>
                  {current}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Płeć
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Kobieta"
              name="radio-buttons-group"
              aria-required
            >
              <FormControlLabel
                value="Kobieta"
                control={<Radio />}
                label="Kobieta"
              />
              <FormControlLabel
                value="Mężczyzna"
                control={<Radio />}
                label="Mężczyzna"
              />
            </RadioGroup>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Wiek" />
          </LocalizationProvider>

          <Button
            type="submit"
            variant="contained"
            sx={{ alignSelf: 'center' }}
          >
            Dodaj
          </Button>
        </PanelFormStyled>
      ) : (
        <FormControl>test</FormControl>
      )}
    </PanelModalStyled>
  );
};

export { PanelModal };
