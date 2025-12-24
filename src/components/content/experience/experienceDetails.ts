import masterLogo from '@assets/education/Ausbildung1.webp';
import bachelorLogo from '@assets/education/Ausbildung2.webp';
import check24Logo from '@assets/work/Check24.webp';
import ecomioLogo from '@assets/work/Ecomio.webp';

interface IBaseExperience {
  institution: string;
  institutionLink: string;
  duration: string[];
  image: string;
  description: string[];
}

interface IWorkExperience extends IBaseExperience {
  type: 'work';
  role: string;
}

interface IEducationExperience extends IBaseExperience {
  type: 'education';
  degree: string;
  subject: string;
  GPA: string;
  thesis: string;
}

export type ExperienceItem = IWorkExperience | IEducationExperience;

export const experienceDetails: ExperienceItem[] = [
  {
    type: 'work',
    role: 'Sr. Software Developer',
    institution: 'CHECK24',
    institutionLink: 'https://www.check24.de/unternehmen/ueber-uns/',
    duration: ['Aug 2024 - Today'],
    description: [
      'Architected and developed a payment data consolidation platform integrating PayPal, Stripe, and other Payment Service Provider APIs',
      'Built a webhook-based system for real-time bank statement processing',
      'Led development of an employee expense management application',
      'Established project foundations including CI/CD pipelines, Infrastructure as Code, and authentication systems',
      'Drive technical conceptualization in collaboration with Product Management and cross-functional stakeholders',
    ],
    image: check24Logo as string,
  },
  {
    type: 'work',
    role: 'Full Stack Developer',
    institution: 'eco.mio',
    institutionLink: 'https://ecomio.com/',
    duration: ['Sep 2021 - Apr 2022 | Nov 2022 - Jun 2024'],
    description: [
      'Built and maintained a React frontend, Django REST backend, and PostgreSQL database',
      'Developed a Chrome browser extension in TypeScript for seamless travel booking integration',
      'Designed and implemented authentication flows with third-party identity providers',
      'Established cloud infrastructure using Terraform (IaC) and set up CI/CD pipelines',
    ],
    image: ecomioLogo as string,
  },
  {
    type: 'education',
    degree: "Master's Degree",
    subject: 'Software Engineering',
    institution: 'UNA | TUM | LMU',
    institutionLink: 'https://elite-se.informatik.uni-augsburg.de/',
    duration: ['Oct 2019 - Apr 2022'],
    description: [
      'Elite Graduate Program geared towards the top 2 percent of students in computer science',
      'Practice oriented curriculum requiring the practical application of concepts and techniques in real industry projects',
    ],
    GPA: '1.1',
    thesis:
      'Combined Task Allocation and Path Finding for Autonomous Guided Vehicles in a Factory Setting',
    image: masterLogo as string,
  },
  {
    type: 'education',
    degree: "Bachelor's Degree",
    subject: 'Computer Science',
    institution: 'TUM',
    institutionLink:
      'https://www.in.tum.de/en/in/for-prospective-students/bachelors-programs/informatics/',
    duration: ['Oct 2016 - Nov 2019'],
    description: [
      'Introduction to essential concepts of IT architecture, algorithms and data structures, software engineering, database systems and operating systems',
      'Further education in basic mathematics, theoretical computer science, statistics and scientific research',
    ],
    GPA: '1.7',
    thesis: 'Migratory User Interfaces for Tourist Trip Recommender Systems',
    image: bachelorLogo as string,
  },
];
