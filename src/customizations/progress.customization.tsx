import { LinearProgress, Theme } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CustomProgress = withStyles((theme: Theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
    width: '100%',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'theme.palette.primary.main',
  },
}))(LinearProgress);
