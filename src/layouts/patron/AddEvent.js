import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {Delete, Edit, Label} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import ArgonBox from "../../components/ArgonBox";
import sportsGala from "../../assets/images/sportsEvent.jpg";
import DialogActions from "@mui/material/DialogActions";
import ArgonTypography from "../../components/ArgonTypography";
import ArgonButton from "../../components/ArgonButton";
import Checkbox from "@mui/material/Checkbox";
import ArgonInput from "../../components/ArgonInput";
import {ApplicationContext} from "../../context/ApplicationContext";


const useStyles = makeStyles((theme) => ({
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
    const [events, setEvents] = useState({
        name: '',
        detail: '',
        imageUrl: '',
        coordinator: '',
        sports: ''
    })


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {setAllEvents} = useContext(ApplicationContext)


    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };


    const handleAdd = (e) => {
        if (JSON.parse(localStorage.getItem("events"))) {
            let items = JSON.parse(localStorage.getItem("events"))
            items.push(events)
            localStorage.setItem("events", JSON.stringify(items))
            setAllEvents(items)
            setEvents({
                name: '',
                detail: '',
                imageUrl: ''
            })
            handleClose();
        } else {
            let eventsNew = []
            eventsNew.push(events)
            localStorage.setItem("events", JSON.stringify(eventsNew))
            setAllEvents(eventsNew)
            setEvents({
                name: '',
                detail: '',
                imageUrl: ''
            })
            handleClose();
        }
    };

    const onImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let data = reader.result;
            setEvents({...events, imageUrl: data});
        });
        reader.readAsDataURL(file);
    }

    return (
        <div>
            <Grid onClick={handleOpen} style={{width: '15%', marginTop: '10px', marginLeft: '20px', height:'auto'}} mb={3}>
                <PlaceholderCard title={{variant: "h5", text: "Add New Event"}} outlined/>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card style={{width: '24%'}}>
                    <ArgonBox p={3} textAlign="center" style={{margin: '0px'}}>
                        <ArgonTypography variant="h5" fontWeight="medium">
                            Register Event
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonBox pt={2} pb={3} px={3} style={{marginTop: '-20px'}}>
                        <ArgonBox component="form" role="form">
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                    // label="Name"
                                            required
                                            placeholder='Name'
                                            value={events.name}
                                            onChange={(e) => setEvents({...events, name: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            multiline
                                            rows={4}
                                            required
                                            placeholder='Description'
                                            value={events.detail}
                                            onChange={(e) => setEvents({...events, detail: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonTypography color='gray' style={{fontSize:'0.8rem'}}>Upload Image</ArgonTypography>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder="Upload Image"
                                            type={"file"}
                                            accept="image/png,image/gif,image/jpeg"
                                            onChange={(e) => onImageChange(e)}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mt={4} mb={1}>
                                <ArgonButton onClick={handleClose} variant="gradient" color="dark"
                                             style={{width: '45%', marginRight: "5px"}}>
                                    Cancel
                                </ArgonButton>
                                <ArgonButton variant="gradient" color="info" onClick={(e) => handleAdd(e)}
                                             style={{width: '45%'}}>
                                    Add Event
                                </ArgonButton>
                            </ArgonBox>
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </Modal>
        </div>
    );
}

export default AddEvent;
