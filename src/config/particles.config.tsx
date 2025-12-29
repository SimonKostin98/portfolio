import type { StartValueType } from '@tsparticles/engine';

export const particlesOptions = {
  fpsLimit: 30,
  detectRetina: true,
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        area: 1000,
      },
    },
    color: {
      value: ['#fff8e7', '#ffeaa7', '#d4a04a'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: {
        min: 0.3,
        max: 0.9,
      },
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
        startValue: 'random' as StartValueType,
      },
    },
    size: {
      value: {
        min: 0.5,
        max: 2.5,
      },
    },
    shadow: {
      enable: true,
      color: '#ffeaa7',
      blur: 8,
    },
    move: {
      enable: false,
    },
  },
};
