import { Tab, Tabs } from '@mui/material';
import React, { ReactElement } from 'react';

interface IExperienceNavBarProps {
  navigationValue: number;
  setNavigationValue: (newValue: number) => void;
}

export const ExperienceNavBar = (
  props: IExperienceNavBarProps,
): ReactElement => {
  const { navigationValue, setNavigationValue } = props;
  return (
    <Tabs
      value={navigationValue}
      onChange={(_event: React.SyntheticEvent, newValue: number) =>
        setNavigationValue(newValue)
      }
      variant="fullWidth"
    >
      <Tab label="Work" />
      <Tab label="Education" />
    </Tabs>
  );
};
