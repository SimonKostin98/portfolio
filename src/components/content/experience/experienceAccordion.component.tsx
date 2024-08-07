import { ExpandMoreRounded } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

interface IExperienceAccordionProps {
  institution: string;
  institutionLink: string;
  cause: string;
  duration: string[];
  image: string;
  details: ReactElement;
  expanded: boolean;
  handleAccordionChange: (
    event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  experienceAccordion: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: '25px !important',
    boxShadow: theme.custom.cardShadow,
    WebkitBoxShadow: theme.custom.cardShadow,

    [theme.breakpoints.up('xl')]: {
      padding: 10,
    },

    '&:before': {
      display: 'none',
    },
  },
  experienceAccordionSummary: {
    display: 'flex',
    alignItems: 'center',
  },
  experienceAccordionSummaryImage: {
    backgroundColor: 'white',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '45px 45px',
    borderRadius: '50%',
    width: 50,
    height: 50,

    [theme.breakpoints.up('xl')]: {
      height: 80,
      width: 80,
      backgroundSize: '75px 75px',
    },
  },
  experienceAccordionSummaryText: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  experienceAccordionSummaryHeading: {
    fontWeight: 'bold',
    fontSize: 'x-large',
    [theme.breakpoints.down('xl')]: {
      fontSize: 'large',
    },
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
    fontSize: 'calc(.6vh + .5vw)',
    color: 'rgba(190, 190, 190, 0.7)',
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

export const ExperienceAccordion = (
  props: IExperienceAccordionProps,
): ReactElement => {
  const classes = useStyles();
  const {
    institution,
    institutionLink,
    cause,
    duration,
    image,
    details,
    expanded,
    handleAccordionChange,
  } = props;
  return (
    <Accordion
      className={classes.experienceAccordion}
      disableGutters
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        classes={{ content: classes.experienceAccordionSummary }}
        expandIcon={<ExpandMoreRounded />}
      >
        <div
          className={classes.experienceAccordionSummaryImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={classes.experienceAccordionSummaryText}>
          <div className={classes.experienceAccordionSummaryHeading}>
            {cause}
            <span className={classes.highlightedText}>
              @{' '}
              <a
                className={classes.companyLink}
                href={institutionLink}
                target="_blank"
                rel="noreferrer"
              >
                {institution}
              </a>
            </span>
          </div>
          <div className={classes.duration}>
            {duration.map((elem, index) => (
              <div key={`workDuration${index}`}>{elem}</div>
            ))}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};
