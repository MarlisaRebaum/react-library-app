import React, { useState } from 'react';
import { register } from '../Auth';
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
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../Navbar';
import GoogleButton from 'react-google-button';
import { useHistory } from 'react-router-dom';

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
        backgroundColor: '#4caf50',
    },
    ptop: {
        paddingTop: '5%',
    },
    submitButton: {
        marginTop: theme.spacing(4),
    },
}));

export const Register = () => {
    
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);
    const history = useHistory();

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
        email: '',
        password:''
    });

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await register(form);
    };

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
                <Typography className={classes.typographyStyle}>Create an Account</Typography>
                <form onSubmit={onSubmit}>
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
                        Sign up
                    </Button>
                    

                </form>
                <AuthCheck fallback={
                    <GoogleButton className={`${classes.googleButton} `} onClick={googleLogin}></GoogleButton>
                }>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity='success'>
                        Successfully created account. Redirecting in 6 seconds...
                    </Alert>
                </Snackbar>
            </Container>
        </div>
        </>            
    )
};