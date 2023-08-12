import { defaultTheme } from '@/providers/ThemeProvider';
import styled from 'styled-components';
import { Link } from '@mui/material';
import Image from 'next/image';

const CooperationSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  gap: 20px;
`;

const CooperationBoxStyled = styled(Link)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 24px !important;
  box-shadow: 0 0 7px ${({ theme }) => (theme as typeof defaultTheme).text} !important;
  padding: 10px !important;
  width: 350px !important;
  height: 300px !important;
  /* margin: 20px 20px !important; */
  cursor: pointer !important;
  text-decoration: none !important;
  padding: 20px !important;
  transition: scale 0.2s linear !important;

  :hover {
    scale: 1.03 !important;
  }

  @media screen and (min-width: 1024px) {
    width: 400px !important;
    height: 350px !important;
  }
`;

const CooperationLogoImgStyled = styled(Image)`
  display: flex;
  width: 100px;
  height: 100px;
`;

const CooperationLogoTitleStyled = styled.h2`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => (theme as typeof defaultTheme).text};
  margin: 10px 0;
`;

const CooperationLogoDescriptionStyled = styled.p`
  display: flex;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => (theme as typeof defaultTheme).text};
`;

export {
  CooperationSectionStyled,
  CooperationBoxStyled,
  CooperationLogoImgStyled,
  CooperationLogoTitleStyled,
  CooperationLogoDescriptionStyled,
};
