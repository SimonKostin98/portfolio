import CSharpIcon from '@assets/programming/CSharp.svg?url';
import CSSIcon from '@assets/programming/CSS.svg?url';
import HTMLIcon from '@assets/programming/HTML.svg?url';
import KotlinIcon from '@assets/programming/Kotlin.svg?url';
import PythonIcon from '@assets/programming/Python.svg?url';
import SASSIcon from '@assets/programming/SASS.svg?url';
import TSIcon from '@assets/programming/TS.svg?url';
import AWSIcon from '@assets/tools/aws.svg?url';
import AzureIcon from '@assets/tools/azure.svg?url';
import AzureDevOpsIcon from '@assets/tools/azuredevops.svg?url';
import BootstrapIcon from '@assets/tools/bootstrap.svg?url';
import DjangoIcon from '@assets/tools/django.svg?url';
import DockerIcon from '@assets/tools/docker.svg?url';
import FlaskIcon from '@assets/tools/flask.webp';
import GitIcon from '@assets/tools/git.svg?url';
import GithubIcon from '@assets/tools/github.svg?url';
import MUIIcon from '@assets/tools/materialUI.svg?url';
import MongoIcon from '@assets/tools/mongodb.svg?url';
import NodeIcon from '@assets/tools/node.svg?url';
import PostgresIcon from '@assets/tools/postgresql.svg?url';
import ReactIcon from '@assets/tools/react.svg?url';
import { Carousel } from '@components/content/about/carousel.component';
import { TechCard } from '@components/content/about/techCard.component';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { keyframes, styled, Typography } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { motion, Variants } from 'framer-motion';
import { ReactElement } from 'react';

interface IAboutViewProps {
  goToContact: () => void;
}

// Animations & Styles
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

const AboutSection = styled('section')<ResponsiveProps>(
  ({ $isMobile, theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: $isMobile ? theme.spacing(4) : theme.spacing(10),
  }),
);

// Convert IntroContainer to a motion component
const IntroContainer = styled(motion.div)({
  width: '100%',
  maxWidth: '1200px',
  marginInline: 'auto',
  textAlign: 'center',
});

// Create a Motion version of Typography
const MotionTypography = motion.create(Typography);

const HighlightedText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const ClickableText = styled(HighlightedText)({
  textDecoration: 'underline',
  cursor: 'pointer',
  '&:hover': {
    color: '#fff',
  },
});

const WavingHand = styled('span')({
  animation: `${wave} 2.5s infinite`,
  transformOrigin: '70% 70%',
  display: 'inline-block',
  marginLeft: 10,
  color: '#fff',
});

const TechStackContainer = styled('div')(({ theme }) => ({
  width: '100%',
  marginInline: 'auto',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

const MotionCarouselSection = styled(motion.div)({
  width: '100%',
});

const TechCategoryLabel = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '0.9rem',
  textTransform: 'uppercase',
  letterSpacing: 2,
  color: theme.palette.text.secondary,
  opacity: 0.7,
  marginBottom: 10,
  marginTop: 10,
}));

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const AboutView = (props: IAboutViewProps): ReactElement => {
  const { goToContact } = props;
  const responsiveProps = useBreakpoint();

  const frontendTech = [
    { name: 'React', icon: ReactIcon, link: 'https://react.dev/' },
    {
      name: 'HTML5',
      icon: HTMLIcon,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      icon: CSSIcon,
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    { name: 'SASS', icon: SASSIcon, link: 'https://sass-lang.com/' },
    { name: 'Material UI', icon: MUIIcon, link: 'https://mui.com/' },
    {
      name: 'Bootstrap',
      icon: BootstrapIcon,
      link: 'https://getbootstrap.com/',
    },
  ];

  const backendTech = [
    {
      name: 'TypeScript',
      icon: TSIcon,
      link: 'https://www.typescriptlang.org/',
    },
    { name: 'Node.js', icon: NodeIcon, link: 'https://nodejs.org/' },
    { name: 'Python', icon: PythonIcon, link: 'https://www.python.org/' },
    {
      name: 'Django',
      icon: DjangoIcon,
      link: 'https://www.djangoproject.com/',
    },
    {
      name: 'Flask',
      icon: FlaskIcon,
      link: 'https://flask.palletsprojects.com/',
    },
    { name: 'Kotlin', icon: KotlinIcon, link: 'https://kotlinlang.org/' },
    {
      name: 'PostgreSQL',
      icon: PostgresIcon,
      link: 'https://www.postgresql.org/',
    },
    { name: 'MongoDB', icon: MongoIcon, link: 'https://www.mongodb.com/' },
    {
      name: 'C#',
      icon: CSharpIcon,
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
  ];

  const devopsTech = [
    { name: 'Docker', icon: DockerIcon, link: 'https://www.docker.com/' },
    { name: 'Git', icon: GitIcon, link: 'https://git-scm.com/' },
    { name: 'Azure', icon: AzureIcon, link: 'https://azure.microsoft.com/' },
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com/' },
    { name: 'AWS', icon: AWSIcon, link: 'https://aws.amazon.com/' },
    {
      name: 'Azure DevOps',
      icon: AzureDevOpsIcon,
      link: 'https://azure.microsoft.com/en-us/services/devops/',
    },
  ];

  return (
    <AboutSection id="About" {...responsiveProps}>
      <IntroContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <MotionTypography
          variants={itemVariants}
          variant={responsiveProps.$isMobile ? 'h6' : 'h5'}
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          Hi, I&apos;m <HighlightedText>Simon</HighlightedText>
          <WavingHand>👋🏼</WavingHand>
        </MotionTypography>
        <MotionTypography
          variants={itemVariants}
          variant={responsiveProps.$isMobile ? 'h6' : 'h5'}
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          I&apos;m a <HighlightedText>Full Stack Developer</HighlightedText> who
          specializes in building scalable and flexible web applications. I
          started coding 11 years ago and studied{' '}
          <HighlightedText>Computer Science</HighlightedText> and{' '}
          <HighlightedText>Software Engineering</HighlightedText> at university.
        </MotionTypography>
        <MotionTypography
          variants={itemVariants}
          variant={responsiveProps.$isMobile ? 'h6' : 'h5'}
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          As an avid learner, I like to experiment with the latest technologies,
          as well as explore{' '}
          <HighlightedText>new opportunities</HighlightedText>. If you think I
          can be of service to you, don&apos;t hesitate to{' '}
          <ClickableText onClick={() => goToContact()}>contact</ClickableText>{' '}
          me.
        </MotionTypography>
      </IntroContainer>

      <TechStackContainer>
        <MotionCarouselSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <TechCategoryLabel>Frontend</TechCategoryLabel>
          <Carousel direction="left" speed={30}>
            {frontendTech.map((tech, index) => (
              <TechCard
                key={`fe-${index}`}
                name={tech.name}
                icon={tech.icon}
                link={tech.link}
              />
            ))}
          </Carousel>
        </MotionCarouselSection>

        <MotionCarouselSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <TechCategoryLabel>Backend</TechCategoryLabel>
          <Carousel direction="right" speed={35}>
            {backendTech.map((tech, index) => (
              <TechCard
                key={`be-${index}`}
                name={tech.name}
                icon={tech.icon}
                link={tech.link}
              />
            ))}
          </Carousel>
        </MotionCarouselSection>

        <MotionCarouselSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <TechCategoryLabel>DevOps & Tools</TechCategoryLabel>
          <Carousel direction="left" speed={40}>
            {devopsTech.map((tech, index) => (
              <TechCard
                key={`do-${index}`}
                name={tech.name}
                icon={tech.icon}
                link={tech.link}
              />
            ))}
          </Carousel>
        </MotionCarouselSection>
      </TechStackContainer>
    </AboutSection>
  );
};
