/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
import { loadBaseMover } from 'tsparticles-move-base';
import { loadCircleShape } from 'tsparticles-shape-circle';
import { loadColorUpdater } from 'tsparticles-updater-color';
import { loadOpacityUpdater } from 'tsparticles-updater-opacity';
import { loadOutModesUpdater } from 'tsparticles-updater-out-modes';
import { loadSizeUpdater } from 'tsparticles-updater-size';

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
          initialSlide={2}
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

  const particlesInit = async (engine: any) => {
    await loadColorUpdater(engine);
    await loadColorUpdater(engine);
    await loadCircleShape(engine);
    await loadBaseMover(engine);
    await loadSizeUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadOutModesUpdater(engine);
  };

  return (
    <div>
      <div className={classes.background}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 30,
            detectRetina: true,
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
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  minimumValue: 0.1,
                  destroy: 'none',
                  startValue: 'random',
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
