/* eslint-disable */
import { SideNavigation } from '@components/navigation/sideNavigation.component';
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AboutView } from '@views/about.view';
import { ContactView } from '@views/contact.view';
import { ExperienceView } from '@views/experience.view';
import { HomeView } from '@views/home.view';
import { ProjectsView } from '@views/projects.view';
import React, { ReactElement, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { FullPage, Slide } from 'react-full-page';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { theme } from './theme';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  navigation: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: theme.custom.navigationWidth,
  },
  main: {
    position: 'absolute',
    left: theme.custom.navigationWidth,
    height: '100vh',
    width: `calc(100vw - ${theme.custom.navigationWidth}px)`,
  },
  fullpage: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const AppContent = (): ReactElement => {
  const classes = useStyles();
  const ref = useRef<{ scrollToSlide: (slide: number) => void }>(null);

  const goToContact = () => {
    ref.current?.scrollToSlide(4);
  };

  return (
    <>
      <div className={classes.main}>
        <FullPage
          duration={750}
          controls={SideNavigation}
          className={classes.fullpage}
          ref={ref}
        >
          <Slide>
            <HomeView goToContact={goToContact} />
          </Slide>
          <Slide>
            <AboutView goToContact={goToContact} />
          </Slide>
          <Slide>
            <ExperienceView />
          </Slide>
          <Slide>
            <ProjectsView />
          </Slide>
          <Slide>
            <ContactView />
          </Slide>
        </FullPage>
      </div>
    </>
  );
};

const App = (): ReactElement => {
  const classes = useStyles();

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <div>
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
      <AppContent />
    </div>
  );
};

const Wrapper = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <GlobalStyles
          styles={{
            '*::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        />
        <CssBaseline />
        <App />{' '}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Wrapper />);
