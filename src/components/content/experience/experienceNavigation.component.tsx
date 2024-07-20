import { Tab, Tabs, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface IExperienceNavigationProps {
  icons: string[];
  activeElement: number;
  setActiveElement: (newElement: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  experienceNavigation: {
    width: '100%',
    height: '100%',
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 60,
  },

  experienceNavigationTab: {
    marginBottom: 30,
    padding: '8px 12px 8px 8px',
    width: 60,
    minWidth: 60,
  },

  experienceNavigationElementImage: {
    backgroundSize: '37px 37px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
    backgroundColor: 'white',
    width: 40,
    height: 40,
  },
}));

export const ExperienceNavigation = (
  props: IExperienceNavigationProps,
): ReactElement => {
  const { icons, activeElement, setActiveElement } = props;
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveElement(newValue);
  };

  return (
    <Tabs
      className={classes.experienceNavigation}
      orientation="vertical"
      value={activeElement}
      onChange={handleChange}
    >
      {icons.map((icon, index) => (
        <Tab
          className={classes.experienceNavigationTab}
          key={`experienceNavigationItem${index}`}
          label={
            <div
              className={classes.experienceNavigationElementImage}
              style={{ backgroundImage: `url(${icon})` }}
            />
          }
        />
      ))}
    </Tabs>
  );
};
