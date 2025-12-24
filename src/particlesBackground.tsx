import { styled } from '@mui/material';
import { initParticlesEngine } from '@tsparticles/react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ReactElement, useEffect, useState } from 'react';

import { AppContent } from './appContent';
import { particlesOptions } from './config/particles.config';

const Background = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'black',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

export const ParticlesBackground = (): ReactElement => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return <></>;
  }

  return (
    <div>
      <Background>
        <Particles id="tsparticles" options={particlesOptions} />
      </Background>
      <AppContent />
    </div>
  );
};
