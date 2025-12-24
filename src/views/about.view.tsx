import CSSIcon from '@assets/programming/CSS.svg?url';
import HTMLIcon from '@assets/programming/HTML.svg?url';
import KotlinIcon from '@assets/programming/Kotlin.svg?url';
import PythonIcon from '@assets/programming/Python.svg?url';
import SASSIcon from '@assets/programming/SASS.svg?url';
import TSIcon from '@assets/programming/TS.svg?url';
import BootstrapIcon from '@assets/tools/bootstrap.svg?url';
import DjangoIcon from '@assets/tools/django.svg?url';
import DockerIcon from '@assets/tools/docker.svg?url';
import FlaskIcon from '@assets/tools/flask.webp';
import GitIcon from '@assets/tools/git.svg?url';
import MUIIcon from '@assets/tools/materialUI.svg?url';
import MongoIcon from '@assets/tools/mongodb.svg?url';
import NodeIcon from '@assets/tools/node.svg?url';
import PostgresIcon from '@assets/tools/postgresql.svg?url';
import ReactIcon from '@assets/tools/react.svg?url';
import { SectionHeading } from '@components/general/sectionHeading.component';
import { ViewWrapper } from '@components/general/viewWrapper.component';
import { keyframes, styled, Tooltip } from '@mui/material';
import TagSphere from '@src/components/content/about/tagSphere.component';
import { TextIconToggle } from '@src/components/content/about/textIconToggle.component';
import { ReactElement } from 'react';

interface IAboutViewProps {
  goToContact: () => void;
}

const wave = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '10%': { transform: 'rotate(14deg)' },
  '20%': { transform: 'rotate(-8deg)' },
  '30%': { transform: 'rotate(14deg)' },
  '40%': { transform: 'rotate(-4deg)' },
  '50%': { transform: 'rotate(10deg)' },
  '60%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

const AboutContent = styled('div')(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px 2.5vw',
  backgroundColor: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: 25,
  boxShadow: theme.custom.cardShadow,
  WebkitBoxShadow: theme.custom.cardShadow,
  gap: '5vw',

  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
  },
}));

const AboutInfo = styled('div')(({ theme }) => ({
  fontSize: 'calc(1.25vh + .75vw)',
  flexShrink: 0,

  [theme.breakpoints.down('xl')]: {
    flexShrink: 1,
  },
}));

const HighlightedText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const WavingHand = styled('span')({
  animation: `${wave} 2.5s infinite`,
  transformOrigin: '70% 70%',
  display: 'inline-block',
});

const NameHeading = styled('div')({
  fontSize: 'calc(1.5vh + 1.5vw)',
  marginBottom: 20,
});

const AboutWordCloudBig = styled('div')(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(.7vh + .8vw)',
  display: 'none',
  width: 650,
  flexShrink: 0,

  [theme.breakpoints.up('xl')]: {
    display: 'flex',
  },
}));

const AboutWordCloudMedium = styled('div')(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(.7vh + .8vw)',
  display: 'none',
  width: 500,
  flex: 1,
  minHeight: 300,

  [theme.breakpoints.between('md', 'xl')]: {
    display: 'flex',
  },
}));

const TechnologySection = styled('div')(({ theme }) => ({
  width: '100%',
  flex: 1,
  minHeight: 0, // Allow shrinking
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    gap: 5,
  },
}));

const TechnologyTitle = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  alignSelf: 'center',
  fontSize: 'large',
}));

const TechnologyHeading = styled('div')({
  fontWeight: 500,
});

const TechnologyList = styled('div')({
  width: '100%',
  display: 'flex',
  gap: 10,
  padding: 10,
});

const TechnologyIcon = styled('div')<{ iconUrl: string }>(
  ({ theme, iconUrl }) => ({
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    backgroundImage: `url(${iconUrl})`,

    [theme.breakpoints.down('sm')]: {
      width: 20,
      height: 20,
    },
  }),
);

const ClickableText = styled(HighlightedText)({
  textDecoration: 'underline',
  cursor: 'pointer',
});

export const AboutView = (props: IAboutViewProps): ReactElement => {
  const { goToContact } = props;

  const texts = [
    <TextIconToggle text="HTML" iconUrl={HTMLIcon} key={0} />,
    <TextIconToggle text="CSS" iconUrl={CSSIcon} key={1} />,
    <TextIconToggle text="React" iconUrl={ReactIcon} key={2} />,
    <TextIconToggle text="MaterialUI" iconUrl={MUIIcon} key={3} />,
    <TextIconToggle text="Bootstrap" iconUrl={BootstrapIcon} key={4} />,
    <TextIconToggle text="Django" iconUrl={DjangoIcon} key={5} />,
    <TextIconToggle text="Flask" iconUrl={FlaskIcon} key={6} />,
    <TextIconToggle text="Node" iconUrl={NodeIcon} key={7} />,
    <TextIconToggle text="Sass" iconUrl={SASSIcon} key={8} />,
    <TextIconToggle text="PostgreSQL" iconUrl={PostgresIcon} key={9} />,
    <TextIconToggle text="mongoDB" iconUrl={MongoIcon} key={10} />,
    <TextIconToggle text="Docker" iconUrl={DockerIcon} key={11} />,
    <TextIconToggle text="Python" iconUrl={PythonIcon} key={12} />,
    <TextIconToggle text="Typescript" iconUrl={TSIcon} key={13} />,
    <TextIconToggle text="Git" iconUrl={GitIcon} key={14} />,
    <TextIconToggle text="Kotlin" iconUrl={KotlinIcon} key={15} />,
  ];

  const frontendTechnologies = [
    { text: 'React', icon: ReactIcon },
    { text: 'HTML', icon: HTMLIcon },
    { text: 'CSS', icon: CSSIcon },
    { text: 'SASS', icon: SASSIcon },
    { text: 'MaterialUI', icon: MUIIcon },
    { text: 'Bootstrap', icon: BootstrapIcon },
  ];

  const backendTechnologies = [
    { text: 'Typescript', icon: TSIcon },
    { text: 'Python', icon: PythonIcon },
    { text: 'Kotlin', icon: KotlinIcon },
    { text: 'Node', icon: NodeIcon },
    { text: 'Django', icon: DjangoIcon },
    { text: 'Flask', icon: FlaskIcon },
    { text: 'Docker', icon: DockerIcon },
  ];

  const databaseTechnologies = [
    { text: 'PostgreSQL', icon: PostgresIcon },
    { text: 'MongoDB', icon: MongoIcon },
  ];

  return (
    <ViewWrapper id="About">
      <SectionHeading>About Me</SectionHeading>
      <AboutContent>
        <AboutInfo>
          <NameHeading>
            Hi, I&apos;m <HighlightedText>Simon</HighlightedText>{' '}
            <WavingHand>👋🏼</WavingHand>
          </NameHeading>
          <p style={{ marginBottom: 20 }}>
            I&apos;m a <HighlightedText>Full Stack Developer</HighlightedText>{' '}
            who specializes in building scalable and flexible web applications.
            I started coding 8 years ago and studied{' '}
            <HighlightedText>Computer Science</HighlightedText> and{' '}
            <HighlightedText>Software Engineering</HighlightedText> at
            university.
          </p>
          <p>
            As an avid learner, I like to experiment with the latest
            technologies, as well as explore{' '}
            <HighlightedText>new opportunities</HighlightedText>. If you think I
            can be of service to you, don&apos;t hesitate to contact me{' '}
            <ClickableText onClick={() => goToContact()}>here.</ClickableText>
          </p>
        </AboutInfo>
        <AboutWordCloudBig>
          <TagSphere
            texts={texts}
            radius={325}
            maxSpeed={4}
            initialSpeed={16}
          />
        </AboutWordCloudBig>
        <AboutWordCloudMedium>
          <TagSphere
            texts={texts}
            radius={200}
            maxSpeed={4}
            initialSpeed={16}
          />
        </AboutWordCloudMedium>
        <TechnologySection>
          <TechnologyTitle>Technologies I work with</TechnologyTitle>
          <TechnologyHeading>Frontend</TechnologyHeading>
          <TechnologyList>
            {frontendTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <TechnologyIcon iconUrl={tech.icon} />
              </Tooltip>
            ))}
          </TechnologyList>
          <TechnologyHeading>Backend</TechnologyHeading>
          <TechnologyList>
            {backendTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <TechnologyIcon iconUrl={tech.icon} />
              </Tooltip>
            ))}
          </TechnologyList>
          <TechnologyHeading>Databases</TechnologyHeading>
          <TechnologyList>
            {databaseTechnologies.map((tech, index) => (
              <Tooltip key={index} title={tech.text} arrow placement="bottom">
                <TechnologyIcon iconUrl={tech.icon} />
              </Tooltip>
            ))}
          </TechnologyList>
        </TechnologySection>
      </AboutContent>
    </ViewWrapper>
  );
};
