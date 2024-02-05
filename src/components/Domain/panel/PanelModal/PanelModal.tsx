import React from 'react';
import { PanelFormStyled, PanelModalStyled } from './PanelModal.styled';
import {
  Box,
  Button,
  DialogProps,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  LinearProgress,
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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { competitorsShema } from './PanelModal.validation';
import AddIcon from '@mui/icons-material/Add';
import 'dayjs/locale/pl';

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

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      givenName: '',
      familyName: '',
      careGiversName: '',
      tel: undefined,
      email: '',
      date: undefined,
      selectClass: 'F',
      selectGender: 'Kobieta',
    },
    resolver: yupResolver(competitorsShema),
  });

  const handleSelectChange = ({ target }: SelectChangeEvent): void =>
    setCompetitorClass(target.value as ValueOf<typeof COMPETITOR_CLASS>);

  const handleSubmitValid = (): void => {};
  const handleSubmitInvalid = (): void => {};

  const handleAdCompetitorFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    setIsLoading(true);

    console.log('test - errors', errors.tel);

    handleSubmit(handleSubmitValid, handleSubmitInvalid);
  };

  return (
    <PanelModalStyled {...props}>
      {dialogVariant === DIALOG_VARIANT.DEFAULT ? (
        <PanelFormStyled
          id="add-competitor-form"
          onSubmit={handleAdCompetitorFormSubmit}
          noValidate
        >
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

          {panelModalFields.map(
            ({ label, type, autocomplete, required, name }) =>
              type === 'tel' ? (
                <TextField
                  key={label}
                  id={label}
                  label={label}
                  type={type}
                  autoComplete={autocomplete}
                  inputProps={{ inputMode: 'numeric' }}
                  fullWidth
                  disabled={isLoading}
                  required
                  error={!!errors?.[name]}
                  {...register(name)}
                />
              ) : (
                <TextField
                  key={label}
                  id={label}
                  label={label}
                  type={type}
                  autoComplete={autocomplete}
                  disabled={isLoading}
                  required={required}
                  fullWidth
                  error={!!errors?.[name]}
                  {...register(name)}
                />
              )
          )}

          <FormControl>
            <InputLabel id="demo-simple-select-autowidth-label">
              Klasa
            </InputLabel>

            <Controller
              name="selectClass"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={competitorClass}
                  onChange={handleSelectChange}
                  autoWidth
                  label="Klasa"
                  disabled={isLoading}
                >
                  {Object.values(COMPETITOR_CLASS).map((current) => (
                    <MenuItem key={current} value={current}>
                      {current}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <FormControl fullWidth disabled={isLoading}>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Płeć
            </FormLabel>

            <Controller
              name="selectGender"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Kobieta"
                  {...field}
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
              )}
            />
          </FormControl>

          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
              <Controller
                name="date"
                control={control}
                disabled={isLoading}
                render={({ field }) => <DatePicker label="Wiek" {...field} />}
              />
            </LocalizationProvider>
          </FormControl>

          <Button
            variant="contained"
            sx={{ alignSelf: 'center' }}
            type="submit"
            disabled={isLoading}
          >
            Dodaj
            <AddIcon />
          </Button>
        </PanelFormStyled>
      ) : (
        <FormControl>test</FormControl>
      )}

      <Box display={isLoading ? 'block' : 'none'}>
        <LinearProgress />
      </Box>
    </PanelModalStyled>
  );
};

export { PanelModal };
