import logoLight from '@assets/images/logoLight.png';
import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface INavigationBarProps {
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
    padding: '3px 0',
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

const useStylesSmall = makeStyles((theme: Theme) => ({
  appBar: {},
  noShadow: {
    boxShadow: 'none',
  },
  menuItem: { color: 'white' },
}));

export const NavigationBar = (props: INavigationBarProps): ReactElement => {
  const classes = useStyles();

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    props.setActive(newValue);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      className={clsx(classes.appBar, props.active === 0 && classes.noShadow)}
    >
      <div className={classes.logoWrapper}>
        <img src={logoLight as string} className={classes.logo} />
      </div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.active}
        onChange={handleChange}
        selectionFollowsFocus
      >
        <Tab label="Home" className={classes.menuItem} />
        <Tab label="About" className={classes.menuItem} />
        <Tab label="Resume" className={classes.menuItem} />
        <Tab label="Projects" className={classes.menuItem} />
      </Tabs>
    </AppBar>
  );
};

export const NavigationBarSmall = (
  props: INavigationBarProps,
): ReactElement => {
  const classes = useStylesSmall();

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    props.setActive(newValue);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      className={clsx(classes.appBar, props.active === 0 && classes.noShadow)}
    >
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.active}
        onChange={handleChange}
        selectionFollowsFocus
        variant="fullWidth"
      >
        <Tab icon={<HomeIcon />} label="Home" className={classes.menuItem} />
        <Tab icon={<InfoIcon />} label="About" className={classes.menuItem} />
        <Tab
          icon={<AssignmentIcon />}
          label="Resume"
          className={classes.menuItem}
        />
        <Tab
          icon={<ImportantDevicesIcon />}
          label="Projects"
          className={classes.menuItem}
        />
      </Tabs>
    </AppBar>
  );
};
