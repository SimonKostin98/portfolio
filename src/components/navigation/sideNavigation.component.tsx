import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import { IconButton, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface ISideNavigationProps {
  getCurrentSlideIndex: () => number;
  scrollToSlide: (slideIndex: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  sideNavigation: {
    position: 'fixed',
    left: 0,
    height: '100%',
    width: theme.custom.navigationWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.appBar,

    [theme.breakpoints.up('md')]: {
      top: 0,
    },

    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: theme.custom.navigationHeight,
      bottom: '0',
      backgroundColor: theme.palette.background.default,
      padding: '10px 0',
    },

    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  navigationContent: {
    backgroundColor: 'rgba(40, 40, 40, 0.4)',
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

    [theme.breakpoints.down('md')]: {
      width: '90%',
      flexDirection: 'row',
      height: '100%',
      gap: 20,
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderRadius: 0,
      padding: '0px 10px',
    },
  },
  navigationIcon: {
    cursor: 'pointer',
    height: 58,
    width: 58,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.2s ease-out',
    borderRadius: '50%',
    color: 'rgba(250, 250, 250, 0.8)',

    [theme.breakpoints.down('md')]: {
      height: 50,
      width: 50,
    },
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

export const SideNavigation = (props: ISideNavigationProps): ReactElement => {
  const { getCurrentSlideIndex, scrollToSlide } = props;
  const classes = useStyles();

  return (
    <div className={classes.sideNavigation}>
      <div className={classes.navigationContent}>
        <div
          className={clsx(classes.navigationIcon, {
            [classes.active]: getCurrentSlideIndex() === 0,
          })}
        >
          <IconButton color="inherit" onClick={() => scrollToSlide(0)}>
            <HomeRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div
          className={clsx(classes.navigationIcon, {
            [classes.active]: getCurrentSlideIndex() === 1,
          })}
        >
          <IconButton color="inherit" onClick={() => scrollToSlide(1)}>
            <PersonRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div
          className={clsx(classes.navigationIcon, {
            [classes.active]: getCurrentSlideIndex() === 2,
          })}
        >
          <IconButton color="inherit" onClick={() => scrollToSlide(2)}>
            <PsychologyRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div
          className={clsx(classes.navigationIcon, {
            [classes.active]: getCurrentSlideIndex() === 3,
          })}
        >
          <IconButton color="inherit" onClick={() => scrollToSlide(3)}>
            <FolderSpecialRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div
          className={clsx(classes.navigationIcon, {
            [classes.active]: getCurrentSlideIndex() === 4,
          })}
        >
          <IconButton color="inherit" onClick={() => scrollToSlide(4)}>
            <ChatBubbleRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
