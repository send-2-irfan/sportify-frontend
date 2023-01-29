import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import hockeyImg from "../../assets/images/hockey.jpg";
import cricketImg from "../../assets/images/cricket.jpg";
import { useState } from "react";

import chessImg from "../../assets/images/img-3.jpg";
import homeDecor2 from "../../assets/images/home-decor-2.jpg";
import homeDecor3 from "../../assets/images/home-decor-3.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import SportsCardForView from "../../examples/Cards/SportsCardForView";
import SimpleSelect from "./CricketRegistrationForm";
import FormDialog from "./AddSportsModule";
import AddSportForm from "../../examples/CustomCards/AddSportForm";
import FootballTeamRegistrationForm from "../../examples/CustomCards/TeamRegistrationForm";
import Scoreboard from "../Executor/ManageFinalScore";
import AddEvent from "../patron/AddEvent";
import AddSport from "../patron/AddSport";
// import AddSportForm from "../../examples/CustomCards/AddSportForm";
// import SportsRegistrationForm from './RegistrationForm';

export default function ViewSports() {
    const [sports,setsports] = useState([
        {
            id:1,
            name:"Cricket",
            description:"Cricket is a game of 11 players. It is loved allover Pakistan. I was started by English people.",
            fee:3600,
            image:cricketImg
        },
        {
            id:2,
            name:"Hockey",
            description:"Hockey is something that every person has his or her own specific opinion about.",
            fee:4000,
            image:hockeyImg
        },
        {
            id:3,
            name:"Chess",
            description:"Chess is a two-player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in an eight-by-eight grid.",
            fee:2000,
            image:chessImg
        },
        {
            id:4,
            name:"Football",
            description:"Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal.",
            fee:3000,
            image:homeDecor2
        }
    ]);

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Sports List</h1>
                <ArgonBox mb={1}>


                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    <h2>List of Available Sports</h2>
                                </ArgonTypography>
                            </ArgonBox>
                            <ArgonBox mb={1}>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            {sports.map((sport) => (
                                <Grid container spacing={3} style={{marginTop:'5px'}}>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={sport.image}
                                        label={"fee "+sport.fee}
                                        title={sport.name}
                                        description={sport.description}
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "Register",
                                        }}
                                    />
                                </Grid>
                                </Grid>
                            ))}

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

                <AddSportForm />
                <FootballTeamRegistrationForm />
                <Scoreboard />

                <AddEvent />
                <AddSport />

            </DashboardLayout>
        </>
    )
}
