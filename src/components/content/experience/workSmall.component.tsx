import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { ExperienceNavigation } from './experienceNavigation.component';
import { workDetails } from './workDetails';

const useStyles = makeStyles((theme: Theme) => ({
  workSmallComponent: {
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
  workDetails: {},
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
  companyLink: {
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

export const WorkSmallComponent = (): ReactElement => {
  const classes = useStyles();
  const [activeElement, setActiveElement] = useState(0);

  const details = workDetails.map((item, index) => (
    <div className={classes.workDetails} key={`workDetails${index}`}>
      <div className={classes.heading}>
        {item.role}
        <span className={classes.highlightedText}>
          @{' '}
          <a
            className={classes.companyLink}
            href={item.companyLink}
            target="_blank"
            rel="noreferrer"
          >
            {item.company}
          </a>
        </span>
      </div>

      <div className={classes.duration}>
        {item.duration.map((elem, durationIndex) => (
          <div key={`workDuration${durationIndex}`}>{elem}</div>
        ))}
      </div>

      <ul className={classes.infoList}>
        <li className={classes.infoItem}>
          <b>Type:</b> {item.type}
        </li>
        {item.description.map((item, itemIndex) => (
          <li
            key={`workDescription_${index}_${itemIndex}`}
            className={classes.infoItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className={classes.workSmallComponent}>
      <div>
        <ExperienceNavigation
          icons={workDetails.map((item) => item.image)}
          activeElement={activeElement}
          setActiveElement={setActiveElement}
        />
      </div>
      <div className={classes.contentWrapper}>{details[activeElement]}</div>
    </div>
  );
};
