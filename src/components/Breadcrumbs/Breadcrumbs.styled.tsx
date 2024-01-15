import { pxToRem } from '@/handlers/pxToRem';
import { Breadcrumbs } from '@mui/material';
import styled from 'styled-components';

const BreadcrumbsStyled = styled(Breadcrumbs)`
  padding-bottom: ${pxToRem(10)};

  ol {
    justify-content: center;
  }

  li {
    margin: ${pxToRem('0 2')};
  }

  @media screen and (min-width: 425px) {
    li {
      margin: ${pxToRem('0 8')};
    }
  }
`;

export { BreadcrumbsStyled };
