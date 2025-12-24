import { styled, Zoom } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';

interface ITextIconToggleProps {
  text: string;
  iconUrl: string;
}

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Text = styled('span')({
  position: 'absolute',
});

const Icon = styled('div')<{ iconUrl: string }>(({ iconUrl }) => ({
  position: 'absolute',
  width: '2.5vw',
  height: '2.5vw',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${iconUrl})`,
}));

const getInitialState = (text: string): boolean => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return hash % 2 === 0;
};

export const TextIconToggle = (props: ITextIconToggleProps): ReactElement => {
  const { text, iconUrl } = props;
  const [showIcon, setShowIcon] = useState(() => getInitialState(text));

  useEffect(() => {
    const interval = setInterval(
      () => {
        setShowIcon(Math.random() < 0.6);
      },
      4000 + Math.random() * 2000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Zoom in={!showIcon} timeout={1500}>
        <Text>{text}</Text>
      </Zoom>
      <Zoom in={showIcon} timeout={1500}>
        <Icon iconUrl={iconUrl} />
      </Zoom>
    </Wrapper>
  );
};
