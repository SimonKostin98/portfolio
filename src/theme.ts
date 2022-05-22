import { ThemeOptions } from '@material-ui/core/';

export const darkTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#62efff',
      main: '#00BCD4',
      dark: '#008ba3',
    },
    secondary: {
      light: '#ff786f',
      main: '#e54444',
      dark: '#ac001c',
    },
    background: {
      paper: '#212121',
      default: '#000',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    type: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
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
  custom: {
    topHeight: 61,
    bottomHeight: 48,
    paperLight: '#424242',
    backgroundGradient: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)',
  },
};
