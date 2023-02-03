import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Typography, Icon
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Moment from 'react-moment';
import {ApplicationContext} from "../../context/ApplicationContext";
import {Delete, Edit} from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    action: {
        width: '10%',
    },
}));

export default function Schedule({ matches, onDelete }) {
    const classes = useStyles();
    const {schedule, setAllSchedule} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("schedules")) && setAllSchedule(JSON.parse(localStorage.getItem("schedules")))
    }, [])

    function handleDelete(teamA, teamB ,matchDate, matchTime) {
        let scheduleNew = []
        for (let i = 0; i < schedule.length; i++) {
            if (schedule[i].teamA !== teamA && schedule[i].teamB !== teamB && schedule[i].matchDate !== matchDate && schedule[i].matchTime !== matchTime) {
                scheduleNew.push(schedule[i])
            }
        }
        localStorage.setItem('schedules', JSON.stringify(scheduleNew))
        setAllSchedule(scheduleNew)
    }

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom mr={5}>
                Matches
            </Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Team A</TableCell>
                        <TableCell>Team B</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell className={classes.action}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {schedule.map((match) => (
                        <TableRow key={match.id}>
                            <TableCell>{match.teamA}</TableCell>
                            <TableCell>{match.teamB}</TableCell>
                            <TableCell>
                                <Moment format="MM/DD/YYYY">{match.matchDate}</Moment>
                            </TableCell>
                            <TableCell>{match.matchTime}</TableCell>
                            <TableCell>{match.matchLocation}</TableCell>
                            <TableCell className={classes.action}>
                                <IconButton onClick={() => onDelete(match.id)}>
                                    <Edit color="info" />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(match.teamA, match.teamB , match.matchDate, match.matchTime)}>
                                    <Delete color="error"/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
