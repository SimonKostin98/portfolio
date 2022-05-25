/* eslint-disable quotes */
import logo1 from '@assets/education/Ausbildung1.png';
import logo2 from '@assets/education/Ausbildung2.png';
import logo3 from '@assets/education/Ausbildung3.png';
import logo4 from '@assets/education/Ausbildung4.png';
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
    backgroundImage: `url(${logo1 as string})`,
  },
  image2: {
    backgroundImage: `url(${logo2 as string})`,
  },
  image3: {
    backgroundImage: `url(${logo3 as string})`,
  },
  image4: {
    backgroundImage: `url(${logo4 as string})`,
  },
}));

export const EducationComponent = (): ReactElement => {
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
                {"Master's Degree"}
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>University:</b>
                      </td>
                      <td>
                        University of Augsburg
                        <br />
                        Technical University of Munich
                        <br />
                        Ludwig Maximilian University
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Subject:</b>
                      </td>
                      <td>Software Engineering</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Final GPA:</b>
                      </td>
                      <td>1.1</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Special:</b>
                      </td>
                      <td>
                        Elite Graduate Programme geared towards the Top 2
                        Percent of Students in Computer Science
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
                {"Bachelor's Degree"}
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>University:</b>
                      </td>
                      <td>Technical University of Munich</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Subject:</b>
                      </td>
                      <td>Computer Science</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Final GPA:</b>
                      </td>
                      <td>1.7</td>
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
                High School
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>School:</b>
                      </td>
                      <td>Gymnasium Ernestinum Coburg</td>
                    </tr>
                    <tr>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <b>Final GPA:</b>
                      </td>
                      <td>1.0</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Special:</b>
                      </td>
                      <td>Received scholarship by the Max Weber-Programm</td>
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
                Primary School
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>School:</b>
                      </td>
                      <td>Pestalozzi-Grundschule Coburg</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Final GPA:</b>
                      </td>
                      <td>1.6</td>
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
