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

function AddExecutor() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [executors, setExecutors] = useState({
        name: '',
        cms:'',
        department: '',
        semester:'',
        sport:'',
        email:'',
        contact:'',
        imageUrl: ''
    })


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {setAllExecutors } = useContext(ApplicationContext)


    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };


    const onImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let data = reader.result;
            setExecutors({...executors, imageUrl: data});
        });
        reader.readAsDataURL(file);
    }


    const handleAdd = (e) => {
        if (JSON.parse(localStorage.getItem("executors"))) {
            let items = JSON.parse(localStorage.getItem("executors"))
            items.push(executors)
            localStorage.setItem("executors", JSON.stringify(items))
            setAllExecutors(items)
            setExecutors({
                name: '',
                cms:'',
                department: '',
                semester:'',
                sport:'',
                email:'',
                contact:'',
                imageUrl: ''
            })
            handleClose();
        } else {
            let executorNew = []
            executorNew.push(executors)
            localStorage.setItem("executors", JSON.stringify(executorNew))
            setAllExecutors(executorNew)
            setExecutors({
                name: '',
                cms:'',
                department: '',
                semester:'',
                sport:'',
                email:'',
                contact:'',
                imageUrl: ''
            })
            handleClose();
        }
    };

    return (
        <div>
            <Grid onClick={handleOpen} style={{width: '15%'}} mb={2} ml={2}>
                <PlaceholderCard title={{variant: "h5", text: "Add Executor"}} outlined/>
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
                            Register Executor
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonBox pt={2} pb={3} px={3} style={{marginTop: '-20px'}}>
                        <ArgonBox component="form" role="form">
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Name'
                                            value={executors.name}
                                            onChange={(e) => setExecutors({...executors, name: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='CMS-ID'
                                            value={executors.cms}
                                            onChange={(e) => setExecutors({...executors, cms: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Department'
                                            value={executors.department}
                                            onChange={(e) => setExecutors({...executors, department: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Sport'
                                            value={executors.sport}
                                            onChange={(e) => setExecutors({...executors, sport: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Email'
                                            value={executors.email}
                                            onChange={(e) => setExecutors({...executors, email: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Contact Number'
                                            value={executors.contact}
                                            onChange={(e) => setExecutors({...executors, contact: e.target.value})}
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
                                <ArgonButton variant="gradient" color="info" onClick={(e) => handleAdd(e)} style={{width: '45%'}}>
                                    Add Executor
                                </ArgonButton>
                            </ArgonBox>
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </Modal>
        </div>
    );
}

export default AddExecutor;
