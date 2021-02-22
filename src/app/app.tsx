import './app.scss';

import backgroundURL from '@assets/images/background.png';
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

const useStyles = makeStyles(() => ({
  background: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundURL as string})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    filter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  mainContent: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'white',
    zIndex: 1,
  },
}));

export const App = (): ReactElement => {
  const [theme, toggleDarkMode] = useDarkMode();
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ErrorBoundaryComponent>
        <div className={classes.background}>
          <div className={classes.blur} />
          <div className={classes.mainContent}>
            <NavigationBar
              toggleDarkMode={toggleDarkMode}
              active={active}
              setActive={(newValue: number) => setActive(newValue)}
            />
            <Footer />
          </div>
        </div>
      </ErrorBoundaryComponent>
    </MuiThemeProvider>
  );
};
