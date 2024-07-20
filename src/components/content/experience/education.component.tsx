import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { EducationAccordion } from './educationAccordion.component';
import { educationDetails } from './educationDetails';

const useStyles = makeStyles((theme: Theme) => ({
  educationComponent: {
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
  educationComponentItem: {
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

export const EducationComponent = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(
    'educationAccordion0',
  );

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={classes.educationComponent}>
      {educationDetails.map((item, index) => (
        <div
          className={classes.educationComponentItem}
          key={`educationAccordion${index}`}
        >
          <EducationAccordion
            {...item}
            index={index}
            handleAccordionChange={handleAccordionChange(
              `educationAccordion${index}`,
            )}
            expanded={expanded === `educationAccordion${index}`}
          />
        </div>
      ))}
    </div>
  );
};
