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
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 0 8px ${({ theme }) => (theme as typeof defaultTheme).text};
  text-align: left;
`;

export {
  RegulationsSectioinStyled,
  RegulationsHeadingStyled,
  RegulationsBoxStyled,
};
