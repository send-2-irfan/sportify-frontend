import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Scoreboard = (props) => {
    const classes = useStyles();
    const [scores, setScores] = useState([{ team: 'Team 1', score: 0 }, { team: 'Team 2', score: 0 }]);
    const [newTeam, setNewTeam] = useState('');
    const [newScore, setNewScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setScores([...scores, { team: newTeam, score: newScore }]);
        setNewTeam('');
        setNewScore('');
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Team</TableCell>
                            <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scores.map((row) => (
                            <TableRow key={row.team}>
                                <TableCell component="th" scope="row">
                                    {row.team}
                                </TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Team Name"
                    value={newTeam}
                    onChange={(e) => setNewTeam(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Score"
                    value={newScore}
                    onChange={(e) => setNewScore(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Score
                </Button>
            </form>
        </div>
    );
};

export default Scoreboard;
