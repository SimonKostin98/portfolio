import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { WorkAccordion } from './workAccordion.component';
import { workDetails } from './workDetails';

const useStyles = makeStyles((theme: Theme) => ({
  workComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,

    [theme.breakpoints.between('lg', 'xl')]: {
      paddingLeft: '7.5%',
      paddingRight: '7.5%',
    },

    [theme.breakpoints.down('lg')]: {
      gap: 20,
    },
  },
  workComponentItem: {
    width: '85%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },

    [theme.breakpoints.between('sm', 'lg')]: {
      width: '90%',
      margin: 'auto',
    },

    '&:nth-child(odd)': {
      [theme.breakpoints.up('lg')]: {
        marginLeft: '15%',
      },
    },
  },
}));

export const WorkComponent = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>('workAccordion0');

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={classes.workComponent}>
      {workDetails.map((item, index) => (
        <div
          className={classes.workComponentItem}
          key={`workAccordion${index}`}
        >
          <WorkAccordion
            {...item}
            index={index}
            handleAccordionChange={handleAccordionChange(
              `workAccordion${index}`,
            )}
            expanded={expanded === `workAccordion${index}`}
          />
        </div>
      ))}
    </div>
  );
};
