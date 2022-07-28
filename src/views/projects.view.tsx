import CSSIcon from '@assets/programming/CSS.svg';
import KotlinIcon from '@assets/programming/Kotlin.svg';
import PythonIcon from '@assets/programming/Python.svg';
import SASSIcon from '@assets/programming/SASS.svg';
import SQLIcon from '@assets/programming/SQL.svg';
import TSIcon from '@assets/programming/TS.svg';
import Dogr from '@assets/projects/Dogr.webp';
import ElectionSystem from '@assets/projects/electionSystem.webp';
import MasterThesis from '@assets/projects/MasterThesis.webp';
import BootstrapIcon from '@assets/tools/bootstrap.svg';
import FlaskIcon from '@assets/tools/flask.webp';
import GradleIcon from '@assets/tools/gradle.svg';
import KTorIcon from '@assets/tools/ktor.svg';
import MUIIcon from '@assets/tools/materialUI.svg';
import MongoDBIcon from '@assets/tools/mongodb.svg';
import NodeIcon from '@assets/tools/node.svg';
import PostgresIcon from '@assets/tools/postgresql.svg';
import ReactIcon from '@assets/tools/react.svg';
import VueIcon from '@assets/tools/vue.svg';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ProjectCard } from '@src/components/content/projects/projectCard.component';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  projectsView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2vh 2.5vw 2vh 1vw',

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      height: `calc(100% - ${theme.custom.navigationHeight}px)`,
    },
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      fontSize: 'x-large',
    },
  },
  projectCardWrapper: {
    height: '92.5%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 30,

    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr',
      gap: 10,
    },
  },
}));

const dogrTechnologies = {
  frontend: [
    { icon: TSIcon as string, tooltip: 'Typescript' },
    { icon: ReactIcon as string, tooltip: 'React' },
    { icon: BootstrapIcon as string, tooltip: 'Bootstrap' },
    { icon: SASSIcon as string, tooltip: 'SASS' },
  ],
  backend: [
    { icon: KotlinIcon as string, tooltip: 'Kotlin' },
    { icon: KTorIcon as string, tooltip: 'KTor' },
    { icon: GradleIcon as string, tooltip: 'Gradle' },
    { icon: PostgresIcon as string, tooltip: 'PostgreSQL' },
  ],
};

const ctapfTechnologies = {
  frontend: [
    { icon: TSIcon as string, tooltip: 'Typescript' },
    { icon: ReactIcon as string, tooltip: 'React' },
    { icon: MUIIcon as string, tooltip: 'MaterialUI' },
  ],
  backend: [
    { icon: PythonIcon as string, tooltip: 'Python' },
    { icon: FlaskIcon as string, tooltip: 'Flask' },
    { icon: MongoDBIcon as string, tooltip: 'MongoDB' },
  ],
};

const electionTechnologies = {
  frontend: [
    { icon: TSIcon as string, tooltip: 'Typescript' },
    { icon: VueIcon as string, tooltip: 'VueJS' },
    { icon: BootstrapIcon as string, tooltip: 'Bootstrap' },
    { icon: CSSIcon as string, tooltip: 'CSS' },
  ],
  backend: [
    { icon: TSIcon as string, tooltip: 'Typescript' },
    { icon: NodeIcon as string, tooltip: 'Node.js' },
    { icon: SQLIcon as string, tooltip: 'SQL' },
    { icon: PostgresIcon as string, tooltip: 'PostgreSQL' },
  ],
};

export const ProjectsView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.projectsView} id="Projects">
      <div className={classes.heading}>My Projects</div>
      <div className={classes.projectCardWrapper}>
        <ProjectCard
          imageUrl={Dogr as string}
          title="Dogr"
          technologies={dogrTechnologies}
          status="In Progress"
          description="Todo"
        />
        <ProjectCard
          imageUrl={ElectionSystem as string}
          title="State Election"
          technologies={electionTechnologies}
          status="Done"
          description="Todo"
        />
        <ProjectCard
          imageUrl={MasterThesis as string}
          title="CTAPF"
          technologies={ctapfTechnologies}
          status="Done"
          description="Todo"
        />
      </div>
    </div>
  );
};
