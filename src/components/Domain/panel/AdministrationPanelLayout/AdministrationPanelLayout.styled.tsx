import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import { Button, IconButton } from '@mui/material';

const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(10)};
  width: 100vw;
  min-height: 100dvh;
  padding: ${pxToRem('0 10')};
  background: ${({ theme }) => (theme as typeof defaultTheme).secondaryItem};

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem('0 25')};
  }
`;

const AdministrationPanelHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: ${pxToRem(10)};
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  width: 100%;
  max-width: ${pxToRem(1400)};
  height: ${pxToRem(58)};
  margin: ${pxToRem('0 10')};
  border-radius: ${pxToRem('0 0 12 12')};
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    height: ${pxToRem(65)};
    padding: ${pxToRem('4 20')};
  }
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: ${pxToRem(10)};
  width: 100%;
  max-width: ${pxToRem(1400)};
  min-height: calc(100dvh - ${pxToRem(86)});
  margin: ${pxToRem('auto auto 10')};
  background: transparent;
`;

const TabsStyled = styled(Tabs)`
  display: flex;
  align-self: center;
  max-width: 100dvh;
  height: fit-content;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  border-radius: ${pxToRem(12)};

  & .MuiTabs-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    right: 0;

    &::after {
      content: '';
      display: block;
      width: ${pxToRem(2)};
      height: ${pxToRem(48)};
      background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
    }
  }
`;

const ContentStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: ${pxToRem(15)};
  width: 100%;
  min-height: calc(100dvh - ${pxToRem(86)});
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(15)};
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem('10 30')};
    gap: ${pxToRem(30)};

    overflow-y: scroll;
    height: calc(100dvh - ${pxToRem(86)});

    scrollbar-width: 0;
    scrollbar-color: transparent;

    ::-webkit-scrollbar {
      width: 0;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;

const AdministrationPanelNavigationButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
`;

const AdministrationPanelIconButtonStyled = styled(IconButton).withConfig({
  shouldForwardProp: (prop) => !['displayNoneOnDesktop'].includes(prop),
})<{ displayNoneOnDesktop: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: ${({ displayNoneOnDesktop }) =>
      displayNoneOnDesktop ? 'none' : 'flex'};
  }
`;

const AdministrationPanelNavigationWrapperStyled = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - ${pxToRem(86)});

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const AdministrationPanelAccountButtonsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  border-radius: ${pxToRem(12)};
  overflow: hidden;
`;

const AdministrationPanelAccountButtonStyled = styled(Button)`
  width: 100%;
  min-height: ${pxToRem(72)};
`;

const PanelFullScreenWidthWrapperStyled = styled.div`
  align-self: center;
  width: 100vw;
  height: fit-content;
`;

export {
  ArticleStyled,
  ContentWrapperStyled,
  AdministrationPanelHeaderStyled,
  TabsStyled,
  ContentStyled,
  AdministrationPanelIconButtonStyled,
  AdministrationPanelNavigationButtonsWrapper,
  AdministrationPanelNavigationWrapperStyled,
  AdministrationPanelAccountButtonsWrapperStyled,
  AdministrationPanelAccountButtonStyled,
  PanelFullScreenWidthWrapperStyled,
};
