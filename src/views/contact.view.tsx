import emailjs from '@emailjs/browser';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, TextField, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  contactView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90%',
    width: '85%',
    boxShadow: theme.custom.cardShadow,
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    WebkitBoxShadow: theme.custom.cardShadow,
    overflow: 'auto',
    padding: '0 50px 30px 50px',
  },
  fullContentWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 20,
    fontSize: 'calc(1.5vh + 1.5vw)',
  },
  heading: {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xx-large',
    fontWeight: 'bold',
  },
  contactForm: {
    width: '100%',
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  },
  details: {
    width: '100%',
    display: 'grid',
    gap: 30,
    gridTemplateColumns: '.5fr .5fr',
    marginBottom: 30,
  },
  message: {
    width: '100%',
    flex: '1 1 auto',
  },
  messageInput: {
    height: '100% !important',
  },
  button: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    color: 'white',
    fontWeight: 'bold',
    WebkitTextStroke: '0',
    marginTop: '10px',
    borderRadius: '10rem',
    width: 200,
  },
}));

const createFormData = () => {
  return {
    subject: '',
    email: '',
    from_name: '',
    message: '',
  };
};

const createErrorList = () => {
  return {
    nameError: false,
    emailError: false,
    subjectError: false,
    messageError: false,
  };
};

export const ContactView = (): ReactElement => {
  const classes = useStyles();
  const [formData, setFormData] = useState(createFormData());
  const [errorList, setErrorList] = useState(createErrorList());
  const [overallError, setOverallError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateInput = () => {
    const nameError = formData.from_name == '';
    const emailError = formData.email == '';
    const subjectError = formData.subject == '';
    const messageError = formData.message == '';

    setErrorList({ nameError, emailError, subjectError, messageError });
    return nameError || emailError || subjectError || messageError;
  };

  const sendMail = () => {
    const inputError = validateInput();
    if (!inputError) {
      setLoading(true);
      emailjs
        .send(
          process.env.EMAIL_SERVICE_ID!,
          process.env.EMAIL_TEMPLATE_ID!,
          formData,
          process.env.EMAIL_PUBLIC_KEY,
        )
        .then(() => {
          setEmailSent(true);
          setLoading(false);
        })
        .catch((error: Error) => {
          setOverallError(false);
          console.log(error.message);
        });
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, from_name: event.target.value });
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, subject: event.target.value });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, message: event.target.value });
  };

  return (
    <div className={classes.contactView} id="Contact">
      <div className={classes.card}>
        {overallError ? (
          <div className={classes.fullContentWrapper}>
            <ErrorOutlineIcon fontSize="inherit" color="error" />
            Oops! Something went wrong.
            <span
              style={{
                fontSize: 'calc(.8vh + .7vw)',
                display: 'flex',
                alignItems: 'center',
                gap: 3,
              }}
            >
              Please contact me on{' '}
              <LinkedInIcon
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/simonkostin/',
                    '_blank',
                  )
                }
              />
              instead
            </span>
          </div>
        ) : loading ? (
          <div className={classes.fullContentWrapper}>
            <CircularProgress size={100} />
          </div>
        ) : emailSent ? (
          <div className={classes.fullContentWrapper}>
            <MarkEmailReadIcon fontSize="inherit" color="success" />
            <span>Message Sent!</span>
            <span style={{ fontSize: 'calc(.8vh + .7vw)' }}>
              Your Message has been successfully sent. I will respond to you as
              soon as possible.{' '}
            </span>
          </div>
        ) : (
          <>
            <div className={classes.heading}>Contact Me</div>
            <div className={classes.contactForm}>
              <div className={classes.details}>
                <TextField
                  required
                  label="Name"
                  value={formData.from_name}
                  onChange={handleNameChange}
                  error={errorList.nameError}
                  helperText={
                    errorList.nameError ? 'This field is required' : ''
                  }
                />
                <TextField
                  required
                  label="Email"
                  value={formData.email}
                  onChange={handleMailChange}
                  error={errorList.emailError}
                  helperText={
                    errorList.emailError ? 'This field is required' : ''
                  }
                />
                <TextField
                  required
                  label="Subject"
                  style={{ gridColumnEnd: 'span 2' }}
                  value={formData.subject}
                  onChange={handleSubjectChange}
                  error={errorList.subjectError}
                  helperText={
                    errorList.subjectError ? 'This field is required' : ''
                  }
                />
              </div>
              <div className={classes.message}>
                <TextField
                  required
                  label="Message"
                  fullWidth
                  multiline
                  value={formData.message}
                  rows={10}
                  onChange={handleMessageChange}
                  classes={{ root: classes.messageInput }}
                  error={errorList.messageError}
                  helperText={
                    errorList.messageError ? 'This field is required' : ''
                  }
                  InputProps={{
                    classes: {
                      root: classes.messageInput,
                      input: classes.messageInput,
                    },
                  }}
                />
              </div>
            </div>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              onClick={() => sendMail()}
            >
              Send Message
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
