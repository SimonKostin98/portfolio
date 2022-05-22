import logo from '@assets/images/Logo.png';
import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface INavigationBarProps {
  active: number;
  setActive: (newValue: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    padding: '0 20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicator: {
    display: 'none',
  },
  noShadow: {
    boxShadow: 'none',
  },
  logoWrapper: {
    backgroundImage: `url(${logo as string})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 35,
    width: 80,
  },
  menuItem: {
    fontWeight: 'bold',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'medium',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
    },
  },
}));

const useStylesSmall = makeStyles(() => ({
  appBar: {},
  noShadow: {
    boxShadow: 'none',
  },
  menuItem: { color: 'white' },
}));

const useStylesResume = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.background.default}`,
  },

  menuItem: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 'medium',
  },
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
      <div className={classes.logoWrapper} />
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.active}
        onChange={handleChange}
        selectionFollowsFocus
        classes={{ indicator: classes.indicator }}
      >
        <Tab label="Home" disableRipple className={classes.menuItem} />
        <Tab label="About" disableRipple className={classes.menuItem} />
        <Tab label="Resume" disableRipple className={classes.menuItem} />
        <Tab label="Projects" disableRipple className={classes.menuItem} />
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

export const NavigationBarResume = (
  props: INavigationBarProps,
): ReactElement => {
  const classes = useStylesResume();

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    props.setActive(newValue);
  };
  return (
    <AppBar position="sticky" color="transparent" className={classes.appBar}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.active}
        onChange={handleChange}
        selectionFollowsFocus
        variant="fullWidth"
        centered
      >
        <Tab icon={<WorkIcon />} disableRipple className={classes.menuItem} />
        <Tab icon={<SchoolIcon />} disableRipple className={classes.menuItem} />
        <Tab icon={<CodeIcon />} disableRipple className={classes.menuItem} />
        <Tab icon={<BuildIcon />} disableRipple className={classes.menuItem} />
        <Tab icon={<AddBoxIcon />} disableRipple className={classes.menuItem} />
      </Tabs>
    </AppBar>
  );
};
