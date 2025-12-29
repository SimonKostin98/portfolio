import { GlowingCursor } from '@components/customizations/glowingCursor.component';
import { HeaderNavigation } from '@components/navigation/headerNavigation.component';
import { SocialLinks } from '@components/navigation/socialLinks.component';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { Divider, styled } from '@mui/material';
import { AboutView } from '@views/about.view';
import { ContactView } from '@views/contact.view';
import { ExperienceView } from '@views/experience.view';
import { HomeView } from '@views/home.view';
import { StartAnimationView } from '@views/startAnimation.view';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useLockBodyScroll } from 'react-use';

import { ResponsiveProps } from './types/styled';

const Main = styled(motion.main)<ResponsiveProps>(({ $isMobile, theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: $isMobile ? theme.spacing(1) : theme.spacing(4),
}));

const SectionDivider = styled(Divider)(({ theme }) => ({
  paddingInline: theme.spacing(10),
  height: 3,
  backgroundColor: theme.palette.primary.main,
}));

export const AppContent = (): ReactElement => {
  const [showStartAnimation, setShowStartAnimation] = useState(true);
  const responsiveProps = useBreakpoint();

  useLockBodyScroll(showStartAnimation);

  const goToContact = useCallback(() => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowStartAnimation(false), 3750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showStartAnimation ? (
        <StartAnimationView key="intro" />
      ) : (
        <Main
          key="main"
          {...responsiveProps}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <GlowingCursor />
          <SocialLinks />
          {!responsiveProps.$isMobile && <HeaderNavigation />}
          <HomeView goToContact={goToContact} />
          <SectionDivider />
          <AboutView goToContact={goToContact} />
          <SectionDivider />
          <ExperienceView />
          <SectionDivider />
          <ContactView />
        </Main>
      )}
    </AnimatePresence>
  );
};
