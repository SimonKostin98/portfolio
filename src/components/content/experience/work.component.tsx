import bmw from '@assets/work/BMW.webp';
import brose from '@assets/work/Brose.webp';
import ecomio from '@assets/work/Ecomio.webp';
import haba from '@assets/work/Haba.webp';
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
} from '@customizations/accordion.customization';
import {
  CustomTimeline,
  CustomTimelineConnector,
  CustomTimelineContent,
  CustomTimelineDot,
  CustomTimelineItem,
  CustomTimelineSeparator,
} from '@customizations/timeline.customization';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  educationComponent: {
    width: '100%',
    height: '100%',
  },
  timelineIcon: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  image1: {
    backgroundImage: `url(${ecomio as string})`,
  },
  image2: {
    backgroundImage: `url(${bmw as string})`,
  },
  image3: {
    backgroundImage: `url(${brose as string})`,
  },
  image4: {
    backgroundImage: `url(${haba as string})`,
  },
}));

export const WorkComponent = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.educationComponent}>
      <CustomTimeline>
        <CustomTimelineItem>
          <CustomTimelineSeparator>
            <CustomTimelineDot>
              <div className={clsx(classes.timelineIcon, classes.image1)} />
            </CustomTimelineDot>
            <CustomTimelineConnector />
          </CustomTimelineSeparator>
          <CustomTimelineContent>
            <CustomAccordion square={true}>
              <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                Full Stack Developer
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Company:</b>
                      </td>
                      <td>eco.mio</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Duration:</b>
                      </td>
                      <td>10.08.20 - 09.10.20</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Description:</b>
                      </td>
                      <td>
                        Analysis, Design and Implementation of a Drag-and-Drop
                        Tool, allowing to quickly build and deploy AWS
                        infrastructures (Use Case: Streaming Data Anomaly
                        Detection)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CustomAccordionDetails>
            </CustomAccordion>
          </CustomTimelineContent>
        </CustomTimelineItem>
        <CustomTimelineItem>
          <CustomTimelineSeparator>
            <CustomTimelineDot>
              <div className={clsx(classes.timelineIcon, classes.image2)} />
            </CustomTimelineDot>
            <CustomTimelineConnector />
          </CustomTimelineSeparator>
          <CustomTimelineContent>
            <CustomAccordion square={true}>
              <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                Full Stack Developer
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Company:</b>
                      </td>
                      <td>BMW AG</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Duration:</b>
                      </td>
                      <td>10.08.20 - 09.10.20</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Description:</b>
                      </td>
                      <td>
                        Analysis, Design and Implementation of a Drag-and-Drop
                        Tool, allowing to quickly build and deploy AWS
                        infrastructures (Use Case: Streaming Data Anomaly
                        Detection)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CustomAccordionDetails>
            </CustomAccordion>
          </CustomTimelineContent>
        </CustomTimelineItem>
        <CustomTimelineItem>
          <CustomTimelineSeparator>
            <CustomTimelineDot>
              <div className={clsx(classes.timelineIcon, classes.image3)} />
            </CustomTimelineDot>
            <CustomTimelineConnector />
          </CustomTimelineSeparator>
          <CustomTimelineContent>
            <CustomAccordion square={true}>
              <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                Frontend Developer
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Company:</b>
                      </td>
                      <td>Brose GmbH & Co.</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Duration:</b>
                      </td>
                      <td>
                        01.08.16 - 30.09.16
                        <br />
                        01.03.17 - 31.03.17
                        <br />
                        21.08.17 - 15.09.17
                        <br />
                        01.03.18 - 31.03.18
                        <br />
                        01.09.18 - 30.09.18
                        <br />
                        01.03.19 - 31.03.19
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Description:</b>
                      </td>
                      <td>
                        Development of a Web Frontend summarinzing Data from a
                        Vehicle Database
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CustomAccordionDetails>
            </CustomAccordion>
          </CustomTimelineContent>
        </CustomTimelineItem>
        <CustomTimelineItem>
          <CustomTimelineSeparator>
            <CustomTimelineDot>
              <div className={clsx(classes.timelineIcon, classes.image4)} />
            </CustomTimelineDot>
            <CustomTimelineConnector />
          </CustomTimelineSeparator>
          <CustomTimelineContent>
            <CustomAccordion square={true}>
              <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                IT Specialist
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Company:</b>
                      </td>
                      <td>Habermaass GmbH</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Duration:</b>
                      </td>
                      <td>28.10.13 - 30.10.13</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Description:</b>
                      </td>
                      <td>
                        Learning how to code and getting to know the everyday
                        life of a software developer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CustomAccordionDetails>
            </CustomAccordion>
          </CustomTimelineContent>
        </CustomTimelineItem>
      </CustomTimeline>
    </div>
  );
};
