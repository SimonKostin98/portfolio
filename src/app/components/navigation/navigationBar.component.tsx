import logoLight from '@assets/images/logoLight.png';
import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface INavigationBarProps {
  toggleDarkMode: () => void;
  active: number;
  setActive: (newValue: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    padding: '5px 20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noShadow: {
    boxShadow: 'none',
  },
  logo: {
    height: 50,
  },
  logoWrapper: {
    padding: '5px 0',
    height: 60,
  },
  menuItem: {
    fontWeight: 'bold',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'medium',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 'x-large',
    },
  },
}));

export const NavigationBar = (props: INavigationBarProps): ReactElement => {
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    props.setActive(newValue);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      className={clsx(classes.appBar, props.active != 1 && classes.noShadow)}
    >
      <div className={classes.logoWrapper}>
        <img src={logoLight as string} className={classes.logo} />
      </div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.active}
        onChange={handleChange}
      >
        <Tab label="Home" className={classes.menuItem} />
        <Tab label="About" className={classes.menuItem} />
        <Tab label="Resume" className={classes.menuItem} />
        <Tab label="Projects" className={classes.menuItem} />
      </Tabs>
    </AppBar>
  );
};
