import { CustomButton } from '@components/customizations/customButton.component';
import { useBreakpoint } from '@hooks/useBreakpoint';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { styled } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { motion, Variants } from 'framer-motion';
import { ReactElement } from 'react';
import Typewriter from 'typewriter-effect';

interface IHomeViewProps {
  goToContact: () => void;
}

const HomeContainer = styled(motion.div)({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
});

const InfoText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  zIndex: 5,
});

const FirstHeading = styled(motion.div)<ResponsiveProps>(({ $isMobile }) => ({
  color: '#fffaf0',
  fontWeight: 800,
  fontSize: $isMobile ? 'calc(5vh + 3vw)' : 'calc(6vh + 5vw)',
  textShadow: $isMobile
    ? `
      0 0 20px rgba(255, 244, 200, 0.6),
      0 0 40px rgba(255, 244, 200, 0.4)
    `
    : `
      0 0 40px rgba(255, 244, 200, 0.4),
      0 0 80px rgba(255, 244, 200, 0.2),
      0 0 120px rgba(255, 244, 200, 0.1)
    `,
  letterSpacing: '-0.02em',
}));

const SecondHeading = styled(motion.div)<ResponsiveProps>(({ $isMobile }) => ({
  fontWeight: 500,
  fontSize: $isMobile ? 'calc(2.5vh + 1vw)' : 'calc(3.5vh + 1.5vw)',
  color: 'rgba(255, 250, 240, 0.7)',
}));

const ContactButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const MotionContactButton = motion(ContactButton);

const ScrollDownContainer = styled(motion.div)({
  position: 'absolute',
  bottom: '2rem',
  left: 0,
  right: 0,
  marginInline: 'auto',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  zIndex: 5,
});

const ArrowIcon = styled(KeyboardArrowDownRoundedIcon)({
  fontSize: '3rem',
});

const MotionArrowIcon = motion(ArrowIcon);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const HomeView = (props: IHomeViewProps): ReactElement => {
  const { goToContact } = props;
  const responsiveProps = useBreakpoint();

  return (
    <HomeContainer
      id="Home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <InfoText>
        <FirstHeading {...responsiveProps} variants={itemVariants}>
          Simon Kostin
        </FirstHeading>
        <SecondHeading {...responsiveProps} variants={itemVariants}>
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'Bringing ideas to life'],
              autoStart: true,
              loop: true,
              delay: 60,
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1500).start();
            }}
          />
        </SecondHeading>
        <MotionContactButton
          variants={itemVariants}
          variant="contained"
          size="large"
          rounded
          onClick={() => goToContact()}
        >
          Get in touch
        </MotionContactButton>
      </InfoText>

      <ScrollDownContainer variants={itemVariants}>
        <MotionArrowIcon
          animate={{ y: [0, -10, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            times: [0, 0.4, 0.6, 1],
            ease: 'easeInOut',
          }}
        />
      </ScrollDownContainer>
    </HomeContainer>
  );
};
