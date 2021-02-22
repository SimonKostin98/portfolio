import { IconButton, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { ReactElement } from 'react';

interface IFooterProps {}

const useStyles = makeStyles(() => ({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: '1px solid rgba(255, 255, 255, .7)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsIcon: {
    position: 'absolute',
    right: 0,
  },
}));

export const Footer = (props: IFooterProps): ReactElement => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <IconButton color="inherit">
        <GitHubIcon />
      </IconButton>
      <IconButton color="inherit">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="inherit">
        <MailIcon />
      </IconButton>
      <IconButton color="inherit" className={classes.settingsIcon}>
        <SettingsIcon />
      </IconButton>
    </footer>
  );
};
