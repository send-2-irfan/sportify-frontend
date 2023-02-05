import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import hockeyImg from "../../assets/images/hockey.jpg";
import cricketImg from "../../assets/images/cricket.jpg";
import {useContext, useEffect, useState} from "react";
import SportsCardForView from "../../examples/Cards/SportsCardForView";
import FootballTeamRegistrationForm from "../../examples/CustomCards/TeamRegistrationForm";
import Scoreboard from "../Executor/ManageFinalScore";
import AddSportDemo from "../patron/AddSportsDemo.js";
import {ApplicationContext} from "../../context/ApplicationContext";
import CardMedia from "@mui/material/CardMedia";
import ArgonButton from "../../components/ArgonButton";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import {Avatar, ListItem} from "@mui/material";
// import AddSportForm from "../../examples/CustomCards/AddSportForm";
// import SportsRegistrationForm from './RegistrationForm';

import homeDecor3 from "../../assets/images/img-3.jpg";
import homeDecor4 from "../../assets/images/hockey.jpg";
import football from "../../assets/images/img-1.jpg";

export default function ViewTeams() {

    const {teams, setAllTeams} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("teams")) && setAllTeams(JSON.parse(localStorage.getItem("teams")))
    }, [])

    return (
        <>
            {/*<DashboardLayout>*/}
            {/*    <DashboardNavbar/>*/}
            {/*    <h1 style={{color:"white"}}>Sports List</h1>*/}
            {/*    <ArgonBox mb={1}>*/}
            {/*        <Card>*/}
            {/*            <ArgonBox pt={1} px={2}>*/}
            {/*                <ArgonBox>*/}
            {/*                    <ArgonTypography variant="h6" fontWeight="medium">*/}
            {/*                        <h2>List of Available Sports</h2>*/}
            {/*                    </ArgonTypography>*/}
            {/*                </ArgonBox>*/}
            {/*            </ArgonBox>*/}
                        <ArgonBox p={2}>
                            {
                                teams.map((item, index)=>{
                                    return <Box mb={3} mt={3} sx={{ display: 'flex', justifyContent:'space-evenly' }} key={index} style={{backgroundColor: 'whitesmoke'}}>
                                        <Grid container spacing={12} pl={6}>
                                            <Grid item xs="auto" mt={2}>
                                                <img src={homeDecor4} style={{width:'200px', height:'150px', borderRadius:'10%'}}/>
                                                <ListItem>CS Strikers</ListItem>
                                            </Grid>
                                            <Grid item xs={6} style={{display:'flex', justifyContent:'center'}}>
                                                <h1 style={{marginRight:'-10%'}}>VS</h1>
                                                <ListItem style={{marginRight:'-70%'}}><br/> {item.sport}</ListItem>
                                            </Grid>
                                            <Grid item xs={3} mb={1} mt={2}>
                                                <img src={football} style={{width:'200px', height:'150px', borderRadius:'10%'}}/>
                                                <ListItem>BBA Gladiators</ListItem>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                })
                            }
                        </ArgonBox>
            {/*        </Card>*/}
            {/*    </ArgonBox>*/}
            {/*</DashboardLayout>*/}
        </>
    )
}
