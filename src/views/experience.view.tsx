import { ExperienceCard } from '@components/content/experience/experienceCard.component';
import { experienceDetails } from '@components/content/experience/experienceDetails';
import { SectionHeading } from '@components/general/sectionHeading.component';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { styled } from '@mui/material';
import { ResponsiveProps } from '@src/types/styled';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

const ExperienceSection = styled('section')<ResponsiveProps>(
  ({ $isMobile, theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: $isMobile ? theme.spacing(4) : theme.spacing(10),
  }),
);

const ExperienceGrid = styled('div')<ResponsiveProps>(
  ({ $isMobile, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: $isMobile ? theme.spacing(4) : theme.spacing(6),
    maxWidth: '1200px',
    marginTop: $isMobile ? theme.spacing(2) : theme.spacing(4),
    marginInline: 'auto',
    width: '100%',
    paddingInline: theme.spacing(2),
  }),
);

const CardWrapper = styled(motion.div)<{ $index: number }>(({ $index }) => ({
  width: '100%',
  maxWidth: '600px',
  alignSelf: $index % 2 === 0 ? 'flex-start' : 'flex-end', // Zig-zag layout
}));

export const ExperienceView = (): ReactElement => {
  const responsiveProps = useBreakpoint();
  return (
    <ExperienceSection id="Experience" {...responsiveProps}>
      <SectionHeading title="My Experience" />
      <ExperienceGrid {...responsiveProps}>
        {experienceDetails.map((item, index) => (
          <CardWrapper
            key={index}
            $index={index}
            // Start state: invisible and offset to the side
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            // End state: fully visible and centered
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            // Animation configuration
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            // Viewport settings
            viewport={{
              once: true, // Only animate once
              amount: 0.3, // Start when 30% of the element is visible
            }}
          >
            <ExperienceCard item={item} />
          </CardWrapper>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};
