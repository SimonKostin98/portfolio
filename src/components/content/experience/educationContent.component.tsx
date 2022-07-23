import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

interface IEducationContentProps {
  subject?: string;
  thesis?: string;
  GPA: string;
  institution: string;
  degree: string;
  institutionLink: string;
  duration: string;
  description: string[];
  highSchool?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  educationContent: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  educationContentHeading: {
    width: '100%',
    height: '7.5%',
    fontSize: 'x-large',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  duration: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'large',
    color: 'rgba(190, 190, 190, 0.7)',
    marginBottom: 40,
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
  infoList: {
    color: 'rgba(240, 240, 240, 0.8)',
    fontSize: 'large',
    listStyle: 'none',
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
}));

export const EducationContent = (
  props: IEducationContentProps,
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
    highSchool,
  } = props;
  return (
    <div className={classes.educationContent}>
      <div className={classes.educationContentHeading}>
        {degree}
        <span className={classes.highlightedText}>
          @{' '}
          <a
            className={classes.institutionLink}
            href={institutionLink}
            target="_blank"
            rel="noreferrer"
          >
            {institution}
          </a>
        </span>
      </div>
      <div className={classes.duration}>{duration}</div>
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
        {description.map((item, index) => (
          <li key={`workDescription${index}`} className={classes.infoItem}>
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
    </div>
  );
};
