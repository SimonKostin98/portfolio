import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  Theme,
} from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import Particles from 'react-particles-js';

import { HomeComponent } from './components/content/home.component';
import { ResumeComponent } from './components/content/resume.component';
import { ErrorBoundaryComponent } from './components/errorBoundary.component';
import { Footer } from './components/navigation/footer.component';
import {
  NavigationBar,
  NavigationBarSmall,
} from './components/navigation/navigationBar.component';
import { darkTheme } from './theme';

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
    zIndex: 1,
  },
  navigationBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navigationBarSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export const App = (): ReactElement => {
  const [active, setActive] = useState(2);
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={createMuiTheme(darkTheme)}>
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
                color: {
                  value: '#00BCD4',
                },
                line_linked: {
                  color: '#00BCD4',
                  width: 2.5,
                },
                opacity: {
                  value: 0.7,
                },
                size: {
                  value: 5,
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
              active={active}
              setActive={(newValue: number) => setActive(newValue)}
            />
          </div>
          <div className={classes.navigationBarSmall}>
            <NavigationBarSmall
              active={active}
              setActive={(newValue: number) => setActive(newValue)}
            />
          </div>
          {active === 0 && <HomeComponent />}
          {active === 2 && <ResumeComponent />}
          <Footer />
        </div>
      </ErrorBoundaryComponent>
    </MuiThemeProvider>
  );
};
