import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {Delete, Edit} from "@mui/icons-material";
import {Avatar, CardHeader, Typography} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        margin: 'auto',
        marginTop: theme.spacing(2),
    },
    cardHeader: {
        paddingBottom: 0,
    },
    avatar: {
        width: 60,
        height: 60,
    },
}));

const AthleteCard = ({ athlete }) => {


    const classes = useStyles();
    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        const storedAthletes = JSON.parse(localStorage.getItem('athletes')) || [];
        setAthletes(storedAthletes);
    }, []);

    const handleEdit = (index) => {
        const updatedAthletes = [...athletes];
        const athleteToEdit = updatedAthletes[index];
        // Code for updating the athlete information goes here
        setAthletes(updatedAthletes);
        localStorage.setItem('athletes', JSON.stringify(updatedAthletes));
    };

    const handleDelete = (index) => {
        const updatedAthletes = [...athletes];
        updatedAthletes.splice(index, 1);
        setAthletes(updatedAthletes);
        localStorage.setItem('athletes', JSON.stringify(updatedAthletes));
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar
                        src={'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg'}
                        alt={'athlete.name'}
                        className={classes.avatar}
                    />
                }
                action={
                    <>
                        <IconButton onClick={() => handleEdit(`athlete.id`)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(`athlete.id`)}>
                            <Delete />
                        </IconButton>
                    </>
                }
                title={athlete.name}
                subheader={athlete.sport}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Email: {`athlete.email`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Contact Number: {`athlete.contactNumber`}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AthleteCard;