import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SendScheduleButton({matches, onSend}) {
    const classes = useStyles();

    const handleSend = (event) => {
        event.preventDefault();
        onSend(matches);
        // Add code here to send the schedule data to all players
        console.log("Schedule sent to all players!");
    };

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSend}
        >
            Send Schedule
        </Button>
    );
}
