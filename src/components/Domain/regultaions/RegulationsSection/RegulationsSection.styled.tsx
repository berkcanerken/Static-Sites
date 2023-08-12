import { defaultTheme } from '@/providers/ThemeProvider';
import { Box } from '@mui/material';
import styled from 'styled-components';

const RegulationsSectioinStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegulationsHeadingStyled = styled.h2`
  display: flex;
  margin: 20px 0;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => (theme as typeof defaultTheme).text};

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const RegulationsBoxStyled = styled(Box)`
  width: 90% !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  margin: 10px !important;
  padding: 10px !important;
  border-radius: 24px !important;
  box-shadow: 0 0 8px ${({ theme }) => (theme as typeof defaultTheme).text} !important;
  text-align: left !important;
`;

export {
  RegulationsSectioinStyled,
  RegulationsHeadingStyled,
  RegulationsBoxStyled,
};
