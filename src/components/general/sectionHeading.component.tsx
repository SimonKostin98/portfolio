import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const HeadingWrapper = styled('div')(({ theme }) => ({
  fontSize: 'xx-large',
  fontWeight: 'bold',
  paddingLeft: theme.spacing(3.5),
  paddingBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: 'x-large',
    paddingBottom: theme.spacing(1.5),
  },
}));

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <HeadingWrapper>{children}</HeadingWrapper>;
};
