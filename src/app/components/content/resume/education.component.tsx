import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  educationComponent: {
    width: '100%',
    height: '100%',
  },
}));

export const EducationComponent = (): ReactElement => {
  const classes = useStyles();
  return <div className={classes.educationComponent}></div>;
};
