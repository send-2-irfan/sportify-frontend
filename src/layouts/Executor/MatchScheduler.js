import React, {useContext, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ApplicationContext} from "../../context/ApplicationContext";
import {Select} from "antd";
import {Option} from "antd/es/mentions";

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

const t ={
    teamName: 'irfan',
}


export default function MatchScheduler() {
    const classes = useStyles();
    const [schedule, setSchedule] = useState({
        teamA: '',
        teamB: '',
        matchDate: '',
        matchTime: '',
        matchLocation: ''
    })

    const {setAllSchedule} = useContext(ApplicationContext)
    const {teams, setAllTeams} = useContext(ApplicationContext)

    var facilities = [
        {
            "name": "Cricket Ground"
        },
        {
            "name": "Football Ground"
        },
        {
            "name": "Physical Hostel"
        },
        {
            "name": "Boys Hostel 2"
        }
    ];

    const handleAdd = (e) => {
        if (JSON.parse(localStorage.getItem("schedules"))) {
            let items = JSON.parse(localStorage.getItem("schedules"))
            items.push(schedule)
            localStorage.setItem("schedules", JSON.stringify(items))
            setAllSchedule(items)
            setSchedule({
                teamA: '',
                teamB: '',
                matchDate: '',
                matchTime: '',
                matchLocation: ''
            })
        } else {
            let scheduleNew = []
            scheduleNew.push(schedule)
            localStorage.setItem("schedules", JSON.stringify(scheduleNew))
            setAllSchedule(scheduleNew)
            setSchedule({
                teamA: '',
                teamB: '',
                matchDate: '',
                matchTime: '',
                matchLocation: ''
            })
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(teamA, teamB, matchDate, matchTime, matchLocation)
    //     console.log(teamA, teamB, matchDate, matchTime, matchLocation);
    //     // Add code here to save the match details (teams, date, time, and location) to a database or API
    // };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Schedule a Match
                        </Typography>
                        <form onSubmit={handleAdd}>
                            {/*<TextField*/}
                            {/*    id="team-a"*/}
                            {/*    placeholder="Team A"*/}
                            {/*    value={schedule.teamA}*/}
                            {/*    onChange={(event) => setSchedule({...schedule, teamA: event.target.value})}*/}
                            {/*    className={classes.textField}*/}
                            {/*/>*/}
                            <Select
                                placeholder='Select Team 1'
                                value={schedule.teamA}
                                onChange={(value) => setSchedule({...schedule, teamA: value})}
                                className={classes.textField}
                                style={{width:'300'}}>
                                <Select.Option value='' disabled>Select Team</Select.Option>
                                {setAllTeams.length > 0 ? (
                                    teams.map((team, index) => (
                                        <Select.Option key={`${team.teamName}-${index}`} value={`${team.teamName}`}>
                                            {`${team.teamName}`}
                                        </Select.Option>
                                    ))
                                ) : (
                                    ''
                                )}

                                {/*<Select.Option value='' disabled>Select Team</Select.Option>*/}
                                {/*<Select.Option value="CS Strikers">CS Strikers</Select.Option>*/}
                                {/*<Select.Option value="BB Gladiators">BB Gladiators</Select.Option>*/}
                                {/*<Option value="AF 11">AF 11</Option>*/}
                            </Select>
                            {/*<TextField*/}
                            {/*    id="team-b"*/}
                            {/*    placeholder="Team B"*/}
                            {/*    value={schedule.teamB}*/}
                            {/*    onChange={(event) => setSchedule({...schedule, teamB: event.target.value})}*/}
                            {/*    className={classes.textField}*/}
                            {/*/>*/}

                            <Select
                                placeholder='Select Team 2'
                                value={schedule.teamB}
                                onChange={(value) => setSchedule({...schedule, teamB: value})}
                                className={classes.textField}
                                style={{width:'300'}}>
                                <Select.Option value='' disabled>Select Team</Select.Option>
                                {setAllTeams.length > 0 ? (
                                    teams.map((team, index) => (
                                        <Select.Option key={`${team.teamName}-${index}`} value={`${team.teamName}`}>
                                            {`${team.teamName}`}
                                        </Select.Option>
                                    ))
                                ) : (
                                    ''
                                )}

                                {/*<Select.Option value='' disabled>Select Team</Select.Option>*/}
                                {/*<Select.Option value="CS Strikers">CS Strikers</Select.Option>*/}
                                {/*<Select.Option value="BB Gladiators">BB Gladiators</Select.Option>*/}
                                {/*<Option value="AF 11">AF 11</Option>*/}
                            </Select>

                            <TextField
                                id="match-date"
                                placeholder="Date"
                                type="date"
                                value={schedule.matchDate}
                                onChange={(event) => setSchedule({...schedule, matchDate: event.target.value})}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="match-time"
                                placeholder="Time"
                                type="time"
                                value={schedule.matchTime}
                                onChange={(event) => setSchedule({...schedule, matchTime: event.target.value})}
                                className={classes
                                    .textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <Select
                                placeholder='Select Venue'
                                value={schedule.matchLocation}
                                onChange={(value) => setSchedule({...schedule, matchLocation: value})}
                                className={classes.textField}
                                style={{width:'300'}}>
                                <Select.Option value='' disabled>Select Venue</Select.Option>
                                {facilities.length > 0 ? (
                                    facilities.map((venue, index) => (
                                        <Select.Option key={`${venue.name}-${index}`} value={`${venue.name}`}>
                                            {`${venue.name}`}
                                        </Select.Option>
                                    ))
                                ) : (
                                    ''
                                )}
                            </Select>

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


// <TextField
//     id="match-location"
//     placeholder="Location"
//     value={schedule.matchLocation}
//     onChange={(event) => setSchedule({...schedule, matchLocation: event.target.value})}
//     className={classes.textField}
// />