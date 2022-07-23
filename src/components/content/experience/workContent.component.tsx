import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

interface IWorkContentProps {
  role: string;
  company: string;
  companyLink: string;
  duration: string[];
  type: string;
  description: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  workContent: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  workContentHeading: {
    width: '100%',
    height: '7.5%',
    fontSize: 'x-large',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightedText: {
    marginLeft: 5,
    color: theme.palette.primary.light,
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
}));

export const WorkContent = (props: IWorkContentProps): ReactElement => {
  const classes = useStyles();
  const { role, company, companyLink, duration, type, description } = props;
  return (
    <div className={classes.workContent}>
      <div className={classes.workContentHeading}>
        {role}
        <span className={classes.highlightedText}>
          @{' '}
          <a
            className={classes.companyLink}
            href={companyLink}
            target="_blank"
            rel="noreferrer"
          >
            {company}
          </a>
        </span>
      </div>
      <div className={classes.duration}>
        {duration.map((elem, index) => (
          <div key={`workDuration${index}`}>{elem}</div>
        ))}
      </div>

      <ul className={classes.infoList}>
        <li className={classes.infoItem}>
          <b>Type:</b> {type}
        </li>
        {description.map((item, index) => (
          <li key={`workDescription${index}`} className={classes.infoItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
