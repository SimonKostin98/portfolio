import { useFullPage } from '@contexts/fullPage.context';
import { useBreakpoint } from '@hooks/useBreakpoint';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import { IconButton, styled } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { ReactElement } from 'react';

const Wrapper = styled('div')<ResponsiveProps>(
  ({ theme, $isMobile, $isMobileOrTablet }) => ({
    position: 'fixed',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.appBar,

    // Desktop (side nav)
    ...(!$isMobileOrTablet && {
      top: 0,
      height: '100%',
      width: theme.custom.navigationWidth,
    }),

    // Tablet & Mobile (bottom nav)
    ...($isMobileOrTablet && {
      bottom: 0,
      width: '100vw',
      height: theme.custom.navigationHeight,
      backgroundColor: theme.palette.background.default,
      padding: $isMobile ? 0 : '10px 0',
    }),
  }),
);

const Content = styled('div')<ResponsiveProps>(({ $isDesktop, $isMobile }) => ({
  backgroundColor: 'rgba(40, 40, 40, 0.4)',
  backdropFilter: 'blur(10px)',
  WebkitBoxShadow: '0 0 10px 1px rgba(150, 150, 150, .35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  // Desktop (side nav)
  ...($isDesktop && {
    width: '70%',
    padding: 30,
    gap: 40,
    borderRadius: '500px',
    flexDirection: 'column',
  }),

  // Tablet & Mobile (bottom nav)
  ...(!$isDesktop && {
    width: $isMobile ? '100%' : '90%',
    height: '100%',
    flexDirection: 'row',
    gap: 20,
    borderRadius: $isMobile ? 0 : '500px',
    padding: $isMobile ? '0px 10px' : 30,
  }),
}));

const NavigationIcon = styled('div')<{ isActive: boolean } & ResponsiveProps>(
  ({ theme, isActive, $isMobileOrTablet }) => ({
    cursor: 'pointer',
    height: $isMobileOrTablet ? 50 : 58,
    width: $isMobileOrTablet ? 50 : 58,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.2s ease-out',
    borderRadius: '50%',
    color: 'rgba(250, 250, 250, 0.8)',

    ...(isActive && {
      border: `2.5px solid ${theme.palette.primary.light}`,
      color: theme.palette.primary.main,
    }),
  }),
);

export const SideNavigation = (): ReactElement => {
  const { currentSlide, scrollToSlide } = useFullPage();
  const responsiveProps = useBreakpoint();

  return (
    <Wrapper {...responsiveProps}>
      <Content {...responsiveProps}>
        <NavigationIcon isActive={currentSlide === 0} {...responsiveProps}>
          <IconButton
            color="inherit"
            onClick={() => scrollToSlide(0)}
            aria-label="home section"
          >
            <HomeRoundedIcon fontSize="large" />
          </IconButton>
        </NavigationIcon>
        <NavigationIcon isActive={currentSlide === 1} {...responsiveProps}>
          <IconButton
            color="inherit"
            onClick={() => scrollToSlide(1)}
            aria-label="about me section"
          >
            <PersonRoundedIcon fontSize="large" />
          </IconButton>
        </NavigationIcon>
        <NavigationIcon isActive={currentSlide === 2} {...responsiveProps}>
          <IconButton
            color="inherit"
            onClick={() => scrollToSlide(2)}
            aria-label="experience section"
          >
            <PsychologyRoundedIcon fontSize="large" />
          </IconButton>
        </NavigationIcon>
        <NavigationIcon isActive={currentSlide === 3} {...responsiveProps}>
          <IconButton
            color="inherit"
            onClick={() => scrollToSlide(3)}
            aria-label="contact section"
          >
            <EmailRoundedIcon fontSize="large" />
          </IconButton>
        </NavigationIcon>
      </Content>
    </Wrapper>
  );
};
