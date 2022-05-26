import SendIcon from '@mui/icons-material/Send';
import { Button, TextField, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { ReactElement } from 'react';

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

export const ContactView = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.contactView} id="Contact">
      <div className={classes.card}>
        <div className={classes.heading}>Contact Me</div>
        <div className={classes.contactForm}>
          <div className={classes.details}>
            <TextField label="First Name" />
            <TextField label="Second Name" />
            <TextField required label="Email" />
            <TextField label="Company" />
          </div>
          <div className={classes.message}>
            <TextField
              required
              label="Message"
              fullWidth
              multiline
              rows={10}
              classes={{ root: classes.messageInput }}
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
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};
