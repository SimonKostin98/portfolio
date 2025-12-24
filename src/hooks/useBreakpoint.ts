import { useMediaQuery, useTheme } from '@mui/material';

export interface Breakpoints {
  $isMobile: boolean;
  $isTablet: boolean;
  $isDesktop: boolean;
  $isMobileOrTablet: boolean;
}

export const useBreakpoint = (): Breakpoints => {
  const theme = useTheme();
  const $isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const $isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const $isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const $isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return { $isMobile, $isTablet, $isDesktop, $isMobileOrTablet };
};
