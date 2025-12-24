import { SectionHeading } from '@components/general/sectionHeading.component';
import { ViewWrapper } from '@components/general/viewWrapper.component';
import emailjs from '@emailjs/browser';
import { useBreakpoint } from '@hooks/useBreakpoint';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, styled, TextField } from '@mui/material';
import React, { ReactElement, useState } from 'react';

const Card = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '92.5%',
  width: '100%',
  boxShadow: theme.custom.cardShadow,
  borderRadius: 25,
  backdropFilter: 'blur(10px)',
  WebkitBoxShadow: theme.custom.cardShadow,
  overflow: 'auto',
  padding: '30px 2.5vw',
}));

const FullContentWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  fontSize: 'calc(1.5vh + 1.5vw)',
});

const ContactForm = styled('div')({
  width: '100%',
  paddingBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
});

const Details = styled('div')({
  width: '100%',
  display: 'grid',
  gap: 30,
  gridTemplateColumns: '1fr 1fr',
  marginBottom: 30,
});

const Message = styled('div')({
  width: '100%',
  flex: '1 1 auto',
});

const SendButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
  color: 'white',
  fontWeight: 'bold',
  marginTop: 10,
  borderRadius: '10rem',
  width: 200,
}));

const createFormData = () => ({
  subject: '',
  email: '',
  from_name: '',
  message: '',
});

const createErrorList = () => ({
  nameError: false,
  emailError: false,
  subjectError: false,
  messageError: false,
});

export const ContactView = (): ReactElement => {
  const responsiveProps = useBreakpoint();
  const [formData, setFormData] = useState(createFormData());
  const [errorList, setErrorList] = useState(createErrorList());
  const [overallError, setOverallError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateInput = () => {
    const nameError = formData.from_name === '';
    const emailError = formData.email === '';
    const subjectError = formData.subject === '';
    const messageError = formData.message === '';

    setErrorList({ nameError, emailError, subjectError, messageError });
    return nameError || emailError || subjectError || messageError;
  };

  const sendMail = () => {
    const inputError = validateInput();
    if (!inputError) {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        )
        .then(() => {
          setEmailSent(true);
          setLoading(false);
        })
        .catch((error: Error) => {
          setOverallError(true);
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
    <ViewWrapper id="Contact">
      <SectionHeading {...responsiveProps}>Contact Me</SectionHeading>
      <Card>
        {overallError ? (
          <FullContentWrapper>
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
                sx={{ cursor: 'pointer' }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/simonkostin/',
                    '_blank',
                  )
                }
              />
              instead
            </span>
          </FullContentWrapper>
        ) : loading ? (
          <FullContentWrapper>
            <CircularProgress size={100} />
          </FullContentWrapper>
        ) : emailSent ? (
          <FullContentWrapper>
            <MarkEmailReadIcon fontSize="inherit" color="success" />
            <span>Message Sent!</span>
            <span
              style={{ fontSize: 'calc(.8vh + .7vw)', textAlign: 'center' }}
            >
              Your Message has been successfully sent. I will respond to you as
              soon as possible.
            </span>
          </FullContentWrapper>
        ) : (
          <>
            <ContactForm>
              <Details>
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
                  sx={{ gridColumnEnd: 'span 2' }}
                  value={formData.subject}
                  onChange={handleSubjectChange}
                  error={errorList.subjectError}
                  helperText={
                    errorList.subjectError ? 'This field is required' : ''
                  }
                />
              </Details>
              <Message>
                <TextField
                  required
                  label="Message"
                  fullWidth
                  multiline
                  value={formData.message}
                  rows={10}
                  onChange={handleMessageChange}
                  error={errorList.messageError}
                  helperText={
                    errorList.messageError ? 'This field is required' : ''
                  }
                  sx={{
                    height: '100%',
                    '& .MuiInputBase-root': { height: '100%' },
                    '& .MuiInputBase-input': { height: '100% !important' },
                  }}
                />
              </Message>
            </ContactForm>
            <SendButton
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              onClick={sendMail}
            >
              Send Message
            </SendButton>
          </>
        )}
      </Card>
    </ViewWrapper>
  );
};
