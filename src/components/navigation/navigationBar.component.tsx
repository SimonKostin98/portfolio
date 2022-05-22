import logo from '@assets/images/Logo.png';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { AppBar, Tab, Tabs, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
    [theme.breakpoints.down('md')]: {
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
