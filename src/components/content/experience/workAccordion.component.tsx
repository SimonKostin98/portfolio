import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

import { ExperienceAccordion } from './experienceAccordion.component';

interface IWorkContentProps {
  role: string;
  company: string;
  companyLink: string;
  duration: string[];
  type: string;
  description: string[];
  image: string;
  index: number;
  expanded: boolean;
  handleAccordionChange: (
    event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  infoList: {
    color: 'rgba(240, 240, 240, 0.8)',
    fontSize: 'large',
    listStyle: 'none',
    margin: 0,

    [theme.breakpoints.down('xl')]: {
      fontSize: 'small',
      paddingLeft: 20,
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
    },
  },
  infoItem: {
    paddingLeft: 30,
    marginBottom: 20,
    position: 'relative',
    '&::before': {
      content: '"▹"',
      fontWeight: 'bold',
      color: theme.palette.primary.light,
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'absolute',
      left: 0,
      top: -2,
    },

    [theme.breakpoints.down('lg')]: {
      paddingLeft: 20,
      marginBottom: 12,
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      marginBottom: 10,
    },
  },
}));

export const WorkAccordion = (props: IWorkContentProps): ReactElement => {
  const classes = useStyles();
  const {
    role,
    company,
    companyLink,
    duration,
    type,
    description,
    image,
    index,
    expanded,
    handleAccordionChange,
  } = props;
  const details = (
    <ul className={classes.infoList}>
      <li className={classes.infoItem}>
        <b>Type:</b> {type}
      </li>
      {description.map((item, itemIndex) => (
        <li
          key={`workDescription_${index}_${itemIndex}`}
          className={classes.infoItem}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <ExperienceAccordion
      institution={company}
      institutionLink={companyLink}
      cause={role}
      duration={duration}
      image={image}
      details={details}
      expanded={expanded}
      handleAccordionChange={handleAccordionChange}
    />
  );
};
