import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom'
import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                EasyPeasy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        padding: '30px',
        borderRadius: '5px',
        boxShadow: '0 .125rem .625rem rgba(0,0,0,.3)!important'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
//
export default function SignUp() {
    const [username, setUsername] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [secondPassword, setSecondPassword] = useState(String);
    const [emailAgreement, setEmailAgreement] = useState(Boolean)

    const classes = useStyles();
    const history = useHistory();

    //Email Validations
    function validateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return true
        }
        alert("You have entered an invalid email address!")
        return false
    }

    //Password Validations
    function validatePasswords(password, secondPassword) {
        if (password !== secondPassword) {
            alert('Password must match!')
            return false
        } else {
            return true
        }
    }

    //Submit form handler
    async function submitFormHandler(event) {
        event.preventDefault();
        // Validations
        if (!validateEmail(email)) return;
        if (!validatePasswords(password, secondPassword)) return;
        //If passed the validations create a user
        const {data} = await axios.post('http://localhost:3005/signup', {
            username, email, password, emailAgreement
        })

        if (data.message === 'OK') {
            alert('User was created successfully!')
            history.push('/login')
        } else {
            alert(data.message)
        }
    }

    // Create a user in the backend
    // If we receive a message, alert the user with the message, else Alert the user that something went wrong.


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        {/* Username */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="username"
                                id="username"
                                // autoComplete="current-password"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                // autoComplete="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>


                        {/*Password*/}
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                // autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>

                        {/*2nd Password*/}
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="secondPassword"
                                label="Re-enter"
                                type="password"
                                id="second-password"
                                // autoComplete="current-password"
                                onChange={e => setSecondPassword(e.target.value)}
                            />
                        </Grid>

                        {/*Receive Emails*/}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive an email with my user info!"
                                onChange={e => setEmailAgreement(e.target.value)}
                            />
                        </Grid>


                        {/*Signup Button*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={e => submitFormHandler(e)}
                        >
                            Sign Up
                        </Button>

                    </Grid>
                    {/*Already have an account?*/}
                    <Grid container justify="center">
                        <Grid item>
                            <Link as='button' variant="body2" onClick={() => history.push('/')} align="center">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}
