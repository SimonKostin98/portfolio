import { Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export const CustomRating = withStyles((theme: Theme) => ({
  iconFilled: {
    color: theme.palette.secondary.main,
  },
  iconHover: {
    color: theme.palette.primary.light,
  },
}))(Rating);
