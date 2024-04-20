/* eslint-disable max-len */

import bmwLogo from '@assets/work/BMW.webp';
import broseLogo from '@assets/work/Brose.webp';
import ecomioLogo from '@assets/work/Ecomio.webp';
import habaLogo from '@assets/work/Haba.webp';
import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

import { WorkAccordion } from './workAccordion.component';

const useStyles = makeStyles((theme: Theme) => ({
  workComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
    [theme.breakpoints.down('lg')]: {
      alignItems: 'center',
    },
  },
  workComponentItem: {
    width: '85%',

    '&:nth-child(odd)': {
      [theme.breakpoints.up('lg')]: {
        marginLeft: '15%',
      },
    },
  },
}));

export const WorkComponent = (): ReactElement => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log('CALLED');
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={classes.workComponent}>
      <div className={classes.workComponentItem}>
        <WorkAccordion
          role="Full Stack Developer"
          company="eco.mio"
          companyLink="https://ecomio.com/"
          type="Working Student (Sep 2021 - May 2022) | Full Time (Nov 2022 - Today)"
          duration={['Sep 2021 - May 2022 | Nov 2022 - Today']}
          description={[
            'Implemented a broad range of web application features such as frontend views, backend APIs, database models as well as authenication and security aspects with third party services',
            'Developed a complete Infrastructure as Code setup for all backend services using terraform',
            'Set up a Continous Integration workflow',
            'Regularly reviewed both frontend and backend code of other developers',
          ]}
          image={ecomioLogo as string}
          index={0}
          handleAccordionChange={handleAccordionChange('workAccordion0')}
          expanded={expanded === 'workAccordion0'}
        />
      </div>
      <div className={classes.workComponentItem}>
        <WorkAccordion
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
          image={bmwLogo as string}
          index={1}
          handleAccordionChange={handleAccordionChange('workAccordion1')}
          expanded={expanded === 'workAccordion1'}
        />
      </div>
      <div className={classes.workComponentItem}>
        <WorkAccordion
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
          image={broseLogo as string}
          index={2}
          handleAccordionChange={handleAccordionChange('workAccordion2')}
          expanded={expanded === 'workAccordion2'}
        />
      </div>
      <div className={classes.workComponentItem}>
        <WorkAccordion
          role="IT Intern"
          company="Haba"
          companyLink="https://www.haba-play.com/"
          type="Internship"
          duration={['Oct 2013']}
          description={[
            'Learned basic programming principles and algorithms with Java',
            'Gained first insights into the everyday professional life of a software developer',
          ]}
          image={habaLogo as string}
          index={3}
          handleAccordionChange={handleAccordionChange('workAccordion3')}
          expanded={expanded === 'workAccordion3'}
        />
      </div>
    </div>
  );
};
