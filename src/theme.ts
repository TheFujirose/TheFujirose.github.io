import { ThemeContext } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6750a4',
      light: '#7f68b2',
      dark: '#5a47a0',
    },
    background: {
      default: '#ffffff',
      paper: '#fef7ff',
    },
    text: {
      primary: '#1d1b20',
      secondary: '#49454f',
    },
    divider: '#e0e0e0',
    action: {
      disabledBackground: '#ece6f0',
    },
  },
  typography: (palette) => ({
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: '28px',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '32px',
    },
    h6: {
      marginBottom: '8px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      color: palette.text.secondary
    },
  }),
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1d1b20',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '@media (min-width: 600px)': {
            padding: '20px',
          },
          '@media (min-width: 960px)': {
            padding: '24px',
          },
          '@media (min-width: 1280px)': {
            padding: '24px',
          },
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#cac4d0',
          color: '#49454f',
          textTransform: 'none',
          borderRadius: '100px',
          fontSize: '14px',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.04)',
          },
        },
        contained: {
          textTransform: 'none',
          borderRadius: '100px',
          fontSize: '14px',
        },
      },
    },
  },
});
