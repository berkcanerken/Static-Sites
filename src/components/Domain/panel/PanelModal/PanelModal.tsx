import React, { useContext } from 'react';
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
  FormValuesType,
  addCompetitorFormDefaultValues,
  panelModalFields,
} from './PanelModal.data';
import { SelectChangeEvent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { competitorsShema } from './PanelModal.validation';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import 'dayjs/locale/pl';
import dayjs, { Dayjs } from 'dayjs';
import {
  CompetitorsDataType,
  VisibleCompetitorsDataType,
} from '../CompetitorsTable/CompetitorsTable.types';
import { CompetitorsTableDataContext } from '../CompetitorsTable/CompetitorsTable.context';
import { AlertContext, MessageType } from '@/components/Alert/Alert.context';

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

  const ToastContext = useContext(AlertContext);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: addCompetitorFormDefaultValues,
    resolver: yupResolver(competitorsShema),
  });

  const CompetitorsDataContext = React.useContext(CompetitorsTableDataContext);

  const handleSelectChange = ({ target }: SelectChangeEvent): void => {
    setCompetitorClass(target.value as ValueOf<typeof COMPETITOR_CLASS>);
  };

  const handleSubmitValid: SubmitHandler<FormValuesType> = (values) => {
    console.log('succes', values);

    const data = {
      id: 1017,
      email: values.email,
      phoneNumber: values.phoneNumber,
      givenName: values.givenName,
      familyName: values.familyName,
      careGiversName: values.careGiversName,
      selectSex: values.selectSex,
      class: values.selectClass,
      license: 'Niedotyczy',
      membershipFee: 'Niedotyczy',
      sportClub: 'AZTS Gdańsk',
      pairId: false,
    } as CompetitorsDataType;

    CompetitorsDataContext?.setData((prev) => [...prev, data]);

    setTimeout(() => {
      setIsLoading(false);

      ToastContext?.setMessage({
        icon: <CheckCircleRoundedIcon />,
        text: `Gratulacje, Udało ci się dodać zawodnika`,
        color: 'success',
        severity: 'success',
      } as MessageType);
    }, 1000);
  };
  const handleSubmitInvalid = (): void => {
    setIsLoading(false);

    console.log('test - errors', errors);
  };

  const handleAdCompetitorFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    setIsLoading(true);

    handleSubmit(handleSubmitValid, handleSubmitInvalid)(event);
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
                  helperText={errors?.[name]?.message}
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
                  helperText={errors?.[name]?.message}
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
                  error={!!errors.selectClass}
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
              name="selectSex"
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

          {/* <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
              <Controller
                name="date"
                control={control}
                disabled={isLoading}
                render={({ field }) => <DatePicker label="Wiek" {...field} />}
              />
            </LocalizationProvider>
          </FormControl> */}

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
