import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles,  } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  background: {
    backgroundImage: `linear-gradient(90deg, rgba(113,117,107,1) 0%, rgba(152,158,143,1) 47%, rgba(222,230,211,1) 92%)`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
  },
  header: {
    color: 'white',
    textAlign: 'center',
    marginTop: '10%',
  },
  mainText: {
    textALign: 'center',
    color: 'white',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '2%',
    lineHeight: '3',
    textAlign: 'justify',
  },
})

export const About = () => {
  
  const classes = useStyles();
  
  return (
    <>
       < Navbar />
       <div>
          <div className={classes.background}>
              <h1 className={classes.header}>About</h1>
              <p className={classes.mainText}>
              Townsville City Library was established in 2020 with a hope to 
              provide access to books to readers of all ages in the community. 
              Thanks to generous donations and funds from the city, Townsville 
              City Library is able to provide free access to books to everyone. 
              Please <Link to='/register'> create an account</Link> to access 
              the wonderful collection of books we have available and do not 
              hesitate to <Link to='./contact'> contact us</Link> with any 
              questions. Happy reading! 
              </p>
          </div>
        </div>
    </>
  )
}
