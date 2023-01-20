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
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [editTeam, setEditTeam] = useState('');
    const [editScore, setEditScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const newScores = [...scores];
            newScores[editIndex] = { team: editTeam, score: editScore };
            setScores(newScores);
            setIsEditing(false);
            setEditIndex(-1);
            setEditTeam('');
            setEditScore('');
        } else {
            setScores([...scores, { team: newTeam, score: newScore }]);
            setNewTeam('');
            setNewScore('');
        }
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setEditTeam(scores[index].team);
        setEditScore(scores[index].score);
    };

    const handleRemove = (index) => {
        const newScores = [...scores];
        newScores.splice(index, 1);
        setScores(newScores);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Team</TableCell>
                            <TableCell align="right">Score</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scores.map((row, index) => (
                            <TableRow key={row.team}>
                                <TableCell component="th" scope="row">
                                    {row.team}
                                </TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleRemove(index)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Team Name"
                    value={isEditing ? editTeam : newTeam}
                    onChange={(e) => isEditing ? setEditTeam(e.target.value) : setNewTeam(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Score"
                    value={isEditing ? editScore : newScore}
                    onChange={(e) => isEditing ? setEditScore(e.target.value) : setNewScore(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {isEditing ? 'Save' : 'Add Score'}
                </Button>
            </form>
        </div>
    );
};
export default Scoreboard;