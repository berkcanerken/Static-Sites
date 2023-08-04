import { defaultTheme } from '@/providers/ThemeProvider';
import styled from 'styled-components';

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
`;

const SectionHeadingStyled = styled.h3`
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
  font-size: 28px;
`;

const SectionWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export { SectionHeadingStyled, SectionStyled, SectionWrapperStyled };
