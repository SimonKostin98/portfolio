import profilePictureURL from '@assets/images/defaultAvatar.jpg';
import { Button, makeStyles, Theme } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';

import { NavigationBarResume } from '../../navigation/navigationBar.component';
import { EducationComponent } from './education.component';
import { ProgrammingComponent } from './programming.component';
import { ToolsComponent } from './tools.component';

const useStyles = makeStyles((theme: Theme) => ({
  resumeComponent: {
    top: theme.custom.topHeight,
    bottom: theme.custom.bottomHeight,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '5%',
  },
  personalInformation: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: 'calc(18vw + 5vh)',
    height: 'calc(18vw + 5vh)',
    backgroundImage: `url(${profilePictureURL as string})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 'calc(2vh + 2vw)',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 'calc(1.5vh + 1.5vw)',
    fontWeight: 'bolder',
    color: theme.palette.primary.main,
  },
  age: {
    fontSize: 'calc(1.5vh + 1.5vw)',
    fontWeight: 'bolder',
    color: 'white',
  },
  button: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    color: 'white',
    fontWeight: 'bold',
    WebkitTextStroke: '0',
    marginTop: '10px',
    borderRadius: '10rem',
    fontSize: 'calc(0.5vh + 0.5vw)',
  },
  extraInformation: {
    width: '70%',
    padding: '30px 40px 30px 0',
  },
  card: {
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    boxShadow: theme.shadows[5],
    borderRadius: '25px',
  },
}));

export const ResumeComponent = (): ReactElement => {
  const [active, setActive] = useState(3);
  const classes = useStyles();
  return (
    <div className={classes.resumeComponent}>
      <div className={classes.personalInformation}>
        <div className={classes.imageWrapper} />
        <div className={classes.textWrapper}>
          <div className={classes.name}>Simon Kostin</div>
          <div className={classes.title}>Full Stack Developer</div>
          <div className={classes.age}>22 Years old</div>
          <Button className={classes.button} variant="contained" size="large">
            Download CV
          </Button>
        </div>
      </div>
      <div className={classes.extraInformation}>
        <div className={classes.card}>
          <NavigationBarResume
            active={active}
            setActive={(newValue: number) => setActive(newValue)}
          />
          {active === 1 && <EducationComponent />}
          {active === 2 && <ProgrammingComponent />}
          {active === 3 && <ToolsComponent />}
        </div>
      </div>
    </div>
  );
};
