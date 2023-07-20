import React from 'react';
import {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
} from './SpeedDial.styled';
import { getContactData } from './ContactSpeedDial.data';

const ContactSpeedDial = () => {
  const [action, setAction] = React.useState<string | null>(null);
  const contactData = getContactData();

  return (
    <ContactSpeedDialStyled
      ariaLabel="Contact"
      icon={<ContactSpeedDialIconStyled />}
    >
      {contactData.map((contact) => (
        <ContactSpeedDialActionStyled
          key={contact.name}
          icon={contact.icon}
          tooltipTitle={contact.name}
          onClick={() => setAction(contact.action)}
        />
      ))}
    </ContactSpeedDialStyled>
  );
};

export { ContactSpeedDial };
