import { IconButton, makeStyles, Theme } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import React, { ReactElement } from 'react';

interface IFooterProps {}

const useStyles = makeStyles((theme: Theme) => ({
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
    fontSize: '56px',
  },
}));

export const Footer = (props: IFooterProps): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <IconButton color="inherit">
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <FacebookIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit">
        <MailIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
