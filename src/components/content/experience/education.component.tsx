/* eslint-disable quotes */
/* eslint-disable max-len */
import masterLogo from '@assets/education/Ausbildung1.webp';
import bachelorLogo from '@assets/education/Ausbildung2.webp';
import highSchoolLogo from '@assets/education/Ausbildung3.webp';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { EducationContent } from './educationContent.component';
import { ExperienceNavigation } from './experienceNavigation.component';

const useStyles = makeStyles((theme: Theme) => ({
  educationComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  educationContent: {
    width: 'calc(100% - 200px)',
    height: '100%',
    position: 'relative',
    left: 50,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 20,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'calc(100% - 75px)',
      left: 0,
      top: 15,
    },
  },
}));

export const EducationComponent = (): ReactElement => {
  const classes = useStyles();
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div className={classes.educationComponent}>
      <ExperienceNavigation
        elements={[
          { title: "Master's Degree", iconUrl: masterLogo as string },
          { title: "Bachelor's Degree", iconUrl: bachelorLogo as string },
          { title: 'High School', iconUrl: highSchoolLogo as string },
        ]}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <div className={classes.educationContent}>
        {activeElement == 0 && (
          <EducationContent
            institution="UNA | TUM | LMU"
            institutionLink="https://elite-se.informatik.uni-augsburg.de/"
            duration="Oct 2019 - Apr 2022"
            degree="Master's Degree"
            description={[
              'Elite Graduate Program geared towards the top 2 percent of students in computer science',
              'Practice oriented curriculum requiring the practical application of concepts and techniques in real industry projects',
            ]}
            subject="Software Engineering"
            GPA="1.1"
            thesis="Combined Task Allocation and Path Finding for Autonomous Guided Vehicles in a Factory Setting"
          />
        )}
        {activeElement == 1 && (
          <EducationContent
            institution="TUM"
            institutionLink="https://www.in.tum.de/en/in/for-prospective-students/bachelors-programs/informatics/"
            duration="Oct 2016 - Nov 2019"
            degree="Bachelor's Degree"
            description={[
              'Introduction to essential concepts of IT architecture, algorithms and datastructures, software engineering, database systems and operating systems',
              'Further education in basic mathematics, theoretical computer science, statistics and scientific research',
            ]}
            subject="Computer Science"
            GPA="1.7"
            thesis="Migratory User Interfaces for Tourist Trip Recommender Systems"
          />
        )}
        {activeElement == 2 && (
          <EducationContent
            institution="Gymansium Ernestinum"
            institutionLink="https://www.ernestinum-coburg.de/"
            duration="Sep 2008 - Jun 2016"
            degree="High School Degree"
            description={[
              'Graduatated from High School with a perfect grade',
              'Participated in several extracurricular activities, such as math competitions, school sport teams and the regional talent program',
            ]}
            GPA="1.0"
            highSchool
          />
        )}
      </div>
    </div>
  );
};
