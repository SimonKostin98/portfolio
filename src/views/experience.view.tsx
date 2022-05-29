import { EducationComponent } from '@components/content/experience/education.component';
import { WorkComponent } from '@components/content/experience/work.component';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  resumeComponent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    width: '45%',
    boxShadow: theme.custom.cardShadow,
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    WebkitBoxShadow: theme.custom.cardShadow,
    overflow: 'auto',
    transition: 'transform .15s linear',

    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  heading: {
    padding: '10px 15px',
    height: '5%',
    width: '100%',
    fontSize: 'x-large',
    fontWeight: 'bold',
  },
  content: {
    height: '92.5%',
    width: '100%',
  },
}));

export const ExperienceView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.resumeComponent} id="Experience">
      <div className={classes.card}>
        <div className={classes.heading}>Work Experience</div>
        <div className={classes.content}>
          <WorkComponent />
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.heading}>Education</div>
        <div className={classes.content}>
          <EducationComponent />
        </div>
      </div>
    </div>
  );
};
