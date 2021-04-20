import { ThemeOptions } from '@material-ui/core';

export const darkTheme : ThemeOptions = {
  palette: {
    primary: {
      light: '#62efff',
      main: '#00BCD4',
      dark: '#008ba3'
    },
    secondary: {
      light: '#FF1476',
      main: '#CC137A',
      dark: '#B3116B'
    },
    background: {
      paper: '#424242',
      default: '#212121',
    },
    text:{
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)'
    },
    type: 'dark',
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
  },
  custom: {
    topHeight: 61,
    bottomHeight: 48,
    paperLight: '#848484',
  }
};
