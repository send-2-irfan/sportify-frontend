import React from 'react';
import { makeStyles } from '@mui/styles'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";

import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: '#ff9800',
        width: 60,
        height: 60,
    },
});

export default function WinnerCard({ winner }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={winner.name}
                height="140"
                image={winner.teamLogo}
                title={winner.name}
            />
            <CardContent>
                <Avatar className={classes.avatar}>
                    {winner.name[0]}
                </Avatar>
                <Typography variant="h5" component="h2">
                    {winner.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {winner.team}
                </Typography>
            </CardContent>
        </Card>
    );
}
