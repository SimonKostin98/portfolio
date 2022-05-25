import profilePictureURL from '@assets/images/defaultAvatar.jpg';
import { Button, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  homeComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 5vw 3vh 5vw',
    boxSizing: 'border-box',
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
    animation: '$animation 1.25s linear',
  },
  firstHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'calc(5vh + 3vw)',
    [theme.breakpoints.down('md')]: {
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
    animation: '$animation 1.25s linear',
  },
  '@keyframes animation': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

export const HomeComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.homeComponent} id="Home">
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
