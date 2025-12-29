import { styled } from '@mui/material';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CURSOR_SIZE = 350;

const CursorFollower = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  width: CURSOR_SIZE,
  height: CURSOR_SIZE,
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, rgba(0,0,0,0) 70%)`,
  pointerEvents: 'none',
  zIndex: 9999,
  mixBlendMode: 'screen',
  filter: 'blur(30px)',
  opacity: 0.2,
}));

export const GlowingCursor = () => {
  const mouseX = useMotionValue(-CURSOR_SIZE);
  const mouseY = useMotionValue(-CURSOR_SIZE);

  // Slightly slower spring for a "drifting" light feel
  const springConfig = { damping: 20, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Center the large circle on the cursor
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY]);

  return <CursorFollower style={{ x, y }} />;
};
