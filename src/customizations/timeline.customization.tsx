import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Theme } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

export const CustomTimeline = withStyles((theme: Theme) => ({}))(Timeline);

export const CustomTimelineContent = withStyles((theme: Theme) => ({
  root: {
    paddingTop: 30,
  },
}))(TimelineContent);

export const CustomTimelineOppositeContent = withStyles((theme: Theme) => ({
  root: {
    fontWeight: 'bold',
    paddingTop: 40,
    fontSize: 'calc(1vh + 1.2vw)',
    display: 'flex',
    justifyContent: 'center',
  },
}))(TimelineOppositeContent);

export const CustomTimelineSeparator = withStyles((theme: Theme) => ({
  root: {},
}))(TimelineSeparator);

export const CustomTimelineDot = withStyles((theme: Theme) => ({
  root: {
    padding: 0,
    border: 0,
  },
}))(TimelineDot);

export const CustomTimelineConnector = withStyles((theme: Theme) => ({
  root: {
    minHeight: '3vh',
  },
}))(TimelineConnector);