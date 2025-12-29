import { Button, ButtonProps, styled } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  disableUppercase?: boolean;
  rounded?: boolean;
}

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'disableUppercase' && prop !== 'rounded',
})<CustomButtonProps>(({ theme, variant, disableUppercase, rounded }) => {
  const isContained = variant === 'contained';
  const isOutlined = variant === 'outlined';

  const gradient = 'linear-gradient(90deg, #ffeaa7, #fdcb6e)';
  const gradientHover = 'linear-gradient(90deg, #fdcb6e, #f9ca24)';
  const borderRadius = rounded ? '50px' : theme.shape.borderRadius;

  const baseStyles = {
    fontWeight: 700,
    textTransform: disableUppercase ? 'none' : 'uppercase',
    borderRadius: borderRadius,
    transition: 'all 0.3s ease',
    padding: '10px 30px',
  };

  if (isContained) {
    return {
      ...baseStyles,
      background: gradient,
      color: '#1a1a1a',
      boxShadow: '0 0 30px rgba(253, 203, 110, 0.3)',
      border: 'none',
      '&:hover': {
        background: gradientHover,
        boxShadow: '0 0 40px rgba(253, 203, 110, 0.5)',
      },
      '&.Mui-disabled': {
        background: gradient,
        color: '#1a1a1a',
        opacity: 0.7,
        boxShadow: 'none',
      },
    };
  }

  if (isOutlined) {
    return {
      ...baseStyles,
      position: 'relative',
      background: 'transparent',
      color: theme.palette.primary.main,
      border: 'none',
      overflow: 'hidden',

      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: borderRadius,
        padding: '2px',
        background: gradient,

        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
      },

      '&:hover': {
        background: 'rgba(255, 234, 167, 0.08)',
        '&::before': {
          background: gradientHover,
        },
        boxShadow: '0 0 20px rgba(253, 203, 110, 0.2)',
      },

      '&.Mui-disabled': {
        color: theme.palette.primary.main,
        opacity: 0.5,
        '&::before': {
          background: gradient,
        },
      },
    };
  }

  return {
    ...baseStyles,
    color: theme.palette.primary.main,
  };
});
