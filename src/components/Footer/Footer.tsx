import React from 'react';
import {
  FooterAvaterStyled,
  FooterLinkStyled,
  FooterStyled,
  FooterTextStyled,
  FootersContentWrapperStyled,
} from './Footer.styled';
import { getFooterContactData, getPolicyData } from './Footer.data';
import { FooterCopyrightApiType, MenuApiType } from '../types/server';
import { v4 as uuid } from 'uuid';

type FooterProps = {
  data: [MenuApiType, MenuApiType, FooterCopyrightApiType];
};

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <FooterStyled>
      <FootersContentWrapperStyled>
        {getFooterContactData().map((link) => (
          <FooterAvaterStyled key={uuid()}>
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
          <FooterLinkStyled href={icon.link} key={uuid()}>
            {icon.icon}
            {icon.name}
          </FooterLinkStyled>
        ))}
      </FootersContentWrapperStyled>

      <FootersContentWrapperStyled>
        <FooterTextStyled opacity={60}>{data[2]}</FooterTextStyled>
      </FootersContentWrapperStyled>
    </FooterStyled>
  );
};

export { Footer };