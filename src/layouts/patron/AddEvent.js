import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {Delete, Edit} from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '16px 0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid gray',
        width: '100%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '8px',
    },
}));

function AddEvent() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        setCards([...cards, { name, details, image }]);
        setName('');
        setDetails('');
        setImage('');
        handleClose();
    };

    const handleEdit = (index) => {
        // logic to edit the card
    };

    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Modal
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </div>
            </Modal>
            <div className={classes.cardContainer}>
                {cards.map((card, index) => (
                    <div className={classes.card} key={index}>
                        <p>Name: {card.name}</p>
                        <p>Details: {card.details}</p>
                        <img src={card.image} alt="Card Image" />
                        <div className={classes.cardActions}>
                            <IconButton onClick={() => handleEdit(index)}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(index)}>
                                <Delete />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddEvent;