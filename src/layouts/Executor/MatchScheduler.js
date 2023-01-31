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
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 144,
        textAlign: 'center'
    },
}));


export default function MatchScheduler() {
    const classes = useStyles();
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');
    const [matchDate, setMatchDate] = useState('');
    const [matchTime, setMatchTime] = useState('');
    const [matchLocation, setMatchLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(teamA, teamB, matchDate, matchTime, matchLocation);
        // Add code here to save the match details (teams, date, time, and location) to a database or API
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
                                id="team-a"
                                placeholder="Team A"
                                value={teamA}
                                onChange={(event) => setTeamA(event.target.value)}
                                className={classes.textField}
                            />
                            <TextField
                                id="team-b"
                                placeholder="Team B"
                                value={teamB}
                                onChange={(event) => setTeamB(event.target.value)}
                                className={classes.textField}
                            />
                            <TextField
                                id="match-date"
                                placeholder="Date"
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
                                placeholder="Time"
                                type="time"
                                value={matchTime}
                                onChange={(event) => setMatchTime(event.target.value)}
                                className={classes
                                    .textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="match-location"
                                placeholder="Location"
                                value={matchLocation}
                                onChange={(event) => setMatchLocation(event.target.value)}
                                className={classes.textField}
                            />
                            <Button
                                variant="standard"
                                color="info"
                                type="submit"
                                style={{color:'white', backgroundColor: 'black', marginLeft:'2px'}}
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
