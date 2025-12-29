import { Paper, styled } from '@mui/material';

export const CustomCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(30, 30, 30, 0.5)', // Base dark semi-transparent
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: theme.custom.cardShadow,
  transition: 'all 0.3s ease',
  color: theme.palette.text.primary,
}));
