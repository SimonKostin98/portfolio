import CSSIcon from '@assets/programming/CSS.svg';
import HTMLIcon from '@assets/programming/HTML.svg';
import KotlinIcon from '@assets/programming/Kotlin.svg';
import PythonIcon from '@assets/programming/Python.svg';
import SASSIcon from '@assets/programming/SASS.svg';
import TSIcon from '@assets/programming/TS.svg';
import BootstrapIcon from '@assets/tools/bootstrap.svg';
import DjangoIcon from '@assets/tools/django.svg';
import DockerIcon from '@assets/tools/docker.svg';
import FlaskIcon from '@assets/tools/flask.png';
import GitIcon from '@assets/tools/git.svg';
import MUIIcon from '@assets/tools/materialUI.svg';
import MongoIcon from '@assets/tools/mongodb.svg';
import NodeIcon from '@assets/tools/node.svg';
import PostgresIcon from '@assets/tools/postgresql.svg';
import ReactIcon from '@assets/tools/react.svg';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TagSphere from '@src/components/content/about/tagSphere.component';
import { TextIconToggle } from '@src/components/content/about/textIconToggle.component';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  aboutView: {
    height: '100%',
    width: '100%',
    padding: '40px 20px',
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
  },
  aboutContent: {
    height: '92.5%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: 25,
  },
  aboutInfo: {},
  aboutWordCloud: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 600,
    alignSelf: 'end',
    fontSize: 'calc(.7vh + .8vw)',
  },
}));

export const AboutView = (): ReactElement => {
  const classes = useStyles();

  const texts = [
    <TextIconToggle text="HTML" iconUrl={HTMLIcon as string} key={0} />,
    <TextIconToggle text="CSS" iconUrl={CSSIcon as string} key={1} />,
    <TextIconToggle text="React" iconUrl={ReactIcon as string} key={2} />,
    <TextIconToggle text="MaterialUI" iconUrl={MUIIcon as string} key={3} />,
    <TextIconToggle
      text="Bootstrap"
      iconUrl={BootstrapIcon as string}
      key={4}
    />,
    <TextIconToggle text="Django" iconUrl={DjangoIcon as string} key={5} />,
    <TextIconToggle text="Flask" iconUrl={FlaskIcon as string} key={6} />,
    <TextIconToggle text="Node" iconUrl={NodeIcon as string} key={7} />,
    <TextIconToggle text="Sass" iconUrl={SASSIcon as string} key={8} />,
    <TextIconToggle
      text="PostgreSQL"
      iconUrl={PostgresIcon as string}
      key={9}
    />,
    <TextIconToggle text="mongoDB" iconUrl={MongoIcon as string} key={10} />,
    <TextIconToggle text="Docker" iconUrl={DockerIcon as string} key={11} />,
    <TextIconToggle text="Python" iconUrl={PythonIcon as string} key={12} />,
    <TextIconToggle text="Typescript" iconUrl={TSIcon as string} key={13} />,
    <TextIconToggle text="Git" iconUrl={GitIcon as string} key={14} />,
    <TextIconToggle text="Kotlin" iconUrl={KotlinIcon as string} key={15} />,
  ];

  return (
    <div className={classes.aboutView} id="About">
      <div className={classes.heading}>About Me</div>
      <div className={classes.aboutContent}>
        <div className={classes.aboutInfo}></div>
        <div className={classes.aboutWordCloud}>
          <TagSphere texts={texts} radius={350} />
        </div>
      </div>
    </div>
  );
};
