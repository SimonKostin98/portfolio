import { makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  resumeComponent: {
    top: theme.custom.topHeight,
    bottom: theme.custom.bottomHeight,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  },
}));

export const ResumeComponent = (): ReactElement => {
  const classes = useStyles();
  return <div className={classes.resumeComponent} />;
};
