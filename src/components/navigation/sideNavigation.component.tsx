import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) => ({
  sideNavigation: {
    height: '100%',
    width: theme.custom.navigationWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContent: {
    backgroundColor: 'rgba(40, 40, 40, 0.5)',
    backdropFilter: 'blur(10px)',
    WebkitBoxShadow: '0 0 10px 1px rgba(150, 150, 150, .35)',

    width: '70%',
    padding: 30,
    gap: 40,
    borderRadius: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    animation: '$animation .75s linear',
  },
  navigationIcon: {
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.2s ease-out',
    borderRadius: '50%',
    color: 'rgba(250, 250, 250, 0.8)',
  },
  active: {
    border: `2.5px solid ${theme.palette.primary.light}`,
    borderRadius: '50%',
    transition: '.2s ease-out',
    color: theme.palette.primary.main,
  },
  '@keyframes animation': {
    from: {
      transform: 'translateX(-150%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
}));

export const SideNavigation = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.sideNavigation}>
      <div className={classes.navigationContent}>
        <Link
          to="Home"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <HomeRoundedIcon fontSize="large" />
        </Link>
        <Link
          to="About"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <PersonRoundedIcon fontSize="large" />
        </Link>
        <Link
          to="Experience"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <WorkRoundedIcon fontSize="large" />
        </Link>
        <Link
          to="Skills"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <PsychologyRoundedIcon fontSize="large" />
        </Link>
        <Link
          to="Projects"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <FolderSpecialRoundedIcon fontSize="large" />
        </Link>
        <Link
          to="Contact"
          activeClass={classes.active}
          className={classes.navigationIcon}
          spy
          smooth
          duration={500}
          offset={-5}
        >
          <ChatBubbleRoundedIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};
