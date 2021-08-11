import {Theme, ThemeOptions} from '@material-ui/core/styles/createTheme'
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    custom: {
      topHeight: number,
      bottomHeight: number,
      paperLight: string,
      backgroundGradient: string,
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      topHeight?: number,
      bottomHeight?: number,
      paperLight?: string,
      backgroundGradient?: string,
    }
  }
}