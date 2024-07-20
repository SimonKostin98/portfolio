/* eslint-disable max-len */
/* eslint-disable quotes */

import bmwLogo from '@assets/work/BMW.webp';
import check24Logo from '@assets/work/Check24.webp';
import ecomioLogo from '@assets/work/Ecomio.webp';

interface IWorkDetails {
  role: string;
  company: string;
  companyLink: string;
  type: string;
  duration: string[];
  description: string[];
  image: string;
}

export const workDetails: IWorkDetails[] = [
  {
    role: 'Full Stack Developer',
    company: 'CHECK24',
    companyLink: 'https://www.check24.de/unternehmen/ueber-uns/',
    type: 'Full Time',
    duration: ['Aug 2024 - Today'],
    description: ['TBD'],
    image: check24Logo as string,
  },
  {
    role: 'Full Stack Developer',
    company: 'eco.mio',
    companyLink: 'https://ecomio.com/',
    type: 'Working Student | Full Time',
    duration: ['Sep 2021 - Apr 2022 | Nov 2022 - Jun 2024'],
    description: [
      'Implemented a broad range of web application features such as frontend views, backend APIs, database models as well as authenication and security aspects with third party services',
      'Developed a complete Infrastructure as Code setup for all backend services using terraform',
      'Set up a Continous Integration workflow',
      'Regularly reviewed both frontend and backend code of other developers',
    ],
    image: ecomioLogo as string,
  },
  {
    role: 'Full Stack Developer',
    company: 'BMW',
    companyLink: 'https://www.bmwgroup.com/',
    type: 'Internship',
    duration: ['Aug 2020 - Okt 2020'],
    description: [
      'Carried out the analysis, design, implementation and launch of a generic anomaly detection pipeline for vehicle streaming data',
      'Developed a full stack web application using Kotlin, React and the AWS SDK',
      'Worked in an agile team of 5 working students and collaborated with engineers and developers from various departments ',
    ],
    image: bmwLogo as string,
  },
];
