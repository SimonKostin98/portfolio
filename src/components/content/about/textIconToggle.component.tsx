import { Theme, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement, useEffect, useState } from 'react';

interface ITextIconToggleProps {
  text: string;
  iconUrl: string;
}

const useStyles = makeStyles<Theme, ITextIconToggleProps>(() => ({
  textIconToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
  },
  icon: {
    position: 'absolute',
    width: '2.5vw',
    height: '2.5vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: ({ iconUrl }) => `url(${iconUrl})`,
  },

  transitionStyles: {
    entering: {
      opacity: 0.5,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 0.5,
    },
    exited: {
      opacity: 0,
    },
  },
}));

export const TextIconToggle = (props: ITextIconToggleProps): ReactElement => {
  const classes = useStyles(props);
  const [showIcon, setShowIcon] = useState(Math.random() < 0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcon(Math.random() < 0.6);
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className={classes.textIconToggle}>
      <Zoom in={!showIcon} timeout={1500}>
        <span className={classes.text}>{props.text}</span>
      </Zoom>
      <Zoom in={showIcon} timeout={1500}>
        <div className={classes.icon} />
      </Zoom>
    </div>
  );
};
