import CSSIcon from '@assets/programming/CSS.svg';
import HTMLIcon from '@assets/programming/HTML.svg';
import KotlinIcon from '@assets/programming/Kotlin.svg';
import PythonIcon from '@assets/programming/Python.svg';
import SASSIcon from '@assets/programming/SASS.svg';
import TSIcon from '@assets/programming/TS.svg';
import BootstrapIcon from '@assets/tools/bootstrap.svg';
import DjangoIcon from '@assets/tools/django.svg';
import DockerIcon from '@assets/tools/docker.svg';
import FlaskIcon from '@assets/tools/flask.webp';
import GitIcon from '@assets/tools/git.svg';
import MUIIcon from '@assets/tools/materialUI.svg';
import MongoIcon from '@assets/tools/mongodb.svg';
import NodeIcon from '@assets/tools/node.svg';
import PostgresIcon from '@assets/tools/postgresql.svg';
import ReactIcon from '@assets/tools/react.svg';
import { Theme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TagSphere from '@src/components/content/about/tagSphere.component';
import { TextIconToggle } from '@src/components/content/about/textIconToggle.component';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface IAboutViewProps {
  goToContact: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  aboutView: {
    height: '100%',
    width: '100%',
    padding: '2vh 2.5vw 2vh 1vw',

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
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
  aboutContent: {
    height: '92.5%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 2.5vw 30px 2.5vw',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: 25,
    boxShadow: theme.custom.cardShadow,
    WebkitBoxShadow: theme.custom.cardShadow,
    gap: '5vw',

    [theme.breakpoints.down('xl')]: {
      flexDirection: 'column',
      gap: 20,
    },
  },
  aboutInfo: {
    fontSize: 'calc(1.25vh + .75vw)',
  },
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  wavingHand: {
    animation: '$wave 2.5s',
    animationIterationCount: 'infinite',
    transformOrigin: '70% 70%',
    display: 'inline-block',
  },
  '@keyframes wave': {
    '0%': { transform: 'rotate( 0.0deg)' },
    '10%': { transform: 'rotate(14.0deg)' },
    '20%': { transform: 'rotate(-8.0deg)' },
    '30%': { transform: 'rotate(14.0deg)' },
    '40%': { transform: 'rotate(-4.0deg)' },
    '50%': { transform: 'rotate(10.0deg)' },
    '60%': { transform: 'rotate( 0.0deg)' },
    '100%': { transform: 'rotate( 0.0deg)' },
  },
  nameHeading: {
    fontSize: 'calc(1.5vh + 1.5vw)',
    marginBottom: 20,
  },
  aboutWordCloud: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'end',
    fontSize: 'calc(.7vh + .8vw)',
    display: 'none',
  },
  aboutWordCloudBig: {
    width: 650,
    [theme.breakpoints.up('xl')]: {
      display: 'flex',
    },
  },
  aboutWordCloudMedium: {
    width: 500,
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'flex',
      alignSelf: 'inherit',
    },
  },

  technologySection: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      gap: 5,
    },
  },

  technologyTitle: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    alignSelf: 'center',
    textDecoration: 'underline',
    fontSize: 'large',
  },

  technologyHeading: {
    fontWeight: 500,
  },

  technologyList: {
    width: '100%',
    display: 'flex',
    gap: 10,
    padding: 10,
  },

  technologyIcon: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      width: 20,
      height: 20,
    },
  },
}));

export const AboutView = (props: IAboutViewProps): ReactElement => {
  const classes = useStyles();
  const { goToContact } = props;

  const texts = [
    <TextIconToggle text="HTML" iconUrl={HTMLIcon as string} key={0} />,
    <TextIconToggle text="CSS" iconUrl={CSSIcon as string} key={1} />,
    <TextIconToggle text="React" iconUrl={ReactIcon as string} key={2} />,
    <TextIconToggle text="MaterialUI" iconUrl={MUIIcon as string} key={3} />,
    <TextIconToggle
      text="Bootstrap"
      iconUrl={BootstrapIcon as string}
      key={4}
    />,
    <TextIconToggle text="Django" iconUrl={DjangoIcon as string} key={5} />,
    <TextIconToggle text="Flask" iconUrl={FlaskIcon as string} key={6} />,
    <TextIconToggle text="Node" iconUrl={NodeIcon as string} key={7} />,
    <TextIconToggle text="Sass" iconUrl={SASSIcon as string} key={8} />,
    <TextIconToggle
      text="PostgreSQL"
      iconUrl={PostgresIcon as string}
      key={9}
    />,
    <TextIconToggle text="mongoDB" iconUrl={MongoIcon as string} key={10} />,
    <TextIconToggle text="Docker" iconUrl={DockerIcon as string} key={11} />,
    <TextIconToggle text="Python" iconUrl={PythonIcon as string} key={12} />,
    <TextIconToggle text="Typescript" iconUrl={TSIcon as string} key={13} />,
    <TextIconToggle text="Git" iconUrl={GitIcon as string} key={14} />,
    <TextIconToggle text="Kotlin" iconUrl={KotlinIcon as string} key={15} />,
  ];

  const frontendTechnologies = [
    { text: 'React', icon: ReactIcon as string },
    { text: 'HTML', icon: HTMLIcon as string },
    { text: 'CSS', icon: CSSIcon as string },
    { text: 'SASS', icon: SASSIcon as string },
    { text: 'MaterialUI', icon: MUIIcon as string },
    { text: 'Bootstrap', icon: BootstrapIcon as string },
  ];

  const backendTechnologies = [
    { text: 'Typescript', icon: TSIcon as string },
    { text: 'Python', icon: PythonIcon as string },
    { text: 'Kotlin', icon: KotlinIcon as string },
    { text: 'Node', icon: NodeIcon as string },
    { text: 'Django', icon: DjangoIcon as string },
    { text: 'Flask', icon: FlaskIcon as string },
    { text: 'Docker', icon: DockerIcon as string },
  ];

  const databaseTechnologies = [
    { text: 'PostgreSQL', icon: PostgresIcon as string },
    { text: 'MongoDB', icon: MongoIcon as string },
  ];

  return (
    <div className={classes.aboutView} id="About">
      <div className={classes.heading}>About Me</div>
      <div className={classes.aboutContent}>
        <div className={classes.aboutInfo}>
          <div className={classes.nameHeading}>
            Hi, I&apos;m <span className={classes.highlightedText}>Simon</span>{' '}
            <span className={classes.wavingHand}>👋🏼</span>
          </div>
          <p style={{ marginBottom: 20 }}>
            I&apos;m a{' '}
            <span className={classes.highlightedText}>
              Full Stack Developer
            </span>{' '}
            who specializes in building scalable and flexible web applications.
            I started coding 8 years ago and studied{' '}
            <span className={classes.highlightedText}>Computer Science</span>{' '}
            and{' '}
            <span className={classes.highlightedText}>
              Software Engineering
            </span>{' '}
            at university.
          </p>
          <p>
            As an avid learner, I like to experiment with the latest
            technologies, as well as explore{' '}
            <span className={classes.highlightedText}>new opportunities</span>.
            If you think I can be of service to you, don&apos;t hesitate to
            contact me{' '}
            <span
              className={classes.highlightedText}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => goToContact()}
            >
              here.
            </span>
          </p>
        </div>
        <div
          className={clsx(classes.aboutWordCloud, classes.aboutWordCloudBig)}
        >
          <TagSphere texts={texts} radius={325} />
        </div>
        <div
          className={clsx(classes.aboutWordCloud, classes.aboutWordCloudMedium)}
        >
          <TagSphere texts={texts} radius={200} />
        </div>
        <div className={classes.technologySection}>
          <div className={classes.technologyTitle}>
            Technologies I work with
          </div>
          <div className={classes.technologyHeading}>Frontend</div>
          <div className={classes.technologyList}>
            {frontendTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <div
                  className={classes.technologyIcon}
                  style={{ backgroundImage: `url(${tech.icon})` }}
                />
              </Tooltip>
            ))}
          </div>
          <div className={classes.technologyHeading}>Backend</div>
          <div className={classes.technologyList}>
            {backendTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <div
                  className={classes.technologyIcon}
                  style={{ backgroundImage: `url(${tech.icon})` }}
                />
              </Tooltip>
            ))}
          </div>
          <div className={classes.technologyHeading}>Databases</div>
          <div className={classes.technologyList}>
            {databaseTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <div
                  className={classes.technologyIcon}
                  style={{ backgroundImage: `url(${tech.icon})` }}
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
