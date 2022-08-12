import { Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  startAnimationView: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation:
      '$disappearViewAnimation 0s ease-in 4.5s forwards, $disappearAnimation 1s ease-in 3.5s forwards',
  },
  contentWrapper: {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 150px 50px 250px',
    backgroundRepeat: 'no-repeat',
    // eslint-disable-next-line max-len
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to bottom, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to right, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to bottom, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%)`,
    backgroundSize: '0 0, 0 0, 0 0, 0 0',
    backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
    animation: '$borderAnimation 1.25s ease-out 2.25s forwards',

    [theme.breakpoints.down('md')]: {
      padding: '20px 7.5vw 30px 15vw',
    },
  },
  stack: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    transform: 'translate(100%, 120%)',
    opacity: 0,
    animation:
      '$appearAnimation .5s ease-in forwards, $stackAnimation .75s linear .5s forwards',
  },
  stackElement: {
    height: 'calc(6vh + 6vw)',
    width: 'calc(6vh + 6vw)',
    transformOrigin: '0 0',
    transform: 'rotate(210deg) skew(-30deg) scaleY(0.864)',
    bottom: 190,
    borderRadius: 15,
    marginTop: '-66%',

    [theme.breakpoints.down('sm')]: {
      height: 'calc(4.5vh + 4.5vw)',
      width: 'calc(4.5vh + 4.5vw)',
    },
  },
  title: {
    fontSize: '20vh',
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
      fontSize: '14vh',
    },
  },
  firstLetter: {
    opacity: 0,
    animation: '$appearAnimation .5s linear 1.25s forwards',
  },
  secondLetter: {
    opacity: 0,
    animation: '$appearAnimation .5s linear 1.75s forwards',
  },

  '@keyframes disappearViewAnimation': {
    to: {
      width: 0,
      height: 0,
      visibility: 'hidden',
    },
  },

  '@keyframes stackAnimation': {
    from: {
      transform: 'translate(100%, 120%)',
    },
    to: {
      transform: 'translate(0px, 120%)',
    },
  },

  '@keyframes secondLetterAnimation': {
    '0%': {
      opacity: 0,
    },
    '80%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  '@keyframes borderAnimation': {
    '0%': {
      backgroundSize: '0 10px, 10px 0, 0 10px, 10px 0',
    },
    '25%': {
      backgroundSize: '100% 10px, 10px 0, 0 10px, 10px 0',
    },
    '50%': {
      backgroundSize: '100% 10px, 10px 100%, 0 10px, 10px 0',
    },
    '75%': {
      backgroundSize: '100% 10px, 10px 100%, 100% 10px, 10px 0',
    },
    '100%': {
      backgroundSize: '100% 10px, 10px 100%, 100% 10px, 10px 100%',
    },
  },

  '@keyframes appearAnimation': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  '@keyframes disappearAnimation': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
}));

const createShadow = (color: string, height: number): string => {
  let result = height <= 0 ? '' : `-1px -1px 0 1px ${color}`;

  for (let i = 2; i <= height; i++) {
    result += `, -${i}px -${i}px 0 1px ${color}`;
  }

  return result;
};

export const StartAnimationView = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.startAnimationView}>
      <div className={classes.contentWrapper}>
        <div className={classes.stack}>
          <div
            className={classes.stackElement}
            style={{
              backgroundColor: theme.palette.primary.dark,
              boxShadow: createShadow('#005362', 20),
            }}
          />
          <div
            className={classes.stackElement}
            style={{
              backgroundColor: theme.palette.primary.main,
              boxShadow: createShadow('#00717f', 20),
            }}
          />
          <div
            className={classes.stackElement}
            style={{
              backgroundColor: theme.palette.primary.light,
              boxShadow: createShadow('#3b8f99', 20),
            }}
          />
        </div>
        <div className={classes.title}>
          <span className={classes.firstLetter}>S</span>
          <span className={classes.secondLetter}>K</span>
        </div>
      </div>
    </div>
  );
};
