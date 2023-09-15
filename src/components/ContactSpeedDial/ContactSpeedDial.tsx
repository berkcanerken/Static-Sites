import React from 'react';
import {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
  ContactSpeedDialAlertStyled,
} from './SpeedDial.styled';
import { getContactData } from './ContactSpeedDial.data';
import { MenuApiType } from '../types/server';
import { checkTheContactMethod } from '@/handlers/checkTheContactMethod';
import { Snackbar } from '@mui/material';

type ContactSpeedDialProps = {
  data: MenuApiType;
};

const ContactSpeedDial: React.FC<ContactSpeedDialProps> = ({ data }) => {
  const [speedDialBottom, setSpeedDialBottom] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [contactContent, setContactContent] = React.useState<string>('');

  const contactSpeedDialRef = React.useRef<HTMLDivElement>(null);
  const contactData = getContactData();

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const mainFooter = document.querySelector('#main-footer');
      const footerHeight = mainFooter?.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const bottomDistance =
        scrollPosition - documentHeight !== 0
          ? (scrollPosition - documentHeight) * -1
          : 0;

      if (footerHeight) {
        const elementBottom =
          bottomDistance - footerHeight < 0 ? footerHeight + 16 : 0;

        setSpeedDialBottom(elementBottom);
      }
    });
  }, []);

  const handleActionItemClick = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSpeedDialClick = (content: string): void => {
    const method = checkTheContactMethod(content);

    if (method === null) {
      handleActionItemClick(content);
      setContactContent(content);
      setIsOpen(true);
    } else {
      window.location.href = method;
      setContactContent(content);
      setIsOpen(true);
    }
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
        <ContactSpeedDialAlertStyled
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {contactContent}
        </ContactSpeedDialAlertStyled>
      </Snackbar>

      <ContactSpeedDialStyled
        ref={contactSpeedDialRef}
        ariaLabel="Contact"
        icon={<ContactSpeedDialIconStyled />}
        bottom={speedDialBottom}
      >
        {contactData.map((contact) => (
          <ContactSpeedDialActionStyled
            key={contact.name}
            icon={contact.icon}
            tooltipTitle={contact.name}
            onClick={() => {
              handleSpeedDialClick(contact.name);
            }}
          />
        ))}
      </ContactSpeedDialStyled>
    </>
  );
};

export { ContactSpeedDial };
