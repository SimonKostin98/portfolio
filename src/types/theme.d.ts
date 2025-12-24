// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles/' {
  interface Theme {
    custom: {
      navigationWidth: number;
      navigationHeight: number;
      footerHeight: number;
      paperLight: string;
      cardShadow: string;
      backgroundGradient: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      navigationWidth?: number;
      navigationHeight?: number;
      footerHeight?: number;
      paperLight?: string;
      cardShadow?: string;
      backgroundGradient?: string;
    };
  }
}
