import { ThemeOptions } from '@mui/material/';

export const theme: ThemeOptions = {
  palette: {
    primary: {
      light: '#fff8e7',
      main: '#ffeaa7',
      dark: '#d4a04a',
    },
    secondary: {
      light: '#ff786f',
      main: '#e54444',
      dark: '#ac001c',
    },
    error: {
      main: '#ff6961',
    },
    background: {
      paper: 'rgba(50, 50, 50, 0.5)',
      default: '#000',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 2000,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shape: {
    borderRadius: 20,
  },
  custom: {
    navigationHeight: 60,
    footerHeight: 48,
    paperLight: 'rgba(50, 50, 50, 0.6)',
    cardShadow: '0 0 5px 1px rgba(200, 200, 200, .35)',
  },
};
