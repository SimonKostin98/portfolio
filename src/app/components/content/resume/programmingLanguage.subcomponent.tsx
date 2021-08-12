import { CustomProgress } from '@customizations/progress.customization';
import { makeStyles, Theme, Tooltip } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface ProgrammingLanguageProps {
  logoURL: string;
  title: string;
  rating: number;
}

const useStyles = makeStyles<Theme, ProgrammingLanguageProps>(
  (theme: Theme) => ({
    programmingLanguage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: theme.custom.paperLight,
      borderRadius: 10,
      padding: '10px 10px 15px',
      cursor: 'pointer',
      boxShadow: theme.shadows[5],
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
      paddingLeft: '5px',
    },
    heading: {
      fontSize: 'x-large',
      fontWeight: 'bolder',
    },
    image: {
      backgroundImage: (props) => `url("${props.logoURL}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 'calc(1vh + 1vw)',
      width: 'calc(1vh + 1vw)',
    },
    icon: {
      fontSize: '50px',
    },
    progressWrapper: {
      marginTop: '5px',
      width: '100%',
      display: 'flex',
      gap: '4px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    progressHeader: {
      color: theme.palette.text.secondary,
    },
  }),
);

export const ProgrammingLanguage = (
  props: ProgrammingLanguageProps,
): ReactElement => {
  const classes = useStyles(props);
  return (
    <div className={classes.programmingLanguage}>
      <div className={classes.header}>
        <div className={classes.image} />
        <div className={classes.heading}>{props.title}</div>
      </div>
      <div className={classes.progressWrapper}>
        <div className={classes.progressHeader}>
          Proficiency: {props.rating / 20} / 5
        </div>
        <CustomProgress variant="determinate" value={props.rating} />
      </div>
    </div>
  );
};
