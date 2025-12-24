import { ExperienceAccordion } from '@components/content/experience/experienceAccordion.component';
import { experienceDetails } from '@components/content/experience/experienceDetails';
import { SectionHeading } from '@components/general/sectionHeading.component';
import { ViewWrapper } from '@components/general/viewWrapper.component';
import { styled } from '@mui/material/styles';
import { ReactElement, useState } from 'react';

const ExperienceContent = styled('div')(({ theme }) => ({
  flex: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.5),
  overflowY: 'auto',
}));

const ExperienceItemWrapper = styled('div')<{ $index: number }>(
  ({ theme, $index }) => ({
    width: '100%',

    [theme.breakpoints.up('lg')]: {
      width: '80%',
      marginLeft: $index % 2 === 0 ? '0%' : '20%',
    },
  }),
);

export const ExperienceView = (): ReactElement => {
  const [expanded, setExpanded] = useState<string | false>('experience0');

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ViewWrapper id="Experience">
      <SectionHeading>My Experience</SectionHeading>
      <ExperienceContent>
        {experienceDetails.map((item, index) => (
          <ExperienceItemWrapper key={`experience${index}`} $index={index}>
            <ExperienceAccordion
              item={item}
              expanded={expanded === `experience${index}`}
              handleAccordionChange={handleAccordionChange(
                `experience${index}`,
              )}
            />
          </ExperienceItemWrapper>
        ))}
      </ExperienceContent>
    </ViewWrapper>
  );
};
