import React from 'react';
import {
  ContactFormStyled,
  ConteactTextAriaStyled,
} from './ContactForm.styled';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm: React.FC = () => {
  return (
    <ContactFormStyled>
      <ConteactTextAriaStyled
        multiline
        fullWidth
        rows={3}
        label="Napisz wiadomość"
        variant="filled"
      />

      <Button variant="text" endIcon={<SendIcon />}>
        Wyślij
      </Button>
    </ContactFormStyled>
  );
};

export { ContactForm };
