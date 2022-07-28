import CV from '@assets/Lebenslauf.pdf';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Button, IconButton, Theme, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';
import Typewriter from 'typewriter-effect';

interface IHomeViewProps {
  goToContact: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  homeComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginLeft: `-${theme.custom.navigationWidth / 2}px`,
    alignItems: 'center',
    justifyContent: 'space-around',
    boxSizing: 'border-box',

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      height: `calc(100% - ${theme.custom.navigationHeight}px)`,
    },
  },
  socials: {
    position: 'absolute',
    top: 75,
    right: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop: 10,
    color: 'rgba(250, 250, 250, 0.85)',

    [theme.breakpoints.down('md')]: {
      top: 10,
      left: 60,
      right: 'auto',
      flexDirection: 'row',
    },

    '&::before': {
      content: '""',
      backgroundColor: 'rgba(250, 250, 250, 0.85)',
      width: 2,
      height: 60,
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      marginLeft: -2,

      [theme.breakpoints.down('md')]: {
        height: 2,
        width: 50,
        bottom: 'calc(50% - 7px)',
        left: -60,
      },
    },
  },
  infoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: '$animation 1.25s linear',
  },
  firstHeading: {
    color: 'white',
    fontWeight: 'bolder',
    fontSize: 'calc(6vh + 5vw)',
    [theme.breakpoints.down('md')]: {
      fontSize: 'calc(5vh + 3vw)',
    },
  },
  secondHeading: {
    fontWeight: 'bold',
    fontSize: 'calc(3.5vh + 1.5vw)',
    color: theme.palette.primary.main,

    [theme.breakpoints.down('md')]: {
      fontSize: 'calc(2.5vh + 1vw)',
    },
  },
  button: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '10px',
    borderRadius: '10rem',
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

export const HomeView = (props: IHomeViewProps): ReactElement => {
  const classes = useStyles();
  const { goToContact } = props;
  return (
    <div className={classes.homeComponent} id="Home">
      <div className={classes.socials}>
        <Tooltip title="Github" arrow placement="left">
          <IconButton
            color="inherit"
            href="https://github.com/SimonKostin98"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow placement="left">
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/simonkostin/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="CV" arrow placement="left">
          <IconButton
            color="inherit"
            href={CV as string}
            download="simon_kostin_cv.pdf"
          >
            <SummarizeIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.infoText}>
        <div className={classes.firstHeading}>Simon Kostin</div>
        <div className={classes.secondHeading}>
          <Typewriter
            options={{
              strings: [
                // eslint-disable-next-line quotes
                "I'm a Full Stack Developer",
                'I make ideas come to life',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          onClick={() => goToContact()}
        >
          Contact me
        </Button>
      </div>
    </div>
  );
};
