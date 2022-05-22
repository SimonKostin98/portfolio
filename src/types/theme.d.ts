// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles/createTheme' {
  interface Theme {
    custom: {
      topHeight: number;
      bottomHeight: number;
      paperLight: string;
      backgroundGradient: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      topHeight?: number;
      bottomHeight?: number;
      paperLight?: string;
      backgroundGradient?: string;
    };
  }
}
