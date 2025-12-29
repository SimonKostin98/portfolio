import { keyframes, styled } from '@mui/material';
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
const scrollLeft = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' },
});

const scrollRight = keyframes({
  '0%': { transform: 'translateX(-50%)' },
  '100%': { transform: 'translateX(0)' },
});

const CarouselWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  paddingBlock: theme.spacing(2.5),
  marginInline: 'auto',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  maskImage:
    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  WebkitMaskImage:
    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
}));

const CarouselTrack = styled('div')<{
  $direction: 'left' | 'right';
  $speed: number;
}>(({ theme, $direction, $speed }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: 'max-content',
  animation: `${$direction === 'left' ? scrollLeft : scrollRight} ${$speed}s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
}));

interface ICarouselProps {
  children: ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const Carousel = ({
  children,
  direction = 'left',
  speed = 40,
}: ICarouselProps): ReactElement => {
  // We duplicate the children to ensure seamless looping
  const duplicatedChildren = Array.from({ length: 4 }).flatMap((_, iteration) =>
    Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement, {
          key: `duplicate-${iteration}-${index}`,
        });
      }
      return child;
    }),
  );

  return (
    <CarouselWrapper>
      <CarouselTrack $direction={direction} $speed={speed}>
        {duplicatedChildren}
      </CarouselTrack>
    </CarouselWrapper>
  );
};
