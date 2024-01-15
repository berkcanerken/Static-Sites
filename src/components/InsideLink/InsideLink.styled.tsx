import { pxToRem } from '@/handlers/pxToRem';
import { defaultTheme } from '@/providers/ThemeProvider';
import { Fab } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const InsideLinkStyled = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`;

const InsideLinkFABStyled = styled(Fab).withConfig({
  shouldForwardProp: (prop) =>
    !['borderRadius', 'padding', 'isBoxShadowExist', 'fontSize'].includes(prop),
})<{
  borderRadius: string;
  padding: string | 0;
  isBoxShadowExist: boolean;
  fontSize: number;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(10)};
  width: fit-content;
  height: fit-content;
  padding: ${({ padding }) => pxToRem(padding)};
  border-radius: ${({ borderRadius }) => pxToRem(borderRadius)};
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  ${({ isBoxShadowExist }) =>
    !isBoxShadowExist && `box-shadow: none !important;`}
  font-size: ${({ fontSize }) => pxToRem(fontSize)};
`;

export { InsideLinkStyled, InsideLinkFABStyled };
