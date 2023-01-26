import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function EventCard({ event }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={event.imageUrl}
                title={event.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {event.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {event.details}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary" href={event.url}>
                View Details
            </Button>
        </Card>
    );
}
