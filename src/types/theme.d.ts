// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles/' {
  interface Theme {
    custom: {
      navigationHeight: number;
      footerHeight: number;
      paperLight: string;
      cardShadow: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      navigationHeight?: number;
      footerHeight?: number;
      paperLight?: string;
      cardShadow?: string;
    };
  }
}
