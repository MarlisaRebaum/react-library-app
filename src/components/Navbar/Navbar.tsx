import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/library-logo.png';
import { useAuth, AuthCheck } from 'reactfire';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    logo: {
        content: `url(${Logo})`,
        width: '20%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: 'white',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: '#989e8f',
        textDecoration: 'none',
    },
    navItemHover: {
        "&:hover": {
            color: 'white',
            backgroundColor: '#989e8f',
            textDecoration: 'none',
            padding: '5',
        },
    },
    p3: {
        padding: '3px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignRight: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: '0px',
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    pright: {
        paddingRight: '5%',
    },
    pleft:{
        paddingLeft: '10px',
    },
});

export const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();
        history.push('/')
    };

    return (
    <div className= {`${classes.row} ${classes.navbar} ${classes.width100} ${classes.p3} ${classes.spaceBetween}`}>
      <div className={`${classes.navlogo} ${classes.pleft}`}>
        <Link to='/' className={`${classes.logo} ${classes.p3}`}></Link>
      </div>
      <div className={`${classes.width60} ${classes.pright}`}>
        <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
            <Suspense fallback={'loading...'} />
                <AuthCheck fallback={
                <ul className={`${classes.ul} ${classes.row} ${classes.alignRight}`}>
                    <li>
                        <Button>
                            <Link to='/login' className={`${classes.navbarItem} ${classes.navItemHover} ${classes.psides}`}>Sign In</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/register' className={`${classes.navbarItem} ${classes.navItemHover} ${classes.psides}`}>Sign Up</Link>
                        </Button>
                    </li>
                </ul>
                }>
                <ul className= {`${classes.alignCenter} ${classes.row} ${classes.width100} ${classes.p3} ${classes.spaceBetween} ${classes.ul}`}>
                    <li>
                        <Button>
                            <Link to='/bookinventory' className={`${classes.navbarItem} ${classes.navItemHover} ${classes.psides}`}>Books</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/about' className={`${classes.navbarItem} ${classes.navItemHover} ${classes.psides}`}>About</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/contact' className={`${classes.navbarItem} ${classes.navItemHover} ${classes.psides}`}>Contact</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant='contained' color='secondary' onClick={signOut}>Sign Out</Button>
                    </li>
                </ul>
            </AuthCheck>
        </ul>
      </div>
    </div>
  )

};
