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
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function ViewSchedule() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const {schedule, setAllSchedule} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("schedules")) && setAllSchedule(JSON.parse(localStorage.getItem("schedules")))
    }, [])

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Sports List</h1>
                <ArgonBox mb={1}>
                    <Card>
                        <ArgonBox pt={1} px={2}>
                            <ArgonBox>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    <h2>Schedules</h2>
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>

            <ArgonBox>
                {
                    schedule.map((item, index)=>{
                        return <ArgonBox style={{boxSizing:'border-box', padding:'2%', margin:'2%'}} mb={2}>
                            <Grid container spacing={3} style={{ flex:1 ,justifyContent:'space-around', alignItems:'center'}}>
                                <Grid item xs>
                                    <Avatar style={{width:'150px', height:'150px', backgroundColor:'orangered', color:'whitesmoke'}}>{item.teamA}</Avatar>
                                </Grid>
                                <Grid item xs={6} mr={6}>
                                    <Item><h1>VS</h1></Item>
                                    <Item><h3>Date: {item.matchDate}</h3></Item>
                                    <Item><h3>Time: {item.matchTime}</h3></Item>
                                    <Item><h3>Venue: {item.matchLocation}</h3></Item>
                                </Grid>
                                <Grid item m xs={3} style={{alignItems:'flex-start', justifyContent:'flex-end',}}>
                                    <Avatar style={{width:'150px', height:'150px' , backgroundColor:'orangered', color:'whitesmoke', }}>{item.teamA}</Avatar>
                                </Grid>
                            </Grid>
                        </ArgonBox>
                    })
                }
            </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
