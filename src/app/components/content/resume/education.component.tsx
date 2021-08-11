import logo1 from '@assets/images/Ausbildung1.png';
import logo2 from '@assets/images/Ausbildung2.png';
import logo3 from '@assets/images/Ausbildung3.png';
import logo4 from '@assets/images/Ausbildung4.png';
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
  CustomTimelineOppositeContent,
  CustomTimelineSeparator,
} from '@customizations/timeline.customization';
import { makeStyles, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TimelineItem } from '@material-ui/lab';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles((theme: Theme) => ({
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
    <Scrollbars hideTracksWhenNotNeeded={true}>
      <div className={classes.educationComponent}>
        <CustomTimeline align="alternate">
          <TimelineItem>
            <CustomTimelineOppositeContent>
              2019 - Today
            </CustomTimelineOppositeContent>
            <CustomTimelineSeparator>
              <CustomTimelineDot>
                <div className={clsx(classes.timelineIcon, classes.image1)} />
              </CustomTimelineDot>
              <CustomTimelineConnector />
            </CustomTimelineSeparator>
            <CustomTimelineContent>
              <CustomAccordion square={true}>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Software Engineering (Master)
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  Details and so on
                </CustomAccordionDetails>
              </CustomAccordion>
            </CustomTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <CustomTimelineOppositeContent>
              2016 - 2019
            </CustomTimelineOppositeContent>
            <CustomTimelineSeparator>
              <CustomTimelineDot>
                <div className={clsx(classes.timelineIcon, classes.image2)} />
              </CustomTimelineDot>
              <CustomTimelineConnector />
            </CustomTimelineSeparator>
            <CustomTimelineContent>
              <CustomAccordion square={true}>
                <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Computer Science (Bachelor)
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <div>
                    <b>University:</b> Technical University Munich
                    <br />
                    <b>Final GPA:</b> 1.7
                  </div>
                </CustomAccordionDetails>
              </CustomAccordion>
            </CustomTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <CustomTimelineOppositeContent>
              2008 - 2016
            </CustomTimelineOppositeContent>
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
                  <div>
                    <b>School:</b> Gymnasium Ernestinum Coburg
                    <br />
                    <b>Final GPA:</b> 1.0
                  </div>
                </CustomAccordionDetails>
              </CustomAccordion>
            </CustomTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <CustomTimelineOppositeContent>
              2004 - 2008
            </CustomTimelineOppositeContent>
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
                  <div>
                    <b>School:</b> Pestalozzi-Grundschule Coburg
                    <br />
                    <b>Final GPA:</b> 1.6
                  </div>
                </CustomAccordionDetails>
              </CustomAccordion>
            </CustomTimelineContent>
          </TimelineItem>
        </CustomTimeline>
      </div>
    </Scrollbars>
  );
};
