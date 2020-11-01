import { ThemeOptions } from '@material-ui/core';
import { blue, indigo, orange, purple } from '@material-ui/core/colors';

export const lightTheme: ThemeOptions = {
  palette: {
    primary: blue,
    secondary: indigo,
    background: {
      paper: '#fff',
      default: '#fff',
    },
    type: 'light',
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    primary: orange,
    secondary: purple,
    background: {
      paper: '#000',
      default: '#222',
    },
    type: 'dark',
  },
};
