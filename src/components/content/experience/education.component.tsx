/* eslint-disable quotes */
/* eslint-disable max-len */
import masterLogo from '@assets/education/Ausbildung1.webp';
import bachelorLogo from '@assets/education/Ausbildung2.webp';
import highSchoolLogo from '@assets/education/Ausbildung3.webp';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { EducationAccordion } from './educationAccordion.component';

const useStyles = makeStyles((theme: Theme) => ({
  educationComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
    [theme.breakpoints.down('lg')]: {
      alignItems: 'center',
    },
  },
  educationComponentItem: {
    width: '85%',

    '&:nth-child(odd)': {
      [theme.breakpoints.up('lg')]: {
        marginLeft: '15%',
      },
    },
  },
}));

export const EducationComponent = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log('CALLED');
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={classes.educationComponent}>
      <div className={classes.educationComponentItem}>
        <EducationAccordion
          institution="UNA | TUM | LMU"
          institutionLink="https://elite-se.informatik.uni-augsburg.de/"
          duration={['Oct 2019 - Apr 2022']}
          degree="Master's Degree"
          description={[
            'Elite Graduate Program geared towards the top 2 percent of students in computer science',
            'Practice oriented curriculum requiring the practical application of concepts and techniques in real industry projects',
          ]}
          subject="Software Engineering"
          GPA="1.1"
          thesis="Combined Task Allocation and Path Finding for Autonomous Guided Vehicles in a Factory Setting"
          image={masterLogo as string}
          index={0}
          handleAccordionChange={handleAccordionChange('educationAccordion0')}
          expanded={expanded === 'educationAccordion0'}
        />
      </div>
      <div className={classes.educationComponentItem}>
        <EducationAccordion
          institution="TUM"
          institutionLink="https://www.in.tum.de/en/in/for-prospective-students/bachelors-programs/informatics/"
          duration={['Oct 2016 - Nov 2019']}
          degree="Bachelor's Degree"
          description={[
            'Introduction to essential concepts of IT architecture, algorithms and datastructures, software engineering, database systems and operating systems',
            'Further education in basic mathematics, theoretical computer science, statistics and scientific research',
          ]}
          subject="Computer Science"
          GPA="1.7"
          thesis="Migratory User Interfaces for Tourist Trip Recommender Systems"
          image={bachelorLogo as string}
          index={1}
          handleAccordionChange={handleAccordionChange('educationAccordion1')}
          expanded={expanded === 'educationAccordion1'}
        />
      </div>
      <div className={classes.educationComponentItem}>
        <EducationAccordion
          institution="Gymansium Ernestinum"
          institutionLink="https://www.ernestinum-coburg.de/"
          duration={['Sep 2008 - Jun 2016']}
          degree="High School Degree"
          description={[
            'Graduatated from High School with a perfect grade',
            'Participated in several extracurricular activities, such as math competitions, school sport teams and the regional talent program',
          ]}
          GPA="1.0"
          highSchool
          image={highSchoolLogo as string}
          index={2}
          handleAccordionChange={handleAccordionChange('educationAccordion2')}
          expanded={expanded === 'educationAccordion2'}
        />
      </div>
    </div>
  );
};
