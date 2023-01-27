import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {Delete, Edit} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import ArgonBox from "../../components/ArgonBox";
import sportsGala from "../../assets/images/sportsEvent.jpg";


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

    // const handleAdd = () => {
    //     setCards([...cards, { name, details, image }]);
    //     setName('');
    //     setDetails('');
    //     setImage('');
    //     handleClose();
    // };
    //
    // const handleEdit = (index) => {
    //     // logic to edit the card
    // };

    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };

    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setOpen(true);
        setEditingIndex(index);
        setName(cards[index].name);
        setDetails(cards[index].details);
        setImage(cards[index].image);
    };

    const handleAdd = () => {
        if (editingIndex !== null) {
            const updatedCards = [...cards];
            updatedCards[editingIndex] = { name, details, image };
            setCards(updatedCards);
            setEditingIndex(null);
        } else {
            setCards([...cards, { name, details, image }]);
        }
        setName('');
        setDetails('');
        setImage('');
        handleClose();
    };

    // Card modal
    const [show,setShow] = useState(false);
    const openModal = () =>{
        setShow(true);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Modal
            </Button>
            <Grid onClick={handleOpen} item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "Add New Event" }} outlined />
            </Grid>
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
                    <Card className={classes.card} key={index}>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} xl={4}>
                                    <DefaultProjectCard
                                        image={card.image || sportsGala } alt="Card Image"
                                        label=""
                                        title={card.name}
                                        description={card.details}
                                        action={{
                                            type: "internal",
                                            route: "",
                                            color: "info",
                                            label: "View Event",
                                        }}
                                    />
                                    <div className={classes.cardActions}>
                                        <IconButton onClick={() => handleEdit(index)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(index)}>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </ArgonBox>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default AddEvent;