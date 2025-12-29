import { useBreakpoint } from '@hooks/useBreakpoint';
import { styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

const HeadingWrapper = styled(motion.div)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '1px',
  color: theme.palette.primary.main,
  display: 'inline-block',
}));

interface ISectionHeadingProps {
  title: string;
}

export const SectionHeading = ({
  title,
}: ISectionHeadingProps): ReactElement => {
  const { $isMobile } = useBreakpoint();

  return (
    <HeadingWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <Title variant={$isMobile ? 'h5' : 'h4'}>{title}</Title>
    </HeadingWrapper>
  );
};
