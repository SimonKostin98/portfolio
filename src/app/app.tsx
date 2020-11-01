import './app.scss';

import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  ThemeOptions,
} from '@material-ui/core';
import React, { ReactElement, useState } from 'react';

import { ErrorBoundaryComponent } from './components/errorBoundary.component';
import { NavigationBar } from './components/navigation/navigationBar.component';
import { darkTheme, lightTheme } from './theme';

const useDarkMode = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (): void => {
    setTheme(theme.palette!.type === 'light' ? darkTheme : lightTheme);
  };

  return [theme, toggleTheme];
};

export const App = (): ReactElement => {
  const [theme, toggleDarkMode] = useDarkMode();
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ErrorBoundaryComponent>
        <NavigationBar toggleDarkMode={toggleDarkMode} />
        <button onClick={toggleDarkMode}>dark mode</button>
      </ErrorBoundaryComponent>
    </MuiThemeProvider>
  );
};
