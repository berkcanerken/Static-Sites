import React from 'react';
import {
  ContactSpeedDialStyled,
  ContactSpeedDialIconStyled,
  ContactSpeedDialActionStyled,
} from './SpeedDial.styled';
import { getContactData } from './ContactSpeedDial.data';
// import { MenuApiType } from '../../types/server';
import { checkTheContactMethod } from '@/handlers/checkTheContactMethod';
import { AlertContext } from '../Alert/Alert.context';

// type ContactSpeedDialProps = {
//   data: MenuApiType;
// };

const ContactSpeedDial: React.FC = () => {
  const [speedDialBottom, setSpeedDialBottom] = React.useState<number>(0);
  const [contactContent, setContactContent] = React.useState<string>('');

  const contactSpeedDialRef = React.useRef<HTMLDivElement>(null);
  const contactData = getContactData();

  const Alert = React.useContext(AlertContext);

  React.useEffect((): void => {
    Alert?.setMessage(contactContent);
  }, [contactContent]);

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
    } else {
      window.location.href = method;
      setContactContent(content);
    }
  };

  return (
    <>
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
