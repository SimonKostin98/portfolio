import { CustomCard } from '@components/customizations/customCard.component';
import { styled, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface ITechCardProps {
  name: string;
  icon: string;
  link: string;
}

const CardWrapper = styled(CustomCard)(({ theme }) => ({
  width: 120,
  height: 120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  gap: 12,
  cursor: 'pointer',

  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.08)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 5px 15px ${theme.palette.primary.main}20`,
    zIndex: 1,
  },
}));

const TechIcon = styled('img')({
  width: 45,
  height: 45,
  objectFit: 'contain',
});

export const TechCard = ({
  name,
  icon,
  link,
}: ITechCardProps): ReactElement => {
  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <CardWrapper onClick={handleClick}>
      <TechIcon src={icon} alt={name} />
      <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
        {name}
      </Typography>
    </CardWrapper>
  );
};
