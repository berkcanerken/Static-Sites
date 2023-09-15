import React from 'react';
import {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
} from './SpeedDial.styled';
import { getContactData } from './ContactSpeedDial.data';
import { MenuApiType } from '../types/server';

type ContactSpeedDialProps = {
  data: MenuApiType;
};

const ContactSpeedDial: React.FC<ContactSpeedDialProps> = ({ data }) => {
  const [action, setAction] = React.useState<string | null>(null);
  const [speedDialBottomMargin, setSpeedDialBottomMargin] =
    React.useState<number>(0);

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
        const elementBottomMargin =
          bottomDistance - footerHeight < 0
            ? (bottomDistance - footerHeight) * -1
            : 0;

        setSpeedDialBottomMargin(elementBottomMargin);
      }
    });
  }, []);

  return (
    <ContactSpeedDialStyled
      ref={contactSpeedDialRef}
      ariaLabel="Contact"
      icon={<ContactSpeedDialIconStyled />}
      bottomMargin={speedDialBottomMargin}
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
