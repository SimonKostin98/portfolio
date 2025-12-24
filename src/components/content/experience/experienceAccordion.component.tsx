import { ExpandMoreRounded } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';

import { ExperienceItem } from './experienceDetails';

interface IExperienceAccordionProps {
  item: ExperienceItem;
  expanded: boolean;
  handleAccordionChange: (
    event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => void;
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: '25px !important',
  boxShadow: theme.custom.cardShadow,
  WebkitBoxShadow: theme.custom.cardShadow,

  [theme.breakpoints.up('xl')]: {
    padding: 10,
  },

  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const SummaryContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const SummaryImage = styled('div')<{ $imageUrl: string }>(
  ({ theme, $imageUrl }) => ({
    backgroundColor: 'white',
    backgroundImage: `url(${$imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '45px 45px',
    borderRadius: '50%',
    width: 50,
    height: 50,
    flexShrink: 0,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.up('xl')]: {
      height: 80,
      width: 80,
      backgroundSize: '75px 75px',
    },
  }),
);

const SummaryText = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Heading = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 'x-large',
  textAlign: 'center',

  [theme.breakpoints.down('xl')]: {
    fontSize: 'large',
  },
}));

const HighlightedText = styled('span')(({ theme }) => ({
  marginLeft: 5,
  color: theme.palette.primary.light,
}));

const InstitutionLink = styled('a')(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  cursor: 'pointer',
  color: theme.palette.primary.light,
  backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.light})`,
  backgroundSize: '0% 0.1em',
  backgroundPositionY: '100%',
  backgroundPositionX: '0%',
  backgroundRepeat: 'no-repeat',
  transition: 'background-size 0.2s ease',

  '&:hover, &:active, &:focus': {
    backgroundSize: '100% 0.1em',
  },
}));

const Duration = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 'clamp(0.75rem, 1vmin, 1.2rem)',
  color: 'rgba(190, 190, 190, 0.7)',
});

const InfoList = styled('ul')(({ theme }) => ({
  color: 'rgba(240, 240, 240, 0.8)',
  fontSize: 'large',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  [theme.breakpoints.down('xl')]: {
    fontSize: 'small',
    paddingLeft: 20,
  },

  [theme.breakpoints.down('md')]: {
    paddingLeft: 10,
  },
}));

const InfoItem = styled('li')(({ theme }) => ({
  paddingLeft: 30,
  marginBottom: 20,
  position: 'relative',

  '&::before': {
    content: '"▹"',
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'absolute',
    left: 0,
    top: -2,
  },

  [theme.breakpoints.down('lg')]: {
    paddingLeft: 20,
    marginBottom: 12,
  },

  [theme.breakpoints.down('md')]: {
    paddingLeft: 15,
    marginBottom: 10,
  },
}));

export const ExperienceAccordion = ({
  item,
  expanded,
  handleAccordionChange,
}: IExperienceAccordionProps): ReactElement => {
  const title = item.type === 'work' ? item.role : item.degree;

  const renderDetails = () => {
    if (item.type === 'work') {
      return (
        <InfoList>
          {item.description.map((desc, index) => (
            <InfoItem key={index}>{desc}</InfoItem>
          ))}
        </InfoList>
      );
    }

    return (
      <InfoList>
        <InfoItem>
          <b>Subject:</b> {item.subject}
        </InfoItem>
        <InfoItem>
          <b>Final Grade:</b> {item.GPA}
        </InfoItem>
        <InfoItem>
          <b>Thesis:</b> {item.thesis}
        </InfoItem>
        {item.description.map((desc, index) => (
          <InfoItem key={index}>{desc}</InfoItem>
        ))}
      </InfoList>
    );
  };

  return (
    <StyledAccordion
      disableGutters
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <StyledAccordionSummary expandIcon={<ExpandMoreRounded />}>
        <SummaryContent>
          <SummaryImage $imageUrl={item.image} />
          <SummaryText>
            <Heading>
              {title}
              <HighlightedText>
                @{' '}
                <InstitutionLink
                  href={item.institutionLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.institution}
                </InstitutionLink>
              </HighlightedText>
            </Heading>
            <Duration>
              {item.duration.map((d, index) => (
                <div key={index}>{d}</div>
              ))}
            </Duration>
          </SummaryText>
        </SummaryContent>
      </StyledAccordionSummary>
      <AccordionDetails>{renderDetails()}</AccordionDetails>
    </StyledAccordion>
  );
};
