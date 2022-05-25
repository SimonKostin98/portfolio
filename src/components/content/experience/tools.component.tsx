import gitLogo from '@assets/tools/git.svg';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

import { ToolComponent } from './tool.subcomponent';

const useStyles = makeStyles(() => ({
  toolsComponent: {
    width: '100%',
    height: '100%',
    padding: '15px',
  },
  heading: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
  },
  tools: {},
}));

export const ToolsComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.toolsComponent}>
      <div className={classes.heading}>Tools</div>
      <div className={classes.tools}>
        <ToolComponent title="Git" logoURL={gitLogo as string} />
      </div>
    </div>
  );
};
