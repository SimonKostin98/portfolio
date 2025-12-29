import CV from '@assets/Lebenslauf.pdf';
import { useBreakpoint } from '@hooks/useBreakpoint';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, styled, Tooltip } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { ReactElement } from 'react';

const Container = styled('div')<ResponsiveProps>(({ theme, $isMobile }) => ({
  position: 'absolute',
  top: $isMobile ? 20 : 10,
  right: $isMobile ? 'auto' : '80px',
  left: $isMobile ? '20px' : 'auto',
  zIndex: theme.zIndex.appBar + 10,
  display: 'flex',
  flexDirection: $isMobile ? 'row' : 'column',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const Line = styled('div')<ResponsiveProps>(({ theme, $isMobile }) => ({
  width: $isMobile ? 40 : 2, // Horizontal line on mobile
  height: $isMobile ? 2 : 60, // Vertical line on desktop (increased length)
  backgroundColor: theme.palette.text.primary,
}));

const IconContainer = styled('div')<ResponsiveProps>(
  ({ theme, $isMobile }) => ({
    display: 'flex',
    flexDirection: $isMobile ? 'row' : 'column', // Horizontal icons on mobile
    gap: theme.spacing(0.5),
  }),
);

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'transform 0.2s ease, color 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.8rem', // Adjust this value to make them bigger/smaller
  },
})) as typeof IconButton;

export const SocialLinks = (): ReactElement => {
  const responsiveProps = useBreakpoint();

  return (
    <Container {...responsiveProps}>
      <Line {...responsiveProps} />
      <IconContainer {...responsiveProps}>
        <Tooltip
          title="GitHub"
          placement={responsiveProps.$isMobile ? 'right' : 'left'}
        >
          <StyledIconButton
            size="large"
            onClick={() =>
              window.open('https://github.com/SimonKostin98', '_blank')
            }
            aria-label="GitHub"
          >
            <GitHubIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip
          title="LinkedIn"
          placement={responsiveProps.$isMobile ? 'right' : 'left'}
        >
          <StyledIconButton
            size="large"
            onClick={() =>
              window.open('https://www.linkedin.com/in/simonkostin/', '_blank')
            }
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip
          title="Download CV"
          placement={responsiveProps.$isMobile ? 'right' : 'left'}
        >
          <StyledIconButton
            size="large"
            component="a"
            href={CV}
            download="Simon_Kostin_CV.pdf"
            aria-label="Download CV"
          >
            <DescriptionIcon />
          </StyledIconButton>
        </Tooltip>
      </IconContainer>
    </Container>
  );
};
