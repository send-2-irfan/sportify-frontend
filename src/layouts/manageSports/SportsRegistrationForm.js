import React from 'react';
import {Card, CardContent, makeStyles} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
}));

const SportCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.imageUrl}
                title={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Players: {props.players}
                    <br />
                    Details: {props.details}
                    <br />
                    Captain ID: {props.captainId}
                    <br />
                    Captain Name: {props.captainName}
                    <br />
                    Captain Email: {props.captainEmail}
                    <br />
                    Fee: {props.fee}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SportCard;
