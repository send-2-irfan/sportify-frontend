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
        marginTop:'2%',
        overflowX: 'auto',
        margin:'2%',
    },
    table: {
        minWidth: 650,
    },
    action: {
        width: '10%',
    },
}));

export default function ScoreTable({ scor, onDelete }) {
    const classes = useStyles();
    const {scores, setAllScores} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("scores")) && setAllScores(JSON.parse(localStorage.getItem("scores")))
    }, [])

    function handleDelete(team) {
        let scoreNew = []
        for (let i = 0; i < scores.length; i++) {
            if (scores[i].team !== team ) {
                scoreNew.push(scores[i])
            }
        }
        localStorage.setItem('scores', JSON.stringify(scoreNew))
        setAllScores(scoreNew)
    }

    return (
        <Paper className={classes.root}>
            <h5 style={{paddingTop:'1%', paddingLeft:'1%'}}> Score Board </h5>
            <Table className={classes.table}>
                <TableHead style={{display: 'flex', justifyContent:'space-evenly', width:'100%'}}>
                    <TableRow style={{display: 'flex', justifyContent:'space-between', width:'100%',}}>
                        <TableCell>Team</TableCell>
                        <TableCell>Sport</TableCell>
                        <TableCell>Scores</TableCell>
                        <TableCell>Status</TableCell>
                        {/*<TableCell className={classes.action}>Action</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {scores.map((score) => (
                        <TableRow key={score.team} style={{display: 'flex', justifyContent:'space-between', width:'100%'}}>
                            <TableCell>{score.team}</TableCell>
                            <TableCell>{score.sport}</TableCell>
                            <TableCell>{score.score}</TableCell>
                            <TableCell>
                                {score.status}
                            </TableCell>

                            {/*<TableCell className={classes.action} style={{marginRight:'20px'}}>*/}
                            {/*    /!*<IconButton>*!/*/}
                            {/*    /!*    <Edit color="info" />*!/*/}
                            {/*    /!*</IconButton>*!/*/}
                            {/*    <IconButton onClick={() => handleDelete(score.team)}>*/}
                            {/*        <Delete color="error"/>*/}
                            {/*    </IconButton>*/}
                            {/*</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
