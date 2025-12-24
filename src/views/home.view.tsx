import CV from '@assets/Lebenslauf.pdf';
import { useBreakpoint } from '@hooks/useBreakpoint';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Button, IconButton, keyframes, styled, Tooltip } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { ReactElement, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

interface IHomeViewProps {
  goToContact: () => void;
}

const appearAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const HomeContainer = styled('div')<ResponsiveProps>(
  ({ theme, $isMobileOrTablet }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    marginLeft: $isMobileOrTablet
      ? 0
      : `-${theme.custom.navigationWidth / 2}px`,
    alignItems: 'center',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
  }),
);

const Socials = styled('div')<ResponsiveProps>(({ $isMobileOrTablet }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  paddingTop: 10,
  color: 'rgba(250, 250, 250, 0.85)',

  ...(!$isMobileOrTablet && {
    top: 75,
    right: 50,
    flexDirection: 'column',
  }),

  ...($isMobileOrTablet && {
    top: 10,
    left: 60,
    right: 'auto',
    flexDirection: 'row',
  }),

  '&::before': {
    content: '""',
    backgroundColor: 'rgba(250, 250, 250, 0.85)',
    position: 'absolute',

    ...(!$isMobileOrTablet && {
      width: 2,
      height: 60,
      left: '50%',
      top: -60,
      marginLeft: -2,
    }),

    ...($isMobileOrTablet && {
      height: 2,
      width: 50,
      top: 'auto',
      bottom: 'calc(50% - 7px)',
      left: -60,
    }),
  },
}));

const InfoText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FirstHeading = styled('div')<ResponsiveProps>(
  ({ $isMobileOrTablet }) => ({
    color: 'white',
    fontWeight: 'bolder',
    fontSize: $isMobileOrTablet ? 'calc(5vh + 3vw)' : 'calc(6vh + 5vw)',
    animation: `${appearAnimation} .5s ease-out`,
  }),
);

const SecondHeading = styled('div')<ResponsiveProps>(
  ({ theme, $isMobileOrTablet }) => ({
    fontWeight: 'bold',
    fontSize: $isMobileOrTablet ? 'calc(2.5vh + 1vw)' : 'calc(3.5vh + 1.5vw)',
    color: theme.palette.primary.main,
    animation: `${appearAnimation} .5s ease-out`,
  }),
);

const ContactButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
  color: 'white',
  fontWeight: 'bold',
  marginTop: '10px',
  borderRadius: '10rem',
  animation: `${appearAnimation} .5s ease-out`,
}));

export const HomeView = (props: IHomeViewProps): ReactElement => {
  const { goToContact } = props;
  const responsiveProps = useBreakpoint();
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Start typewriter after fade-in animation completes (3.5s + 1s = 4.5s)
    const timer = setTimeout(() => setShowTypewriter(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer {...responsiveProps} id="Home">
      <Socials {...responsiveProps}>
        <Tooltip title="Github" arrow placement="left">
          <IconButton
            color="inherit"
            href="https://github.com/SimonKostin98"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow placement="left">
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/simonkostin/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="CV" arrow placement="left">
          <IconButton
            color="inherit"
            href={CV as string}
            download="simon_kostin_cv.pdf"
          >
            <SummarizeIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Socials>
      <InfoText>
        <FirstHeading {...responsiveProps}>Simon Kostin</FirstHeading>
        <SecondHeading {...responsiveProps}>
          {showTypewriter && (
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Developer",
                  'I make ideas come to life',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          )}
        </SecondHeading>
        <ContactButton
          variant="contained"
          size="large"
          onClick={() => goToContact()}
        >
          Contact me
        </ContactButton>
      </InfoText>
    </HomeContainer>
  );
};
