import React from 'react';
import {makeStyles} from "@mui/styles";
import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {red} from "@mui/material/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        maxHeight: 500
    },
    media: {
        padding: '1.25%', // 16:9
        width:'100%',
        border: '1px solid white',
        borderRadius: '23px',
        boxShadow: '0 0 25px whitesmoke'

    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ExecutorCard = ({ imageUrl, name, department, cmsId, email }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <img src={imageUrl} alt={name} className={classes.media} />
            <CardHeader
                title={name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Department: {department}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    CMS-ID: {cmsId}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Email: {email}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExecutorCard;
