import { FullPageScroll } from '@components/layout/fullPage.component';
import { SideNavigation } from '@components/navigation/sideNavigation.component';
import { useFullPage } from '@contexts/fullPage.context';
import { keyframes, styled } from '@mui/material';
import { AboutView } from '@views/about.view';
import { ContactView } from '@views/contact.view';
import { ExperienceView } from '@views/experience.view';
import { HomeView } from '@views/home.view';
import { StartAnimationView } from '@views/startAnimation.view';
import { ReactElement, useCallback, useEffect, useState } from 'react';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const MainContentWrapper = styled('div')({
  opacity: 0,
  animation: `${fadeIn} 1s ease-out 4.5s forwards`,
});

const Main = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.custom.navigationWidth,
  height: '100vh',
  width: `calc(100vw - ${theme.custom.navigationWidth}px)`,

  [theme.breakpoints.down('md')]: {
    width: '100vw',
    left: 0,
  },
}));

const StyledFullPageScroll = styled(FullPageScroll)(({ theme }) => ({
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    height: `calc(100% - ${theme.custom.navigationHeight}px) !important`,
  },
}));

export const AppContent = (): ReactElement => {
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const { scrollToSlide } = useFullPage();

  const goToContact = useCallback(() => {
    scrollToSlide(3);
  }, [scrollToSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setShowStartAnimation(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showStartAnimation && <StartAnimationView />}
      <MainContentWrapper>
        <SideNavigation />
        <Main>
          <StyledFullPageScroll>
            <HomeView goToContact={goToContact} />
            <AboutView goToContact={goToContact} />
            <ExperienceView />
            <ContactView />
          </StyledFullPageScroll>
        </Main>
      </MainContentWrapper>
    </>
  );
};
