import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      topHeight: number,
      bottomHeight: number,
      paperLight: string,
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      topHeight?: number,
      bottomHeight?: number,
      paperLight: string,
    }
  }
}