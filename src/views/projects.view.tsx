import CSSIcon from '@assets/programming/CSS.svg';
import KotlinIcon from '@assets/programming/Kotlin.svg';
import PythonIcon from '@assets/programming/Python.svg';
import SASSIcon from '@assets/programming/SASS.svg';
import SQLIcon from '@assets/programming/SQL.svg';
import TSIcon from '@assets/programming/TS.svg';
import Dogr from '@assets/projects/Dogr.png';
import ElectionSystem from '@assets/projects/electionSystem.png';
import MasterThesis from '@assets/projects/MasterThesis.png';
import RecipeApp from '@assets/projects/recipeApp.png';
import BootstrapIcon from '@assets/tools/bootstrap.svg';
import FlaskIcon from '@assets/tools/flask.png';
import GradleIcon from '@assets/tools/gradle.svg';
import KTorIcon from '@assets/tools/ktor.svg';
import MUIIcon from '@assets/tools/materialUI.svg';
import MongoDBIcon from '@assets/tools/mongodb.svg';
import NodeIcon from '@assets/tools/node.svg';
import PostgresIcon from '@assets/tools/postgresql.svg';
import ReactIcon from '@assets/tools/react.svg';
import VueIcon from '@assets/tools/vue.svg';
import { makeStyles } from '@mui/styles';
import { ProjectCard } from '@src/components/content/projects/projectCard.component';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  projectsView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2vh 2.5vw 2vh 1vw',
  },
  heading: {
    height: '7.5%',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  projectCardWrapper: {
    height: '92.5%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  projectCardRowOne: {
    width: '100%',
    height: '50%',
    display: 'grid',
    gridTemplateColumns: '6fr 5fr',
    gap: 20,
  },
  projectCardRowTwo: {
    width: '100%',
    height: '50%',
    display: 'grid',
    gridTemplateColumns: '5fr 6fr',
    gap: 20,
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
        <div className={classes.projectCardRowOne}>
          <ProjectCard
            imageUrl={Dogr as string}
            title="Dogr"
            technologies={dogrTechnologies}
            status="In Progress"
            description="Todo"
          />
          <ProjectCard
            imageUrl={RecipeApp as string}
            title="Recipe App"
            technologies={dogrTechnologies}
            status="In Progress"
            description="Todo"
          />
        </div>
        <div className={classes.projectCardRowTwo}>
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
    </div>
  );
};
