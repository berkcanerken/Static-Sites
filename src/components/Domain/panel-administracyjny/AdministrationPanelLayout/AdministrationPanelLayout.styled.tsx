import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import styled from 'styled-components';

const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(10)};
  width: 100vw;
  min-height: 100vh;
  padding: ${pxToRem('0 10')};
  background: ${({ theme }) => (theme as typeof defaultTheme).PanelBackground};
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdministrationPanelHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(10)};
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  width: calc(100vw - ${pxToRem(20)});
  min-height: ${pxToRem(72)};
  padding: ${pxToRem('8 20')};
  margin: ${pxToRem(10)};
  border: ${pxToRem(6)};
`;

export { ArticleStyled, LinkStyled, AdministrationPanelHeaderStyled };
