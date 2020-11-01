import logoDark from '@assets/images/logoDark.png';
import logoLight from '@assets/images/logoLight.png';
import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  useTheme,
} from '@material-ui/core';
import { Facebook, GitHub } from '@material-ui/icons';
import React, { ReactElement } from 'react';

interface INavigationBarProps {
  toggleDarkMode: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid black',
    backgroundColor: theme.palette.background.paper,
  },
  toolBar: {
    padding: '4px 10px',
  },
  logo: {
    height: 60,
  },
  menuItem: {
    fontSize: '4vh',
    cursor: 'pointer',
  },
}));

export const NavigationBar = (props: INavigationBarProps): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="transparent" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
        >
          <Grid item md={1}>
            {/* TODO: center Logo vertically */}
            <img
              src={
                theme.palette.type == 'light'
                  ? (logoDark as string)
                  : (logoLight as string)
              }
              alt="logo"
              className={classes.logo}
            />
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={10}
            alignItems="center"
            justify="center"
          >
            <Grid item className={classes.menuItem}>
              Home
            </Grid>
            <Grid item className={classes.menuItem}>
              Projects
            </Grid>
            <Grid item className={classes.menuItem}>
              CV
            </Grid>
          </Grid>
          <Grid item container md={1}>
            <Grid item>
              <Facebook />
            </Grid>
            <Grid item>
              <GitHub />
            </Grid>
            <Grid item>
              <Facebook />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
