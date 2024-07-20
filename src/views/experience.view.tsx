import { EducationComponent } from '@components/content/experience/education.component';
import { EducationSmallComponent } from '@components/content/experience/educationSmall.components';
import { ExperienceNavBar } from '@components/content/experience/experienceNavBar.component';
import { WorkComponent } from '@components/content/experience/work.component';
import { WorkSmallComponent } from '@components/content/experience/workSmall.component';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  experienceView: {
    height: '100%',
    width: '100%',
    padding: '2vh 2vw 2vh 2vw',

    [theme.breakpoints.down('md')]: {
      height: `calc(100% - ${theme.custom.navigationHeight}px)`,
      padding: '2vh 2.5vw 2vh 2.5vw',
    },
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      fontSize: 'x-large',
    },
  },
  experienceContent: {
    height: '92.5%',
    width: '100%',
  },

  experienceContentBigWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    gap: '5%',

    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
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
  },
  halfContent: {
    width: '100%',
    height: '90%',
  },

  experienceContentSmallAndMediumWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },

  experienceContentMedium: {
    padding: '3%',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  experienceContentSmall: {
    width: '100%',
    flex: 1,
    paddingTop: '3%',

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export const ExperienceView = (): ReactElement => {
  const classes = useStyles();
  const [navigationValue, setNavigationValue] = useState(0);
  return (
    <div className={classes.experienceView} id="Experience">
      <div className={classes.heading}>My Experience</div>
      <div className={classes.experienceContent}>
        <div className={classes.experienceContentBigWrapper}>
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

        <div className={classes.experienceContentSmallAndMediumWrapper}>
          <ExperienceNavBar
            navigationValue={navigationValue}
            setNavigationValue={setNavigationValue}
          />
          <div className={classes.experienceContentMedium}>
            {navigationValue == 0 && <WorkComponent />}
            {navigationValue == 1 && <EducationComponent />}
          </div>
          <div className={classes.experienceContentSmall}>
            {navigationValue == 0 && <WorkSmallComponent />}
            {navigationValue == 1 && <EducationSmallComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};
