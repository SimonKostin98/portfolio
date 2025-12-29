// src/components/customizations/customTextField.component.tsx
import { TextField, styled } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(30, 30, 30, 0.5)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    borderRadius: theme.shape.borderRadius,
    
    transition: 'all 0.3s ease',
    color: theme.palette.text.primary,
  },
}));