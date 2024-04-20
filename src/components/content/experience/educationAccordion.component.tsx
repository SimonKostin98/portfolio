import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

import { ExperienceAccordion } from './experienceAccordion.component';

interface IEducationAccordionProps {
  subject?: string;
  thesis?: string;
  GPA: string;
  institution: string;
  degree: string;
  institutionLink: string;
  duration: string[];
  description: string[];
  image: string;
  highSchool?: boolean;
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
    fontSize: 'max(calc(1vh + 1vw), large)',
    listStyle: 'none',

    [theme.breakpoints.down('md')]: {
      fontSize: 'calc(.9vh + .9vw)',
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
  },
  highlightedText: {
    marginLeft: 5,
    marginRight: 5,
    color: theme.palette.primary.light,
  },
  institutionLink: {
    position: 'relative',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.primary.light,
    backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.light})`,
    backgroundSize: '0% 0.1em',
    backgroundPositionY: '100%',
    backgroundPositionX: '0%',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.2s ease',

    '&:hover, &:active, &:focus': {
      backgroundSize: '100% 0.1em',
      color: theme.palette.primary.light,
    },
  },
}));

export const EducationAccordion = (
  props: IEducationAccordionProps,
): ReactElement => {
  const classes = useStyles();
  const {
    institution,
    institutionLink,
    degree,
    description,
    duration,
    subject,
    GPA,
    thesis,
    image,
    highSchool,
    index,
    expanded,
    handleAccordionChange,
  } = props;
  const details = (
    <ul className={classes.infoList}>
      {subject && (
        <li className={classes.infoItem}>
          <b>Subject:</b> {subject}
        </li>
      )}
      <li className={classes.infoItem}>
        <b>Final Grade:</b> {GPA}
      </li>
      {thesis && (
        <li className={classes.infoItem}>
          <b>Thesis:</b> {thesis}
        </li>
      )}
      {description.map((item, itemIndex) => (
        <li
          key={`educationDescription_${index}_${itemIndex}`}
          className={classes.infoItem}
        >
          {item}
        </li>
      ))}
      {highSchool && (
        <li className={classes.infoItem}>
          Received Admission to the{' '}
          <span className={classes.highlightedText}>
            <a
              className={classes.institutionLink}
              href={
                'https://www.elitenetzwerk.bayern.de/en/home/funding-programs/max-weber-program'
              }
              target="_blank"
              rel="noreferrer"
            >
              Max Weber Program
            </a>
          </span>{' '}
          for gifted and talented students at Bavarian tertiary education
          institutions
        </li>
      )}
    </ul>
  );

  return (
    <ExperienceAccordion
      institution={institution}
      institutionLink={institutionLink}
      cause={degree}
      duration={duration}
      image={image}
      details={details}
      expanded={expanded}
      handleAccordionChange={handleAccordionChange}
    />
  );
};
