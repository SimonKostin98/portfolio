import { LinearProgress, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const CustomProgress = withStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '100%',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);
