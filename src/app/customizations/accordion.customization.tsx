import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  withStyles,
} from '@material-ui/core';

export const CustomAccordion = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.custom.paperLight,
    borderRadius: '20px',
  },
}))(Accordion);

export const CustomAccordionDetails = withStyles((theme: Theme) => ({
  root: {
    height: 100,
  },
}))(AccordionDetails);

export const CustomAccordionSummary = withStyles((theme: Theme) => ({
  root: {
    fontSize: 'larger',
    fontWeight: 'bold',
    height: 56,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(55, 55, 55, .5)',
    },
  },
  expanded: {},
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
}))(AccordionSummary);
