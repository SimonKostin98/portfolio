import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      topHeight: number,
      bottomHeight: number
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      topHeight?: number,
      bottomHeight?: number
    }
  }
}