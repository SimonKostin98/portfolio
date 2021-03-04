import { ThemeOptions } from '@material-ui/core';

export const lightTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#FF1476',
      main: '#CC137A',
      dark: '#B3116B'
    },
    secondary: {
      light: '#4D4DFF',
      main: '#000080',
      dark: '#003366'
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    type: 'light',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  typography:{
    fontFamily: [
      'Varela Round',
      'Nunito'
    ].join(','),
  }
};

export const darkTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#01FFFF',
      main: '#00389F',
      dark: '#000D80'
    },
    secondary: {
      light: '#FF61BE',
      main: '#EA55B1',
      dark: '#EF0888'
    },
    background: {
      paper: '#000',
      default: '#222',
    },
    type: 'dark',
  },
};
