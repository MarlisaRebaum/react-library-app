import React, { useState } from 'react';
import { login } from '../Auth';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { auth } from '../../firebaseConfig';
import {
    Container, 
    Button,
    makeStyles,
    Typography,
    Snackbar,
    TextField,
} from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../Navbar';
import GoogleButton from 'react-google-button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
    googleButton:{
        marginTop: '2em',
        padding: '0',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        borderRadius: '1px',
        cursor: 'pointer'
    },
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
        backgroundColor: '#989e8f',
    },
    ptop: {
        paddingTop: '5%',
    },
    submitButton: {
        marginTop: theme.spacing(4),
    },
    createAccount: {
        color: 'blue',
        textAlign: 'center',
    },
    hoverLink: {
        "&hover":{
            color: 'black',
        }
    }
}));

interface SignInProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};

export const Login = withRouter( (props:SignInProps) => {
    
    const classes = useStyles();
    const { history } = props;
    const [ open, setOpen ] = useState(false);

    
    const handleSnackOpen = () => {
        setOpen(true)
    };
    
    const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }
    
        setOpen(false);
        history.push('/bookinventory')
    };
    
    
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await login(form);
  
    }

    const googleLogin = async () => {
        const response = await auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );
        if(response.user) {
            handleSnackOpen();
        }
    };

    return (
        <>
        <Navbar />
        <div>
        <Container maxWidth = 'sm' className={`${classes.containerStyle} ${classes.ptop} `}>
                <Typography className={classes.typographyStyle}>Sign In Below</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Email"
                        fullWidth
                        required
                        onChange={(e) => 
                            setForm({...form, email: e.target.value})}
                    />
                    <TextField
                        type="password"
                        name="password"
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        fullWidth
                        required
                        onChange={(e) => 
                            setForm({...form, password: e.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={handleSnackOpen}
                        >
                        Sign In
                    </Button>
                    

                </form>
                <AuthCheck fallback={
                    <GoogleButton className={`${classes.googleButton} `} onClick={googleLogin}></GoogleButton>
                }>
                </AuthCheck>
                <div className={`${classes.ptop} ${classes.createAccount} ${classes.hoverLink}`}>
                    <Link to='/register'>Create an Account</Link>
                </div>
                <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity='success'>
                        Successful Sign In. Redirecting in 6 seconds...
                    </Alert>
                </Snackbar>
            </Container>
        </div>
        </>            
    )
});