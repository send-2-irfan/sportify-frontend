import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
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

function AddCoordinator() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [coordinator, setCoordinator] = useState({
        name: '',
        program: '',
        departmentName: '',
        semester: '',
        email: '',
        cmsID: '',
        contact:''
    })


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {setAllCoordinators } = useContext(ApplicationContext)


    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };


    const handleAdd = (e) => {
        if (JSON.parse(localStorage.getItem("coordinators"))) {
            let items = JSON.parse(localStorage.getItem("coordinators"))
            items.push(coordinator)
            localStorage.setItem("coordinators", JSON.stringify(items))
            setAllCoordinators(items)
            setCoordinator({
                name: '',
                program: '',
                departmentName: '',
                semester: '',
                email: '',
                cmsID: '',
                contact:''
            })
            handleClose();
        } else {
            let newCoordinator = []
            newCoordinator.push(coordinator)
            localStorage.setItem("events", JSON.stringify(newCoordinator))
            setAllCoordinators(newCoordinator)
            setCoordinator({
                name: '',
                program: '',
                departmentName: '',
                semester: '',
                email: '',
                cmsID: '',
                contact:''
            })
            handleClose();
        }
    };

    return (
        <div>
            <Grid onClick={handleOpen} style={{width: '15%', marginTop: '20px', marginLeft: '20px'}}>
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
                    <ArgonBox p={3} mb={1} textAlign="center">
                        <ArgonTypography variant="h5" fontWeight="medium">
                            Register Coordinator
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonBox pt={2} pb={3} px={3}>
                        <ArgonBox component="form" role="form">
                            <TextField
                                style={{marginBottom: '10px', textAlign: 'center'}}
                                label="Name"
                                value={coordinator.name}
                                onChange={(e) => setCoordinator({...coordinator, name: e.target.value})}
                                fullWidth
                            />
                            <TextField
                                label="program"
                                value={coordinator.program}
                                onChange={(e) => setCoordinator({...coordinator, program: e.target.value})}
                                fullWidth
                                style={{marginBottom: '9px',}}
                            />
                            <TextField
                                label="department"
                                value={coordinator.imageUrl}
                                onChange={(e) => setCoordinator({...coordinator, departmentName: e.target.value})}
                                fullWidth
                            />
                            <TextField
                                label="semester"
                                value={coordinator.imageUrl}
                                onChange={(e) => setCoordinator({...coordinator, semester: e.target.value})}
                                fullWidth
                            />

                            <TextField
                                label="email"
                                value={coordinator.imageUrl}
                                onChange={(e) => setCoordinator({...coordinator, email: e.target.value})}
                                fullWidth
                            />
                            <TextField
                                label="CMS-ID"
                                value={coordinator.imageUrl}
                                onChange={(e) => setCoordinator({...coordinator, cmsID: e.target.value})}
                                fullWidth
                            />
                            <TextField
                                label="contact number"
                                value={coordinator.imageUrl}
                                onChange={(e) => setCoordinator({...coordinator, contact: e.target.value})}
                                fullWidth
                            />

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

            {/*New Componenet ends here*/}

            <Card>
                <ArgonBox p={2}>
                    <Grid container spacing={4}>
                        {cards.map((card, index) => (
                            <Card className={classes.card} key={index} style={{
                                justifyContent: "space-around", alignItems: 'space-between'
                            }}>
                                <ArgonBox p={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6} xl={4}>
                                            <DefaultProjectCard
                                                image={card.image || sportsGala} alt="Card Image"
                                                label=""
                                                title={card.name}
                                                description={
                                                    card.details ||
                                                    "The Sports Gala at Sukkur IBA University " +
                                                    "is an annual event featuring a" +
                                                    " variety of sports and activities for students, faculty," +
                                                    " and staff. It is an opportunity to come together and showcase " +
                                                    "athletic skills, as well as to promote physical health and wellness " +
                                                    "on campus."
                                                }
                                                action={{
                                                    type: "internal",
                                                    route: "./view-sports",
                                                    color: "info",
                                                    label: "View Event",
                                                }}
                                            />
                                            <div className={classes.cardActions}>
                                                <IconButton onClick={() => handleEdit(index)}>
                                                    <Edit color='info'/>
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(index)}>
                                                    <Delete color='error'/>
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </ArgonBox>
                            </Card>
                        ))}
                    </Grid>
                </ArgonBox>
            </Card>
        </div>
    );
}

export default AddCoordinator;
