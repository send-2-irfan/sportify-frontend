import React from 'react';
import {Button, makeStyles, TextField} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function RegistrationForm() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="First Name"
                    defaultValue=""
                />
                <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    defaultValue=""
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-required"
                    label="Email"
                    defaultValue=""
                />
                <TextField
                    required
                    id="standard-required"
                    label="Phone Number"
                    defaultValue=""
                />
            </div>
            <div>
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    required
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div>
                <Button variant="contained" color="primary" className={classes.button}>
                    Register
                </Button>
            </div>
        </form>
    );
}
