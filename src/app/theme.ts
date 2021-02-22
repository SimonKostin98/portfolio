import { ThemeOptions } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';

export const lightTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#01FFFF',
      main: '#CC137A',
      dark: '#B3116B'
    },
    secondary: {
      light: '#FF61BE',
      main: '#EA55B1',
      dark: '#EF0888'
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    type: 'light',
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
