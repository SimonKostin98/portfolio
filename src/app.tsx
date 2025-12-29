import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { ReactElement } from 'react';

import { GlobalStyles } from './globalStyles';
import { ParticlesBackground } from './particlesBackground';
import { theme } from './theme';

export const App = (): ReactElement => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <GlobalStyles />
        <CssBaseline />
        <ParticlesBackground />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
