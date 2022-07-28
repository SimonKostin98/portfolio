import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { IconButton, Theme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface IProjectCardProps {
  imageUrl: string;
  title: string;
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.75rem',
  },
  backContent: {
    padding: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  backTable: {
    fontWeight: 'bold',
    borderSpacing: '10px 5px',
    borderCollapse: 'separate',
    alignSelf: 'start',
  },
  technologies: {
    width: '100%',
    display: 'flex',
    gap: 10,
  },
  programmingIcon: {
    width: 25,
    height: 25,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 5,
  },
}));

export const ProjectCard = (props: IProjectCardProps): ReactElement => {
  const classes = useStyles(props);
  const [flipped, setFlipped] = useState(false);
  const { technologies, title, status, description } = props;

  return (
    <ReactCardFlip isFlipped={flipped} containerClassName={classes.projectCard}>
      <div className={classes.front}>
        <div className={classes.frontBlur}>
          <div className={classes.title}>{title}</div>
          <div className={classes.buttons}>
            <Tooltip title="Source Code" placement="top" arrow>
              <IconButton>
                <GitHubIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Live Demo" placement="top" arrow>
              <IconButton>
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
        <div className={classes.backHeading}>{props.title}</div>
        <div className={classes.backContent}>
          <div className={classes.backDescription}>{description}</div>
          <table className={classes.backTable}>
            <tbody>
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
        </div>
        <div
          className={classes.buttons}
          style={{ borderTop: '1px solid white' }}
        >
          <Tooltip title="Source Code" placement="top" arrow>
            <IconButton>
              <GitHubIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Live Demo" placement="top" arrow>
            <IconButton>
              <PlayCircleIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Overview" placement="top" arrow>
            <IconButton onClick={() => setFlipped(false)}>
              <InfoIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </ReactCardFlip>
  );
};
