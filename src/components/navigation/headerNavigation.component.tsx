import { useBreakpoint } from '@hooks/useBreakpoint';
import { Button, styled, useTheme } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { ReactElement, useEffect, useState } from 'react';

const HeaderWrapper = styled('header')<
  ResponsiveProps & { $isScrolled: boolean }
>(({ theme, $isScrolled }) => ({
  height: theme.custom.navigationHeight,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '20px 40px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  zIndex: theme.zIndex.appBar,
  gap: '30px',
  transition: 'all 0.3s ease-in-out',

  backgroundColor: $isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
  backdropFilter: $isScrolled ? 'blur(50px)' : 'none',
  WebkitBackdropFilter: $isScrolled ? 'blur(50px)' : 'none',
  boxShadow: $isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
  borderBottom: '1px solid',
  borderColor: $isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
}));

// Added shouldForwardProp to prevent $isActive from reaching the DOM
const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '$isActive',
})<{ $isActive: boolean }>(({ theme, $isActive }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: $isActive ? theme.palette.primary.main : theme.palette.text.primary,
  textTransform: 'none',
  minWidth: 'auto',
  padding: '5px 10px',
  position: 'relative',
  transition: 'all 0.3s ease',
  letterSpacing: '1px',

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    textShadow: `0 0 10px ${theme.palette.primary.main}`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: $isActive ? '80%' : '0%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease',
  },

  '&:hover::after': {
    width: '80%',
  },
}));

export const HeaderNavigation = (): ReactElement => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const responsiveProps = useBreakpoint();
  const theme = useTheme();

  const menuItems = [
    { label: 'Home', id: 'Home' },
    { label: 'About', id: 'About' },
    { label: 'Experience', id: 'Experience' },
    { label: 'Contact', id: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = theme.custom.navigationHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update header style
      setIsScrolled(scrollY > 50);

      // Update active section
      const triggerPoint = scrollY + 300;
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            triggerPoint >= offsetTop &&
            triggerPoint < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper {...responsiveProps} $isScrolled={isScrolled}>
      {menuItems.map((item) => (
        <NavButton
          key={item.id}
          $isActive={activeSection === item.id}
          onClick={() => scrollToSection(item.id)}
          variant="text"
          disableRipple
        >
          {item.label}
        </NavButton>
      ))}
    </HeaderWrapper>
  );
};
