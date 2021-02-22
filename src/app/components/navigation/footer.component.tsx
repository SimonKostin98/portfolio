import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface IFooterProps {}

const useStyles = makeStyles(() => ({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '4vh',
    borderTop: '1px solid rgba(255, 255, 255, .7)',
  },
}));

export const Footer = (props: IFooterProps): ReactElement => {
  const classes = useStyles();
  return <footer className={classes.footer}>Hier steht Text</footer>;
};
