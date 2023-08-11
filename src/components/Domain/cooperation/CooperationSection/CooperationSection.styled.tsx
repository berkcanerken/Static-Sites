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
`;

const CooperationBoxStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  box-shadow: 0 0 7px ${({ theme }) => (theme as typeof defaultTheme).text};
  padding: 10px;
  width: 350px;
  height: 300px;
  margin: 20px 20px;
  cursor: pointer;
  text-decoration: none;
  padding: 20px;
  transition: scale 0.2s linear;

  :hover {
    scale: 1.03;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 350px;
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
