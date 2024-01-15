import { colors, createTheme } from '@mui/material';
import { Montserrat } from '@next/font/google';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    normal: true;
  }
}

const defaultTheme = createTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: colors.pink[300],
          '&:hover': {
            backgroundColor: colors.pink[400], 
          },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          width: '150px',
          border: 'none',
          borderRadius: '20px',
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: colors.pink[500],
            color: colors.common.white,

            ':hover': {
              backgroundColor: colors.pink[400],
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: colors.pink[900],
            color: colors.common.white,

            ':hover': {
              backgroundColor: colors.pink[800],
            },
          },
        },
        {
          props: { variant: 'normal' },
          style: {
            backgroundColor: colors.teal[500],
            color: colors.common.white,

            ':hover': {
              backgroundColor: colors.teal[300],
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          border: 'none',
          boxShadow: 'none',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          cursor: 'pointer',
          color: colors.pink[900],
          fontWeight: 'bold',

          ':hover': {
            color: colors.pink[200],
          },

          ':focus': {
            outlineStyle: 'auto',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: '2px solid',
          borderColor: colors.pink[800],
          backgroundColor: colors.pink[100],
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.blue[800],
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          border: '2px solid',
          borderColor: colors.pink[800],
          backgroundColor: colors.pink[100],
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '2px solid',
          borderColor: colors.pink[800],
          backgroundColor: colors.pink[100],
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          border: '2px solid',
          borderColor: colors.pink[800],
          backgroundColor: colors.pink[100],
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Montserrat',

    h1: {
      fontSize: '96px',
      lineHeight: 1.3,
      letterSpacing: 4,
      color: colors.pink[900],
    },
    h2: {
      fontSize: '60px',
      lineHeight: 1.2,
      letterSpacing: 2,
      color: colors.pink[900],
    },
    h3: {
      fontSize: '48px',
      lineHeight: 1.2,
      letterSpacing: 2,
      color: colors.pink[900],
    },
    h4: {
      fontSize: '32px',
      lineHeight: '1.2',
      letterSpacing: 0.2,
      color: colors.pink[900],
    },
    h5: {
      fontSize: '24px',
      lineHeight: 1.3,
      letterSpacing: 0.2,
      color: colors.pink[900],
    },
    h6: {
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: 0.144,
      fontWeight: 500,
      color: colors.pink[900],
    },

    body1: {
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: 0.144,
      color: colors.common.black,
    },
    body2: {
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: 0.144,
      color: colors.common.black,
    },
    button: {
      textTransform: 'capitalize',
    },
    overline: {
      fontSize: '10px',
      lineHeight: 2.6,
      letterSpacing: 0.88,
      color: colors.pink[900],
    },
  },
});

export { defaultTheme };
