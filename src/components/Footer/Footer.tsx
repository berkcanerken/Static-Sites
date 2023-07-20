import React from 'react';
import {
  FooterAvaterStyled,
  FooterLinkStyled,
  FooterStyled,
  FooterTextStyled,
  FootersContentWrapperStyled,
} from './Footer.styled';
import { getFooterContactData, getPolicyData } from './Footer.data';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FootersContentWrapperStyled>
        {getFooterContactData().map((link) => (
          <FooterAvaterStyled>
            <FooterLinkStyled
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </FooterLinkStyled>
          </FooterAvaterStyled>
        ))}
      </FootersContentWrapperStyled>

      <FootersContentWrapperStyled>
        {getPolicyData().map((icon) => (
          <FooterLinkStyled href={icon.link}>
            {icon.icon}
            {icon.name}
          </FooterLinkStyled>
        ))}
      </FootersContentWrapperStyled>

      <FootersContentWrapperStyled>
        <FooterTextStyled opacity={60}>
          © 2023 Mazowiecki związek tańca sportowego
        </FooterTextStyled>
      </FootersContentWrapperStyled>
    </FooterStyled>
  );
};

export { Footer };
