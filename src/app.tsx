import { FullPageProvider } from '@contexts/fullPage.provider';
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { ReactElement } from 'react';

import { ParticlesBackground } from './particlesBackground';
import { theme } from './theme';

export const App = (): ReactElement => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <GlobalStyles
          styles={{
            '*::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        />
        <CssBaseline />
        <FullPageProvider>
          <ParticlesBackground />
        </FullPageProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
