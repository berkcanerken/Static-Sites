import { pxToRem } from '@/handlers/pxToRem';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(15)};
  width: 100%;
`;

const ConteactTextAriaStyled = styled(TextField)``;

export { ContactFormStyled, ConteactTextAriaStyled };
