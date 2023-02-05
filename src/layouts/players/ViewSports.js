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
// import AddSportForm from "../../examples/CustomCards/AddSportForm";
// import SportsRegistrationForm from './RegistrationForm';

export default function ViewSports() {

    const {sports, setSports} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("sports")) && setSports(JSON.parse(localStorage.getItem("sports")))
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
                                    <h2>List of Available Sports</h2>
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            {
                                sports.map((sport,index) =>{
                                    return <Grid container spacing={3} style={{marginTop:'-10px'}} key={index}>
                                        <Grid item xs={12} md={6} xl={8}>
                                            <SportsCardForView
                                                image={sport.imageUrl}
                                                label={"fee "+sport.fee}
                                                title={sport.sportName}
                                                description={sport.description}
                                                action={{
                                                    type: "internal",
                                                    route: "/manage-teams",
                                                    color: "primary",
                                                    label: "Register",
                                                }}

                                            />
                                        </Grid>
                                    </Grid>
                                })
                            }

                            {/* <Grid container spacing={3}>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={cricketImg}
                                        label="fee 3600"
                                        title="Cricket"
                                        description="Cricket is a game of 11 players. It is loved allover Pakistan. I was started by English people."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "Register",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={hockeyImg}
                                        label="fee 4000"
                                        title="Hockey"
                                        description="Hockey is something that every person has his or her own specific opinion about."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "Register",
                                        }}
                                    />
                                </Grid>
                               

                            </Grid> */}
                        </ArgonBox>
                    </Card>
                    {/*<SimpleSelect />*/}
                    {/*<FormDialog xs={{color: 'black', backgroundColor:'blue', background:"black"}} />*/}
                    {/*/!*<SportsRegistrationForm />*!/*/}

                </ArgonBox>

                {/*<AddSportForm />*/}
                {/*<FootballTeamRegistrationForm />*/}
                {/* <Scoreboard />*/}

                {/*<AddEvent />*/}
                {/*<AddSportsDemo />*/}

            </DashboardLayout>
        </>
    )
}
