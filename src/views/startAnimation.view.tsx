import { keyframes, styled, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

const stackAnimation = keyframes({
  from: { transform: 'translate(100%, 120%)' },
  to: { transform: 'translate(0px, 120%)' },
});

const borderAnimation = keyframes({
  '0%': { backgroundSize: '0 10px, 10px 0, 0 10px, 10px 0' },
  '25%': { backgroundSize: '100% 10px, 10px 0, 0 10px, 10px 0' },
  '50%': { backgroundSize: '100% 10px, 10px 100%, 0 10px, 10px 0' },
  '75%': { backgroundSize: '100% 10px, 10px 100%, 100% 10px, 10px 0' },
  '100%': { backgroundSize: '100% 10px, 10px 100%, 100% 10px, 10px 100%' },
});

const appearAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const StartAnimationViewContainer = styled(motion.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContentWrapper = styled('div')(({ theme }) => ({
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5vmin 14.5vmin 5vmin 24vmin',
  backgroundRepeat: 'no-repeat',
  // Animated border using 4 gradients (top, right, bottom, left)
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to bottom, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to right, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%), linear-gradient(to bottom, ${theme.palette.primary.main} 100%, ${theme.palette.primary.main} 100%)`,
  backgroundSize: '0 0, 0 0, 0 0, 0 0',
  backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
  animation: `${borderAnimation} 1.25s ease-out 2.25s forwards`,
}));

const Stack = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column-reverse',
  transform: 'translate(100%, 120%)',
  opacity: 0,
  animation: `${appearAnimation} .5s ease-in forwards, ${stackAnimation} .75s linear .5s forwards`,
});

const StackElement = styled('div')({
  height: '14.5vmin',
  width: '14.5vmin',
  transformOrigin: '0 0',
  // Isometric projection: rotate, skew, and scale to create 3D plate effect
  transform: 'rotate(210deg) skew(-30deg) scaleY(0.864)',
  borderRadius: '1.8vmin',
  marginTop: '-66%',
});

const Title = styled('div')({
  fontSize: '22vmin',
  fontWeight: 'bold',
});

const FirstLetter = styled('span')({
  opacity: 0,
  animation: `${appearAnimation} .5s linear 1.25s forwards`,
});

const SecondLetter = styled('span')({
  opacity: 0,
  animation: `${appearAnimation} .5s linear 1.75s forwards`,
});

// Creates stacked shadow effect for 3D depth illusion
const createShadow = (color: string, depth: number): string => {
  let result =
    depth <= 0 ? '' : `calc(-0.12vmin) calc(-0.12vmin) 0 1px ${color}`;

  for (let i = 2; i <= depth; i++) {
    result += `, calc(-${i * 0.12}vmin) calc(-${i * 0.12}vmin) 0 1px ${color}`;
  }

  return result;
};

export const StartAnimationView = (): ReactElement => {
  const theme = useTheme();

  return (
    <StartAnimationViewContainer
      key="start-animation"
      exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
    >
      <ContentWrapper>
        <Stack>
          <StackElement
            sx={{
              backgroundColor: theme.palette.primary.dark,
              boxShadow: createShadow('#8c6b32', 20),
            }}
          />
          <StackElement
            sx={{
              backgroundColor: theme.palette.primary.main,
              boxShadow: createShadow('#b3a475', 20),
            }}
          />
          <StackElement
            sx={{
              backgroundColor: theme.palette.primary.light,
              boxShadow: createShadow('#f0eadd', 20),
            }}
          />
        </Stack>
        <Title>
          <FirstLetter>S</FirstLetter>
          <SecondLetter>K</SecondLetter>
        </Title>
      </ContentWrapper>
    </StartAnimationViewContainer>
  );
};
