import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  ThemeOptions,
} from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import Particles from 'react-particles-js';

import { HomeComponent } from './components/content/home.component';
import { ErrorBoundaryComponent } from './components/errorBoundary.component';
import { Footer } from './components/navigation/footer.component';
import { NavigationBar } from './components/navigation/navigationBar.component';
import { darkTheme, lightTheme } from './theme';

const useDarkMode = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (): void => {
    setTheme(theme.palette!.type === 'light' ? darkTheme : lightTheme);
  };

  return [theme, toggleTheme];
};

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(-45deg, #000428, #000424, #1e9afe 110%)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  particles: {
    height: '100%',
    width: '100%',
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
  const [active, setActive] = useState(0);
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <ErrorBoundaryComponent>
        <div className={classes.background}>
          <Particles
            className={classes.particles}
            params={{
              particles: {
                number: {
                  value: 60,
                  density: { enable: true, value_area: 1500 },
                },
                opacity: {
                  value: 0.7,
                },
                size: {
                  value: 4,
                  random: true,
                  anim: { enable: true, speed: 3 },
                },
                move: {
                  speed: 1.5,
                },
              },
            }}
          />
        </div>
        <div className={classes.mainContent}>
          <div className={classes.navigationBar}>
            <NavigationBar
              toggleDarkMode={toggleDarkMode}
              active={active}
              setActive={(newValue: number) => setActive(newValue)}
            />
            <HomeComponent />
            <Footer />
          </div>
        </div>
      </ErrorBoundaryComponent>
    </MuiThemeProvider>
  );
};
