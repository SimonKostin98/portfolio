import { Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export const CustomRating = withStyles((theme: Theme) => ({
  iconFilled: {
    color: '#E54444',
  },
  iconHover: {
    color: theme.palette.primary.light,
  },
}))(Rating);
