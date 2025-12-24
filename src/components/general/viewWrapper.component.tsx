import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface ViewWrapperProps {
  children: ReactNode;
  id?: string;
}

const Wrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2vh 2.5vw 2vh 1.5vw',

  [theme.breakpoints.down('md')]: {
    padding: '2vh 2.5vw',
  },
}));

export const ViewWrapper = ({ children, id }: ViewWrapperProps) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};
