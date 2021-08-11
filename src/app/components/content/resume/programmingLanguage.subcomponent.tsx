import { CustomRating } from '@customizations/rating.customization';
import { makeStyles, Theme } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { ReactElement } from 'react';

interface ProgrammingLanguageProps {
  logoURL: string;
  title: string;
  rating: number;
}

const useStyles = makeStyles<Theme, ProgrammingLanguageProps>(() => ({
  programmingLanguage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
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
}));

export const ProgrammingLanguage = (
  props: ProgrammingLanguageProps,
): ReactElement => {
  const classes = useStyles(props);
  return (
    <div className={classes.programmingLanguage}>
      <div className={classes.contentWrapper}>
        <div className={classes.header}>
          <div className={classes.image} />
          <div className={classes.heading}>{props.title}</div>
        </div>
        <CustomRating
          name="customized-color"
          defaultValue={props.rating}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
          icon={<RemoveIcon className={classes.icon} />}
          size="large"
        />
      </div>
    </div>
  );
};
