import { HomeComponent } from '@components/content/home.component';
import { ResumeComponent } from '@components/content/resume/resume.component';
import { Footer } from '@components/navigation/footer.component';
import {
  NavigationBar,
  NavigationBarSmall,
} from '@components/navigation/navigationBar.component';
import {
  createTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  Theme,
} from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { darkTheme } from './theme';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
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
    fontDisplay: 'swap',
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

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <MuiThemeProvider theme={createTheme(darkTheme)}>
      <CssBaseline />
      <div className={classes.background}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: ['#62efff', '#00bcd4', '#008ba3'],
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#62efff',
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: true,
                animation: {
                  enable: true,
                  speed: 10,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              lineLinked: {
                enable: false,
                distance: 150,
                color: '#c8c8c8',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                outMode: 'bounce',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            detectRetina: true,
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
    </MuiThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
