import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { educationDetails } from './educationDetails';
import { ExperienceNavigation } from './experienceNavigation.component';

const useStyles = makeStyles((theme: Theme) => ({
  educationSmallComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    boxShadow: theme.custom.cardShadow,
    WebkitBoxShadow: theme.custom.cardShadow,
    borderRadius: 25,
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    height: '100%',

    padding: 15,
  },
  educationDetails: {},
  heading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '.9rem',
  },
  highlightedText: {
    marginLeft: 5,
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
  duration: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '.8rem',
    color: 'rgba(190, 190, 190, 0.7)',
  },

  infoList: {
    color: 'rgba(240, 240, 240, 0.8)',
    fontSize: '.8rem',
    listStyle: 'none',
    margin: '20px 0',
    paddingLeft: 10,
  },
  infoItem: {
    paddingLeft: 20,
    marginBottom: 12,
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

export const EducationSmallComponent = (): ReactElement => {
  const classes = useStyles();
  const [activeElement, setActiveElement] = useState(0);

  const details = educationDetails.map((item, index) => (
    <div className={classes.educationDetails} key={`workDetails${index}`}>
      <div className={classes.heading}>
        {item.degree}
        <span className={classes.highlightedText}>
          @{' '}
          <a
            className={classes.institutionLink}
            href={item.institutionLink}
            target="_blank"
            rel="noreferrer"
          >
            {item.institution}
          </a>
        </span>
      </div>

      <div className={classes.duration}>
        {item.duration.map((elem, durationIndex) => (
          <div key={`educationDuration${durationIndex}`}>{elem}</div>
        ))}
      </div>

      <ul className={classes.infoList}>
        {item.subject && (
          <li className={classes.infoItem}>
            <b>Subject:</b> {item.subject}
          </li>
        )}
        <li className={classes.infoItem}>
          <b>Final Grade:</b> {item.GPA}
        </li>
        {item.thesis && (
          <li className={classes.infoItem}>
            <b>Thesis:</b> {item.thesis}
          </li>
        )}
        {item.description.map((item, itemIndex) => (
          <li
            key={`educationDescription_${index}_${itemIndex}`}
            className={classes.infoItem}
          >
            {item}
          </li>
        ))}
        {item.highSchool && (
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
  ));

  return (
    <div className={classes.educationSmallComponent}>
      <div>
        <ExperienceNavigation
          icons={educationDetails.map((item) => item.image)}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
        />
      </div>
      <div className={classes.contentWrapper}>{details[activeElement]}</div>
    </div>
  );
};
