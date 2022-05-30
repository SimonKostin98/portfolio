import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  aboutView: {
    height: '100%',
    width: '100%',
    padding: '40px 20px',
    scrollSnapAlign: 'start',
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
  },
}));

export const AboutView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.aboutView} id="About">
      <div className={classes.heading}>About Me</div>
    </div>
  );
};
