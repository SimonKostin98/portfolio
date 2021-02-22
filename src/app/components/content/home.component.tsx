import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  homeComponent: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 65,
    bottom: 48,
  },
}));

export const HomeComponent = (): ReactElement => {
  const classes = useStyles();
  return <div className={classes.homeComponent}></div>;
};
