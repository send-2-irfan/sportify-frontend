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

function AddSport() {
    const [sport, setSport] = useState('');
    const [open, setOpen] = useState(false);
    const {sports, setSports} = useContext(ApplicationContext)
    const [sportData, setSportsData] = useState({
        sportName: sport,
        description: '',
        imageUrl: '',
        fee: '',
        eventId: ''
    })

    const handleSportsChange = (event) => {
        event.preventDefault()
        setSport(event.target.value);
    };

    const handleAdd = (event) => {
        event.preventDefault();

        if (JSON.parse(localStorage.getItem("sports"))) {
            let items = JSON.parse(localStorage.getItem("sports"))
            items.push(sportData)
            localStorage.setItem("sports", JSON.stringify(items))
            setSports(items)
            setSportsData({
                sportName: '',
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
            handleClose();
        } else {
            let sportNew = []
            sportNew.push(sportData)
            localStorage.setItem("sports", JSON.stringify(sportNew))
            setSports(sportNew)
            setSportsData({
                sportName: '',
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
            handleClose();
        }

    };

    function handleEdit(index) {

    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const onImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let data = reader.result;
            setSportsData({...sportData, imageUrl: data});
        });
        reader.readAsDataURL(file);
    }


    return (
        <div>
            <Grid onClick={handleOpen} style={{ marginTop: '20px', marginLeft: '20px'}}>
                <PlaceholderCard title={{variant: "h5", text: "Add New Sport"}} outlined/>
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
                            Register Sport
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonBox pt={2} pb={3} px={3} style={{marginTop: '-20px'}}>
                        <ArgonBox component="form" role="form">
                            <ArgonBox mb={1.5}>
                                <ArgonInput
                                    placeholder="Name"
                                    id="Name"
                                    value={sportData.sportName}
                                    onChange={(e)=> setSportsData({...sportData, sportName: e.target.value})}
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={1.5} >
                                <ArgonInput
                                    placeholder="Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    value={sportData.description}
                                    onChange={(e)=> setSportsData({...sportData, description: e.target.value})}
                                    margin="normal"
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={1.5}>
                                <ArgonInput
                                    placeholder="Fee"
                                    type="number"
                                    variant="outlined"
                                    value={sportData.fee}
                                    onChange={(e)=> setSportsData({...sportData, fee: e.target.value})}
                                    margin="normal"
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={1.5}>
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
                                    Add Sport
                                </ArgonButton>
                            </ArgonBox>
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </Modal>
        </div>
    );
}

export default AddSport;
