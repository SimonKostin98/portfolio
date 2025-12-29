import { CustomButton } from '@components/customizations/customButton.component';
import { TextFormField } from '@components/form/textFormField.component';
import { SectionHeading } from '@components/general/sectionHeading.component';
import emailjs from '@emailjs/browser';
import { useBreakpoint } from '@hooks/useBreakpoint';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  CircularProgress,
  Snackbar,
  styled,
  Typography,
} from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from 'framer-motion';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import AstronautDesktop from '../assets/images/astronaut_desktop.svg';
import AstronautMobile from '../assets/images/astronaut_mobile.svg';

const Wrapper = styled('div')<ResponsiveProps>(({ theme, $isMobile }) => ({
  width: '100%',
  minHeight: $isMobile
    ? '100dvh'
    : `calc(100dvh - ${theme.custom.navigationHeight}px)`,
  display: 'flex',
  alignItems: $isMobile ? 'flex-start' : 'center',
  justifyContent: $isMobile ? 'flex-start' : 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: $isMobile ? 0 : theme.spacing(4),
}));

const ContentWrapper = styled('div')<ResponsiveProps>(
  ({ theme, $isMobile }) => ({
    width: '100%',
    height: $isMobile ? '100%' : 'auto',
    maxWidth: 1200,
    display: 'flex',
    flexDirection: $isMobile ? 'column' : 'row',
    gap: $isMobile ? theme.spacing(4) : theme.spacing(2),
  }),
);

const FormSection = styled('div')<ResponsiveProps>(({ theme, $isMobile }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: $isMobile ? 'flex-start' : 'center',
  overflow: 'auto',
  paddingRight: $isMobile ? 0 : '10px',
  flex: $isMobile ? '0 0 auto' : 1,
  maxWidth: $isMobile ? '100%' : '50%',
  flexShrink: 0,

  [theme.breakpoints.up('md')]: {
    flex: 1,
    maxWidth: '50%',
  },
}));

const Description = styled(Typography, {
  shouldForwardProp: (prop) =>
    !['$isMobile', '$isTablet', '$isDesktop', '$isMobileOrTablet'].includes(
      prop as string,
    ),
})<ResponsiveProps>(({ theme, $isMobile }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: $isMobile ? 'medium' : 'large',
  marginTop: theme.spacing(-1),
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
}));

const AstronautSection = styled(motion.div)<ResponsiveProps>(
  ({ $isMobile }) => ({
    display: $isMobile ? 'none' : 'flex',
    flex: 1,
    height: $isMobile ? '100%' : 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  }),
);

const MobileAstronautSection = styled(motion.div)<ResponsiveProps>(
  ({ $isMobile }) => ({
    display: $isMobile ? 'flex' : 'none',
    width: '100%',
    flex: $isMobile ? '1 1 0' : 'none',
    minHeight: $isMobile ? '150px' : 0,
    height: $isMobile ? '0' : 'auto',
    maxHeight: $isMobile ? '100%' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    paddingTop: 0,
    flexShrink: 0,
  }),
);

const AstronautContainer = styled(motion.div)({
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const MobileAstronautContainer = styled(motion.div)({
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const AstronautImage = styled('img')({
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
  transition: 'filter 0.3s ease',
});

const MobileAstronautImage = styled('img')({
  width: 'auto',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  transform: 'scaleX(-1)',
  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
  transition: 'filter 0.3s ease',
});

const ContactForm = styled(motion.form)(({ theme }) => ({
  width: '100%',
  paddingBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(2),
  flex: '0 0 auto',
}));

const Message = styled(motion.div)({
  width: '100%',
  flex: '1 1 auto',
});

interface ContactFormData {
  email: string;
  from_name: string;
  message: string;
}

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

const astronautEntranceVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 20,
      delay: 0.4,
    },
  },
};

export const ContactView = (): ReactElement => {
  const responsiveProps = useBreakpoint();
  const [loading, setLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Motion values for cursor following (desktop)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Motion value for base floating animation (desktop)
  const floatY = useMotionValue(0);

  // Motion value for mobile floating animation
  const mobileFloatY = useMotionValue(0);

  // Spring animations - use slower config for smoother reset
  const hoverSpringConfig = { damping: 25, stiffness: 200 };
  const resetSpringConfig = { damping: 12, stiffness: 80 };

  // Create springs with initial config, will be recreated on hover change
  const x = useSpring(
    useTransform(mouseX, [-1, 1], [-30, 30]),
    isHovering ? hoverSpringConfig : resetSpringConfig,
  );
  const cursorY = useSpring(
    useTransform(mouseY, [-1, 1], [-30, 30]),
    isHovering ? hoverSpringConfig : resetSpringConfig,
  );
  const rotate = useSpring(
    useTransform(mouseX, [-1, 1], [-5, 5]),
    isHovering ? hoverSpringConfig : resetSpringConfig,
  );

  // Combine floating animation with cursor following (desktop)
  const combinedY = useTransform(
    [cursorY, floatY],
    ([cursor, float]: number[]) => (isHovering ? cursor : 0) + float,
  );

  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: {
      email: '',
      from_name: '',
      message: '',
    },
  });

  // Continuous floating animation for desktop - runs independently
  useEffect(() => {
    const floatAnimation = animate(floatY, [-15, -5, -15], {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    });

    return () => {
      floatAnimation.stop();
    };
  }, [floatY]);

  // Continuous floating animation for mobile
  useEffect(() => {
    // Only run animation on desktop
    if (responsiveProps.$isMobile) return;

    const floatAnimation = animate(mobileFloatY, [-10, -3, -10], {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    });

    return () => {
      floatAnimation.stop();
    };
  }, [mobileFloatY, responsiveProps.$isMobile]);

  // Handle mouse movement for cursor following (desktop only)
  useEffect(() => {
    if (responsiveProps.$isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovering) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize mouse position to -1 to 1 range
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering, mouseX, mouseY, responsiveProps.$isMobile]);

  // Reset cursor position when not hovering
  useEffect(() => {
    if (!isHovering || responsiveProps.$isMobile) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [isHovering, mouseX, mouseY, responsiveProps.$isMobile]);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success',
      });
      reset(); // Clear the form
    } catch (error: unknown) {
      console.error(error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Wrapper id="Contact" {...responsiveProps}>
      <ContentWrapper {...responsiveProps}>
        <FormSection {...responsiveProps}>
          <ContactForm
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading title="Let's talk" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Description variant="body1" {...responsiveProps}>
                Have a project in mind or want to collaborate? I'd love to hear
                from you! Fill out the form below and I'll get back to you as
                soon as possible.
              </Description>
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextFormField
                control={control}
                name="from_name"
                label="Name"
                required
                textFieldProps={{
                  fullWidth: true,
                }}
                rules={{
                  required: 'Name is required',
                  validate: (value) =>
                    !!value.trim() || 'Name cannot be empty or whitespace only',
                }}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <TextFormField
                control={control}
                name="email"
                label="Email"
                required
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                textFieldProps={{
                  type: 'email',
                  fullWidth: true,
                }}
              />
            </motion.div>
            <Message variants={itemVariants}>
              <TextFormField
                control={control}
                name="message"
                label="Message"
                required
                rules={{
                  required: 'Message is required',
                  validate: (value) =>
                    !!value.trim() ||
                    'Message cannot be empty or whitespace only',
                }}
                textFieldProps={{
                  fullWidth: true,
                  multiline: true,
                  minRows: 6,
                  maxRows: 12,
                  sx: {
                    '& .MuiInputBase-root': { alignItems: 'flex-start' },
                  },
                }}
              />
            </Message>
            <motion.div variants={itemVariants} style={{ alignSelf: 'center' }}>
              <CustomButton
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={
                  !loading ? (
                    <SendIcon />
                  ) : (
                    <CircularProgress size={24} color="inherit" />
                  )
                }
              >
                {loading ? 'Sending...' : 'Send Message'}
              </CustomButton>
            </motion.div>
          </ContactForm>
        </FormSection>

        {/* Desktop Astronaut */}
        <AstronautSection
          {...responsiveProps}
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={astronautEntranceVariants}
        >
          <AstronautContainer
            style={{
              x,
              y: combinedY,
              rotate,
            }}
          >
            <AstronautImage
              src={AstronautDesktop}
              alt="Floating Astronaut"
              style={{
                filter: isHovering
                  ? 'drop-shadow(0 0 20px rgba(253, 203, 110, 0.5))'
                  : 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
              }}
            />
          </AstronautContainer>
        </AstronautSection>

        {/* Mobile Astronaut */}
        <MobileAstronautSection
          {...responsiveProps}
          ref={mobileContainerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={astronautEntranceVariants}
        >
          <MobileAstronautContainer
            style={
              responsiveProps.$isMobile
                ? {} // No animation on mobile
                : {
                    y: mobileFloatY,
                  }
            }
          >
            <MobileAstronautImage
              src={AstronautMobile}
              alt="Floating Astronaut"
            />
          </MobileAstronautContainer>
        </MobileAstronautSection>
      </ContentWrapper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};
