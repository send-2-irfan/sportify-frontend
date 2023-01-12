import React, { useState, useEffect } from 'react';
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

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom>
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

                    //uncomment the below code to render the matches

                    {/*{matches.map((match) => (*/}
                    {/*    <TableRow key={match.id}>*/}
                    {/*        <TableCell>{match.teamA}</TableCell>*/}
                    {/*        <TableCell>{match.teamB}</TableCell>*/}
                    {/*        <TableCell>*/}
                    {/*            <Moment format="MM/DD/YYYY">{match.date}</Moment>*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell>{match.time}</TableCell>*/}
                    {/*        <TableCell>{match.location}</TableCell>*/}
                    {/*        <TableCell className={classes.action}>*/}
                    {/*            <IconButton onClick={() => onDelete(match.id)}>*/}
                    {/*                <DeleteIcon color="error" />*/}
                    {/*            </IconButton>*/}
                    {/*        </TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </Paper>
    );
}
