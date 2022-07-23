import { EducationComponent } from '@components/content/experience/education.component';
import { WorkComponent } from '@components/content/experience/work.component';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  experienceView: {
    height: '100%',
    width: '100%',
    padding: '2vh 2.5vw 2vh 1vw',
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  experienceContent: {
    height: '92.5%',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: 25,
    boxShadow: theme.custom.cardShadow,
    WebkitBoxShadow: theme.custom.cardShadow,
    display: 'flex',
    gap: '5%',
    padding: '2%',
  },
  half: {
    height: '100%',
    width: '50%',
  },
  halfHeading: {
    height: '10%',
    width: '100%',
    fontSize: 'x-large',
    fontWeight: 'bolder',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 200,
  },
  halfContent: {
    width: '100%',
    height: '90%',
  },
}));

export const ExperienceView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.experienceView} id="Experience">
      <div className={classes.heading}>My Experience</div>
      <div className={classes.experienceContent}>
        <div className={classes.half}>
          <div className={classes.halfHeading}>Work</div>
          <div className={classes.halfContent}>
            <WorkComponent />
          </div>
        </div>
        <div className={classes.half}>
          <div className={classes.halfHeading}>Education</div>
          <div className={classes.halfContent}>
            <EducationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
