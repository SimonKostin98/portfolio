import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

interface IFooterProps {}

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    height: theme.custom.footerHeight,
    width: '100%',
    borderTop: '1px solid rgba(255, 255, 255, .7)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '56px',
    backgroundColor: 'black',
  },
}));

export const Footer = (props: IFooterProps): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <IconButton color="inherit" size="large">
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit" size="large">
        <FacebookIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit" size="large">
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
      <IconButton color="inherit" size="large">
        <MailIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
