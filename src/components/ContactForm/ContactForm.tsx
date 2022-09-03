import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import emailjs from '@emailjs/browser';
import {
  Container, 
  Button,
  makeStyles,
  Typography,
  Snackbar,
} from '@material-ui/core';
import { Input } from '../SharedComponents/input';


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    typographyStyle: {
      fontFamily: 'Roboto, arial, sans-serif',
      textAlign: 'center',
      fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    },
    ptop: {
        paddingTop: '5%',
    },
});

export const ContactForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm("service_77k6jx1", "template_oap7mor",  e.currentTarget, "ARvsHxTAmEMI8QDzv")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.currentTarget.reset()
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
    <div>
        <Container maxWidth = 'sm' className={`${classes.containerStyle} ${classes.ptop} `}>
          <Typography className={classes.typographyStyle}>Contact Us</Typography>
            <form onSubmit={sendEmail}>
              <div className={classes.ptop}>
                <label htmlFor='user_name'>Full Name</label>
                <Input name='user_name' placeholder='Your Full Name' />
              </div>
              <div className={classes.ptop}>
                <label htmlFor='user_email'>Email</label>
                <Input name='user_email' placeholder='Your Email' />
              </div>
              <div className={classes.ptop}>
                <label htmlFor='message'>Message</label>
                <Input name='message' placeholder='Your Message' />
              </div>
              <div className={classes.ptop}>
                <Button onClick={handleClick} type='submit' variant='contained' color='primary' size='large'>Send</Button>
              </div>
              </form>
              <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity='success'>
                  Message successfully sent.
                  </Alert>
              </Snackbar>
          </Container>
    </div>
    </>
  )};