import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface IExperienceNavigationProps {
  elements: { title: string; iconUrl: string }[];
  activeElement: number;
  setActiveElement: (newElement: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  experienceNavigation: {
    height: '100%',
    width: 150,
    paddingTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 50,
      paddingTop: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 0,
    },
  },
  navigationElement: {
    width: '100%',
    height: 60,
    display: 'grid',
    placeItems: 'center',
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: '500rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      backgroundImage: 'none !important',
    },

    [theme.breakpoints.down('md')]: {
      width: 50,
      height: 50,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      color: 'transparent',
      border: '2px solid white',

      '& span': {
        display: 'none',
      },
    },
  },
  active: {
    border: `2px solid ${theme.palette.primary.main}`,
    '&::after': {
      content: '""',
      display: 'block',
      height: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(100% + 2px)',
      top: 'calc(50% - 2px)',
      width: 50,

      [theme.breakpoints.down('md')]: {
        height: 15,
        width: 2,
        left: 'calc(50% - 2px)',
        top: 'calc(100% + 2px)',
      },
    },
  },
}));

export const ExperienceNavigation = (
  props: IExperienceNavigationProps,
): ReactElement => {
  const { elements, activeElement, setActiveElement } = props;
  const classes = useStyles();
  return (
    <div className={classes.experienceNavigation}>
      {elements.map((element, index) => (
        <div
          key={index}
          className={clsx(classes.navigationElement, {
            [classes.active]: activeElement == index,
          })}
          onClick={() => setActiveElement(index)}
          style={{ backgroundImage: `url(${element.iconUrl})` }}
        >
          <span>{element.title}</span>
        </div>
      ))}
    </div>
  );
};
