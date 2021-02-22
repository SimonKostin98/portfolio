import logoLight from '@assets/images/logoLight.png';
import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface INavigationBarProps {
  toggleDarkMode: () => void;
  active: number;
  setActive: (newValue: number) => void;
}

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    padding: '10px 20px 0 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 50,
  },
  logoWrapper: {
    height: 50,
  },
  menuItem: {
    fontSize: 'calc(0.5vh + 1vw)',
    fontWeight: 'bold',
    color: 'white',
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
    <AppBar position="sticky" color="transparent" className={classes.appBar}>
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
