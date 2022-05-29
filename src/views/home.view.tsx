import person from '@assets/images/person.png';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Button, IconButton, Theme } from '@mui/material';
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
    padding: '0 1.5vw 0 5vw',
    boxSizing: 'border-box',
  },
  socials: {
    position: 'absolute',
    top: 75,
    right: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop: 10,
    color: 'rgba(250, 250, 250, 0.85)',

    '&::before': {
      content: '""',
      backgroundColor: 'rgba(250, 250, 250, 0.85)',
      width: 2,
      height: 60,
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      marginLeft: -2,
    },
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
    alignSelf: 'end',
    backgroundImage: `url(${person as string})`,
    width: 'calc(40vh + 17.5vw)',
    height: '95%',
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
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

export const HomeView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.homeComponent} id="Home">
      <div className={classes.socials}>
        <IconButton color="inherit">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton color="inherit">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit">
          <SummarizeIcon fontSize="large" />
        </IconButton>
      </div>
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
