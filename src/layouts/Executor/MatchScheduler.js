import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function MatchScheduler() {
    const classes = useStyles();
    const [matchDate, setMatchDate] = useState('');
    const [matchTime, setMatchTime] = useState('');
    const [matchLocation, setMatchLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(matchDate, matchTime, matchLocation);
        // Add code here to save the match details (date, time, and location) to a database or API
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Schedule a Match
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="match-date"
                                label="Date"
                                type="date"
                                value={matchDate}
                                onChange={(event) => setMatchDate(event.target.value)}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="match-time"
                                label="Time"
                                type="time"
                                value={matchTime}
                                onChange={(event) => setMatchTime(event.target.value)}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="match-location"
                                label="Location"
                                value={matchLocation}
                                onChange={(event) => setMatchLocation(event.target.value)}
                                className={classes.textField}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.textField}
                            >
                                Schedule Match
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
