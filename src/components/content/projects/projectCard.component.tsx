import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { IconButton, Theme, Tooltip, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement, useLayoutEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { ProjectCardDialog } from './projectCardDialog.component';

interface IProjectCardProps {
  imageUrl: string;
  title: string;
  purpose: string;
  status: string;
  description: string;
  technologies: {
    frontend: { icon: string; tooltip: string }[];
    backend: { icon: string; tooltip: string }[];
  };
}

const useStyles = makeStyles<Theme, IProjectCardProps>((theme: Theme) => ({
  projectCard: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    transition: 'transform .15s linear',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  front: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  frontBlur: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 'calc(3.5vh + 2.5vw)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '7.5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    [theme.breakpoints.down('lg')]: {
      height: '15%',
    },
  },
  iconButton: {
    color: 'rgba(250, 250, 250, 0.9)',
    fontSize: 'calc(1.25vh + 1.25vw)',
  },
  back: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.custom.paperLight,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
  },
  backHeading: {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '3.5vh',

    [theme.breakpoints.down('lg')]: {
      fontSize: '2.25vh',
      height: '15%',
    },
  },
  backContent: {
    padding: 15,
    width: '100%',
    height: '82.5%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    fontSize: 'calc(.6vh + .6vw)',

    [theme.breakpoints.down('lg')]: {
      height: '70%',
      fontSize: 'calc(.85vh + .75vw)',
    },
  },
  backTableWrapper: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  backTable: {
    fontWeight: 'bold',
    borderSpacing: '10px 5px',
    borderCollapse: 'separate',
    alignSelf: 'start',
    marginLeft: '-10px',
  },
  technologies: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },
  programmingIcon: {
    width: 'calc(.7vh + .7vw)',
    height: 'calc(.7vh + .7vw)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 5,

    [theme.breakpoints.down('lg')]: {
      width: 20,
      height: 20,
    },
  },
  techStackButton: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

export const ProjectCard = (props: IProjectCardProps): ReactElement => {
  const classes = useStyles(props);
  const [flipped, setFlipped] = useState(false);
  const { purpose, technologies, title, status, description } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toDoDialogOpen, setToDoDialogOpen] = useState(false);
  const theme = useTheme();

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > theme.breakpoints.values.lg) {
        setDialogOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const table = (
    <table className={classes.backTable}>
      <tbody>
        <tr>
          <td>Purpose:</td>
          <td style={{ fontWeight: 'normal' }}>{purpose}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td style={{ fontWeight: 'normal' }}>{status}</td>
        </tr>
        <tr>
          <td>Frontend:</td>
          <td>
            <div className={classes.technologies}>
              {technologies.frontend.map((technologie, index) => (
                <Tooltip
                  title={technologie.tooltip}
                  placement="top"
                  arrow
                  key={index}
                >
                  <div
                    className={classes.programmingIcon}
                    style={{
                      backgroundImage: `url(${technologie.icon})`,
                    }}
                  />
                </Tooltip>
              ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>Backend:</td>
          <td>
            <div className={classes.technologies}>
              {technologies.backend.map((technologie, index) => (
                <Tooltip
                  title={technologie.tooltip}
                  placement="top"
                  arrow
                  key={index}
                >
                  <div
                    className={classes.programmingIcon}
                    style={{
                      backgroundImage: `url(${technologie.icon})`,
                    }}
                  />
                </Tooltip>
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );

  const toDoDialogText = (
    <div>A demo of the project and the source code will be available soon</div>
  );

  return (
    <ReactCardFlip isFlipped={flipped} containerClassName={classes.projectCard}>
      <div className={classes.front}>
        <div className={classes.frontBlur}>
          <div className={classes.title}>{title}</div>
          <div className={classes.buttons}>
            <Tooltip title="Source Code" placement="top" arrow>
              <IconButton onClick={() => setToDoDialogOpen(true)}>
                <GitHubIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Live Demo" placement="top" arrow>
              <IconButton onClick={() => setToDoDialogOpen(true)}>
                <PlayCircleIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Details" placement="top" arrow>
              <IconButton onClick={() => setFlipped(true)}>
                <InfoIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={classes.back}>
        <ProjectCardDialog
          title={title}
          open={dialogOpen}
          closeDialog={() => setDialogOpen(false)}
          table={table}
        />
        {/*ToDo: Remove this dialog after adding the corresponding demo links */}
        <ProjectCardDialog
          title={title}
          open={toDoDialogOpen}
          closeDialog={() => setToDoDialogOpen(false)}
          table={toDoDialogText}
        />
        <div className={classes.backHeading}>{props.title}</div>
        <div className={classes.backContent}>
          <div className={classes.backDescription}>{description}</div>
          <span className={classes.backTableWrapper}>{table}</span>
        </div>
        <div
          className={classes.buttons}
          style={{ borderTop: '1px solid white' }}
        >
          <Tooltip title="Source Code" placement="top" arrow>
            <IconButton onClick={() => setToDoDialogOpen(true)}>
              <GitHubIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Live Demo" placement="top" arrow>
            <IconButton onClick={() => setToDoDialogOpen(true)}>
              <PlayCircleIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Overview" placement="top" arrow>
            <IconButton onClick={() => setFlipped(false)}>
              <InfoIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Show Technologies"
            placement="top"
            arrow
            className={classes.techStackButton}
          >
            <IconButton onClick={() => setDialogOpen(true)}>
              <LayersRoundedIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </ReactCardFlip>
  );
};
