import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface IExperienceNavigationProps {
  elements: string[];
  activeElement: number;
  setActiveElement: (newElement: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  experienceNavigation: {
    height: '100%',
    width: 150,
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
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
        >
          {element}
        </div>
      ))}
    </div>
  );
};
