import profilePictureURL from '@assets/images/defaultAvatar.jpg';
import { Button, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  homeComponent: {
    width: '100%',
    position: 'absolute',
    top: theme.custom.topHeight,
    bottom: theme.custom.bottomHeight,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 5vw 3vh 5vw',
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
    animation: '$startText 1s linear',
  },
  firstHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'calc(5vh + 3vw)',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '-10px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '-25px',
    },
  },
  secondHeading: {
    fontWeight: 'bold',
    fontSize: 'calc(3.5vh + 1.5vw)',
    color: theme.palette.primary.main,
  },
  button: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    color: 'white',
    fontWeight: 'bold',
    WebkitTextStroke: '0',
    marginTop: '10px',
    borderRadius: '10rem',
  },
  image: {
    backgroundImage: `url(${profilePictureURL as string})`,
    width: 'calc(28vw + 5vh)',
    height: 'calc(28vw + 5vh)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    animation: '$startImage 1s linear',
  },
  '@keyframes startImage': {
    from: {
      transform: 'scale(0)',
      webkitTransform: 'scale(0)',
    },

    to: {
      transform: 'scale(1.0)',
      webkitTransform: 'scale(1.0)',
    },
  },
  '@keyframes startText': {
    from: {
      transform: 'translateX(-150%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
}));

export const HomeComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.homeComponent}>
      <div className={classes.infoText}>
        <div className={classes.firstHeading}>Simon Kostin</div>
        <div className={classes.secondHeading}>Full Stack Developer</div>
        <Button className={classes.button} variant="contained" size="large">
          Contact me
        </Button>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};
