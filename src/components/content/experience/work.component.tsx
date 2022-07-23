/* eslint-disable max-len */
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { ExperienceNavigation } from './experienceNavigation.component';
import { WorkContent } from './workContent.component';

const useStyles = makeStyles((theme: Theme) => ({
  workComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  workContent: {
    width: 'calc(100% - 200px)',
    height: '100%',
    position: 'relative',
    left: '50px',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 20,
  },
}));

export const WorkComponent = (): ReactElement => {
  const classes = useStyles();
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div className={classes.workComponent}>
      <ExperienceNavigation
        elements={['eco.mio', 'BMW', 'Brose', 'Haba']}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <div className={classes.workContent}>
        {activeElement == 0 && (
          <WorkContent
            role="Full Stack Developer"
            company="eco.mio"
            companyLink="https://ecomio.com/"
            type="Working Student"
            duration={['Sep 2021 - May 2022']}
            description={[
              'Implemented a broad range of web application features such as frontend views, backend APIs, database models as well as authenication and security aspects with third party services',
              'Developed a complete Infrastructure as Code setup for all backend services using terraform',
              'Set up a Continous Integration workflow',
              'Regularly reviewed both frontend and backend code of other developers',
            ]}
          />
        )}
        {activeElement == 1 && (
          <WorkContent
            role="Full Stack Developer"
            company="BMW"
            companyLink="https://www.bmwgroup.com/"
            type="Internship"
            duration={['Aug 2020 - Oct 2020']}
            description={[
              'Carried out the analysis, design, implementation and launch of a generic anomaly detection pipeline for vehicle streaming data',
              'Developed a full stack web application using Kotlin, React and the AWS SDK',
              'Worked in an agile team of 5 working students and collaborated with engineers and developers from various departments ',
            ]}
          />
        )}
        {activeElement == 2 && (
          <WorkContent
            role="Front End Developer"
            company="Brose"
            companyLink="https://www.brose.com/"
            type="Vacation Work"
            duration={[
              'Aug 2016 - Oct 2016 | Mar 2017 - Apr 2017 | Aug 2017 - Sep 2017',
              'Mar 2018 - Apr 2018 | Sep 2018 - Oct 2018 | Mar 2019 - Apr 2019',
            ]}
            description={[
              'Developed a web interface for an inhouse vehicle database',
              'Worked with established technologies such as HTML, CSS and Javascript',
              'Cooperated with specialists from various fields of vehicle development',
            ]}
          />
        )}
        {activeElement == 3 && (
          <WorkContent
            role="IT Intern"
            company="Haba"
            companyLink="https://www.haba-play.com/"
            type="Internship"
            duration={['Oct 2013']}
            description={[
              'Learned basic programming principles and algorithms with Java',
              'Gained first insights into the everyday professional life of a software developer',
            ]}
          />
        )}
      </div>
    </div>
  );
};
