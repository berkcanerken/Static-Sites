import React from 'react';
import {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
  ContactSpeedDialSvgStyled,
} from './SpeedDial.styled';
import { getContactData } from './ContactSpeedDial.data';
import { FooterCopyrightApiType, MenuApiType } from '../types/server';

type ContactSpeedDialProps = {
  data: MenuApiType;
};

const ContactSpeedDial: React.FC<ContactSpeedDialProps> = ({ data }) => {
  const [action, setAction] = React.useState<string | null>(null);
  const [isNearBottom, setIsNearBottom] = React.useState<boolean>(false);

  const contactSpeedDialRef = React.useRef<HTMLDivElement>(null);

  const contactData = getContactData();

  const handleScroll = () => {
    const element = contactSpeedDialRef.current;

    if (element) {
      const { bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distance = windowHeight - bottom;
      // console.log('distance: ', distance, bottom, windowHeight);
      // console.log(
      //   window.scrollHeight - window.clientHeight >= window.scrollTop,
      //   distance,
      //   bottom,
      //   windowHeight
      // );

      if (distance <= 400) {
        console.log('jest przy footerze');
        setIsNearBottom(true);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNearBottom]);

  return (
    <ContactSpeedDialStyled
      ref={contactSpeedDialRef}
      ariaLabel="Contact"
      icon={<ContactSpeedDialIconStyled />}
      isNearBottom={isNearBottom}
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
