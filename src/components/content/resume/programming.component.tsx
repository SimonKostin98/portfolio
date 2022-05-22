import cppLogo from '@assets/programming/Cpp.svg';
import cssLogo from '@assets/programming/CSS.png';
import htmlLogo from '@assets/programming/HTML.png';
import javaLogo from '@assets/programming/Java.svg';
import jsLogo from '@assets/programming/JS.svg';
import kotlinLogo from '@assets/programming/Kotlin.svg';
import pythonLogo from '@assets/programming/Python.svg';
import sassLogo from '@assets/programming/SASS.svg';
import sqlLogo from '@assets/programming/SQL.png';
import tsLogo from '@assets/programming/TS.svg';
import vbaLogo from '@assets/programming/VBA.svg';
import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { ProgrammingLanguage } from './programmingLanguage.subcomponent';

const useStyles = makeStyles(() => ({
  programmingComponent: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  heading: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    margin: '15px',
  },
  scrollbarWrapper: {
    position: 'absolute',
    bottom: '10px',
    top: '10%',
    width: '100%',
  },
  languages: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '3rem',
    padding: '15px',
    width: '100%',
  },
}));

export const ProgrammingComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.programmingComponent}>
      <div className={classes.heading}>Programming Languages</div>
      <div className={classes.scrollbarWrapper}>
        <Scrollbars
          hideTracksWhenNotNeeded={true}
          style={{ height: '100%', width: '100%' }}
        >
          <div className={classes.languages}>
            <ProgrammingLanguage
              title="Java"
              logoURL={javaLogo as string}
              rating={90}
            />
            <ProgrammingLanguage
              title="Typescript"
              logoURL={tsLogo as string}
              rating={80}
            />
            <ProgrammingLanguage
              title="Javascript"
              logoURL={jsLogo as string}
              rating={80}
            />
            <ProgrammingLanguage
              title="SQL"
              logoURL={sqlLogo as string}
              rating={80}
            />
            <ProgrammingLanguage
              title="HTML"
              logoURL={htmlLogo as string}
              rating={80}
            />
            <ProgrammingLanguage
              title="Kotlin"
              logoURL={kotlinLogo as string}
              rating={70}
            />
            <ProgrammingLanguage
              title="CSS"
              logoURL={cssLogo as string}
              rating={70}
            />
            <ProgrammingLanguage
              title="SASS"
              logoURL={sassLogo as string}
              rating={70}
            />
            <ProgrammingLanguage
              title="Python"
              logoURL={pythonLogo as string}
              rating={60}
            />
            <ProgrammingLanguage
              title="C++"
              logoURL={cppLogo as string}
              rating={50}
            />
            <ProgrammingLanguage
              title="VBA"
              logoURL={vbaLogo as string}
              rating={50}
            />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};
