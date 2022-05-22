import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

interface ToolComponentProps {
  logoURL: string;
  title: string;
}

const useStyles = makeStyles<Theme, ToolComponentProps>(() => ({
  toolComponent: {},
  logo: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backgroundImage: (props) => `url(${props.logoURL})`,
    backgroundSize: '80px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 85,
    width: 85,
    borderRadius: '50%',
  },
}));

export const ToolComponent = (props: ToolComponentProps): ReactElement => {
  const classes = useStyles(props);
  return (
    <div className={classes.toolComponent}>
      <div className={classes.logo}></div>
    </div>
  );
};
