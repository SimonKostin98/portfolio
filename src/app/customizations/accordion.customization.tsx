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

export const CustomAccordionDetails = withStyles(() => ({
  root: {
    textAlign: 'left',
    fontSize: 'larger',

    '& td': {
      verticalAlign: 'top',
    },
  },
}))(AccordionDetails);

export const CustomAccordionSummary = withStyles(() => ({
  root: {
    fontSize: 'large',
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
