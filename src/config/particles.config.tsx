import type {
  DestroyType,
  MoveDirection,
  StartValueType,
} from '@tsparticles/engine';

export const particlesOptions = {
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
};
