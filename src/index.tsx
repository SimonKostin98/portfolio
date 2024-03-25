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
import type {
  DestroyType,
  Engine,
  MoveDirection,
  StartValueType,
} from '@tsparticles/engine';
import { loadBaseMover } from '@tsparticles/move-base';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadCircleShape } from '@tsparticles/shape-circle';
import { loadColorUpdater } from '@tsparticles/updater-color';
import { loadOpacityUpdater } from '@tsparticles/updater-opacity';
import { loadOutModesUpdater } from '@tsparticles/updater-out-modes';
import { loadSizeUpdater } from '@tsparticles/updater-size';
import { AboutView } from '@views/about.view';
import { ContactView } from '@views/contact.view';
import { ExperienceView } from '@views/experience.view';
import { HomeView } from '@views/home.view';
import { ProjectsView } from '@views/projects.view';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom/client';
import { FullPage, Slide } from 'react-full-page';

import { theme } from './theme';
import { StartAnimationView } from './views/startAnimation.view';

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
  main: {
    position: 'absolute',
    left: theme.custom.navigationWidth,
    height: '100vh',
    width: `calc(100vw - ${theme.custom.navigationWidth}px)`,

    [theme.breakpoints.down('md')]: {
      width: '100vw',
      left: 0,
    },
  },
  fullpage: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    [theme.breakpoints.down('md')]: {
      height: `calc(100% - ${theme.custom.navigationHeight}px) !important`,
    },
  },
}));

const AppContent = (): ReactElement => {
  const classes = useStyles();
  const [showStartAnimation, setShowStartAnimation] = useState(false);
  const ref = useRef<{ scrollToSlide: (slide: number) => void }>(null);

  const goToContact = () => {
    ref.current?.scrollToSlide(4);
  };

  useEffect(() => {
    setTimeout(() => setShowStartAnimation(false), 4500);
  });

  return (
    <>
      {showStartAnimation ? (
        <StartAnimationView />
      ) : (
        <div className={classes.main}>
          <FullPage
            duration={750}
            controls={SideNavigation}
            className={classes.fullpage}
            ref={ref}
            initialSlide={0}
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
      )}
    </>
  );
};

const App = (): ReactElement => {
  const classes = useStyles();
  const [init, setInit] = useState(false);

  const particlesInit = useCallback(async () => {
    await initParticlesEngine(async (engine: Engine) => {
      await loadColorUpdater(engine);
      await loadColorUpdater(engine);
      await loadCircleShape(engine);
      await loadBaseMover(engine);
      await loadSizeUpdater(engine);
      await loadOpacityUpdater(engine);
      await loadOutModesUpdater(engine);
    });
  }, []);

  useEffect(() => {
    void particlesInit().then(() => {
      setInit(true);
    });
  }, [particlesInit]);

  const tsParticlesOptions = useMemo(
    () => ({
      fpsLimit: 30,
      detectRetina: true,
      particles: {
        number: {
          value: 40,
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
            enable: true,
            speed: 0.5,
            destroy: 'none' as DestroyType,
            startValue: 'random' as StartValueType,
          },
        },
        size: {
          value: {
            min: 10,
            max: 25,
          },
          random: true,
          animation: {
            enable: true,
            speed: 10,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none' as MoveDirection,
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
    }),
    [],
  );

  if (init) {
    return (
      <div>
        <div className={classes.background}>
          <Particles id="tsparticles" options={tsParticlesOptions} />
        </div>
        <AppContent />
      </div>
    );
  }
  return <></>;
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
