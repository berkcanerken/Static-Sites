import { defaultTheme } from '@/providers/ThemeProvider';
import { List, ListItem } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

const AboutUsSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;

  @media screen and (min-width: 640px) {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutUsSectionImgStyled = styled(Image)`
  width: 275px;

  @media screen and (min-width: 1280px) {
    width: 380px;
  }
`;

const AboutUsSectionListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const AboutUsSectionListItemStyled = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const AboutUsSectionHeadingStyled = styled.h3`
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
  font-size: 28px;
`;

const AboutUsSectionTextStyled = styled.p`
  color: ${({ theme }) => (theme as typeof defaultTheme).text};
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export {
  AboutUsSectionStyled,
  AboutUsSectionListStyled,
  AboutUsSectionListItemStyled,
  AboutUsSectionHeadingStyled,
  AboutUsSectionTextStyled,
  AboutUsSectionImgStyled,
};
