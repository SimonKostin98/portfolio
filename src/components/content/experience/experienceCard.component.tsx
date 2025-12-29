import { ExperienceItem } from '@components/content/experience/experienceDetails';
import { CustomButton } from '@components/customizations/customButton.component';
import { CustomCard } from '@components/customizations/customCard.component';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';

const CardContainer = styled('div')({
  perspective: '1000px',
  width: '100%',
  height: '450px', // Fixed height for consistent flipping
});

const CardInner = styled('div')<{ $isFlipped: boolean }>(({ $isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  transform: $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const CardFace = styled(CustomCard)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateX(0deg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
});

const CardBack = styled(CardFace)({
  transform: 'rotateY(180deg) rotateX(0deg)',
  justifyContent: 'flex-start',
  overflowY: 'auto',
});

const LargeLogo = styled('img')({
  width: 120,
  height: 120,
  objectFit: 'contain',
  marginBottom: 20,
  borderRadius: '50%',
  backgroundColor: 'white',
  padding: 10,
});

const FlipButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const InfoList = styled('ul')({
  textAlign: 'left',
  listStyle: 'none',
  padding: 0,
  margin: '20px 0',
  width: '100%',
});

const InfoItem = styled('li')(({ theme }) => ({
  paddingLeft: 25,
  marginBottom: 10,
  position: 'relative',
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  '&::before': {
    content: '"▹"',
    color: theme.palette.primary.main,
    position: 'absolute',
    left: 0,
    top: 0,
  },
}));

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard = ({ item }: ExperienceCardProps): ReactElement => {
  const [isFlipped, setIsFlipped] = useState(false);

  const title = item.type === 'work' ? item.role : item.degree;
  const subtitle = item.type === 'education' ? item.subject : '';

  const renderBackContent = () => {
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
        {item.GPA && (
          <InfoItem>
            <b>Grade:</b> {item.GPA}
          </InfoItem>
        )}
        {item.thesis && (
          <InfoItem>
            <b>Thesis:</b> {item.thesis}
          </InfoItem>
        )}
        {item.description.map((desc, index) => (
          <InfoItem key={index}>{desc}</InfoItem>
        ))}
      </InfoList>
    );
  };

  return (
    <CardContainer>
      <CardInner $isFlipped={isFlipped}>
        {/* Front */}
        <CardFace>
          <LargeLogo src={item.image} alt={item.institution} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" color="primary.main" gutterBottom>
              {subtitle}
            </Typography>
          )}
          <Typography variant="h6" color="text.secondary">
            {item.institution}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, mb: 2 }}
          >
            {item.duration.join(' | ')}
          </Typography>
          <FlipButton
            rounded
            disableUppercase
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setIsFlipped(true)}
          >
            Read more
          </FlipButton>
        </CardFace>

        {/* Back */}
        <CardBack>
          <Typography variant="h6" color="primary.main" gutterBottom>
            Details
          </Typography>
          {renderBackContent()}
          <FlipButton
            disableUppercase
            rounded
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            Back to Overview
          </FlipButton>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};
