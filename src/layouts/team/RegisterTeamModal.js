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
import {openNotificationWithIcon} from "../../components/global/notification";


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

function RegisterTeamModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [file, setFile] = useState(null);
    const [team, setTeam] = useState({
        teamName: '',
        sport: '',
        captainName: '',
        captainContactNumber: '',
        email: '',
        active: JSON.parse(sessionStorage.getItem("login")).role==='PLAYER' ? false : true,
        imageUrl: '',
    })


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const {setAllTeams} = useContext(ApplicationContext)


    const handleDelete = (index) => {
        setCards(cards.filter((card, i) => i !== index));
    };
    const onImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            let data = reader.result;
            setTeam({...team, imageUrl: data});
        });
        reader.readAsDataURL(file);
    }


    const handleAdd = (e) => {
        let allTeams = JSON.parse(localStorage.getItem("teams"))
        if (allTeams && allTeams.length > 0) {
            allTeams.push(team)
            localStorage.setItem("teams", JSON.stringify(allTeams))
            setTeam({
                teamName: '',
                sport: '',
                captainName: '',
                captainContactNumber: '',
                email: '',
                imageUrl: '',
            })
            setAllTeams(allTeams)
            JSON.parse(sessionStorage.getItem("login")).role==='PLAYER'? openNotificationWithIcon("warning", "Request Sent","Request sent to executor for adding team") :openNotificationWithIcon("success", "Team Added","Team Added Successfully")
            handleClose()
        } else {
            let teams = []
            teams.push(team)
            localStorage.setItem("teams", JSON.stringify(teams))
            setTeam({
                teamName: '',
                sport: '',
                captainName: '',
                captainContactNumber: '',
                email: '',
                imageUrl: '',
            })
            setAllTeams(teams)
            handleClose()
        }
    };

    return (
        <div>
            <Grid onClick={handleOpen} style={{width: '15%', marginTop: '20px', marginLeft: '20px'}}>
                <PlaceholderCard title={{variant: "h5", text: "Register Team"}} outlined/>
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
                            Register Team
                        </ArgonTypography>
                    </ArgonBox>
                    <ArgonBox pt={2} pb={3} px={3} style={{marginTop: '-20px'}}>
                        <ArgonBox component="form" role="form">
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Team Name'
                                            value={team.teamName}
                                            onChange={(e) => setTeam({...team, teamName: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder='Sport Name'
                                            value={team.sport}
                                            onChange={(e) => setTeam({...team, sport: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder="Captain Name"
                                            value={team.captainName}
                                            onChange={(e) => setTeam({...team, captainName: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder="Captain Contact Number"
                                            value={team.captainContactNumber}
                                            onChange={(e) => setTeam({...team, captainContactNumber: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder="Captain Email"
                                            value={team.email}
                                            onChange={(e) => setTeam({...team, email: e.target.value})}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonTypography color='gray' style={{fontSize:'0.8rem'}}>Upload Fee Receipt</ArgonTypography>
                                <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
                                            placeholder="Upload Fee Receipt"
                                            type={"file"}
                                            accept="image/png,image/gif,image/jpeg"
                                            onChange={(e) => onImageChange(e)}
                                            fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mt={4} mb={1}>
                                <ArgonButton onClick={handleClose} variant="gradient" color="dark"
                                             style={{width: '48%', marginRight: "5px"}}>
                                    Cancel
                                </ArgonButton>
                                <ArgonButton variant="gradient" color="info" onClick={(e) => handleAdd(e)}
                                             style={{width: '48%'}}>
                                    Register
                                </ArgonButton>
                            </ArgonBox>
                        </ArgonBox>
                    </ArgonBox>
                </Card>
            </Modal>

            {/*New Componenet ends here*/}

            {/*<Card>*/}
            {/*    <ArgonBox p={2}>*/}
            {/*        <Grid container spacing={4}>*/}
            {/*            {cards.map((card, index) => (*/}
            {/*                <Card className={classes.card} key={index} style={{*/}
            {/*                    justifyContent: "space-around", alignItems: 'space-between'*/}
            {/*                }}>*/}
            {/*                    <ArgonBox p={2}>*/}
            {/*                        <Grid container spacing={2}>*/}
            {/*                            <Grid item xs={12} md={6} xl={4}>*/}
            {/*                                <DefaultProjectCard*/}
            {/*                                    image={card.image || sportsGala} alt="Card Image"*/}
            {/*                                    label=""*/}
            {/*                                    title={card.name}*/}
            {/*                                    description={*/}
            {/*                                        card.details ||*/}
            {/*                                        "The Sports Gala at Sukkur IBA University " +*/}
            {/*                                        "is an annual event featuring a" +*/}
            {/*                                        " variety of sports and activities for students, faculty," +*/}
            {/*                                        " and staff. It is an opportunity to come together and showcase " +*/}
            {/*                                        "athletic skills, as well as to promote physical health and wellness " +*/}
            {/*                                        "on campus."*/}
            {/*                                    }*/}
            {/*                                    action={{*/}
            {/*                                        type: "internal",*/}
            {/*                                        route: "./view-sports",*/}
            {/*                                        color: "info",*/}
            {/*                                        label: "View Event",*/}
            {/*                                    }}*/}
            {/*                                />*/}
            {/*                                <div className={classes.cardActions}>*/}
            {/*                                    <IconButton onClick={() => handleEdit(index)}>*/}
            {/*                                        <Edit color='info'/>*/}
            {/*                                    </IconButton>*/}
            {/*                                    <IconButton onClick={() => handleDelete(index)}>*/}
            {/*                                        <Delete color='error'/>*/}
            {/*                                    </IconButton>*/}
            {/*                                </div>*/}
            {/*                            </Grid>*/}
            {/*                        </Grid>*/}
            {/*                    </ArgonBox>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </Grid>*/}
            {/*    </ArgonBox>*/}
            {/*</Card>*/}
        </div>
    );
}

export default RegisterTeamModal;
