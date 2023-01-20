import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "../../assets/images/home-decor-1.jpg";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import homeDecor2 from "../../assets/images/cricket.jpg";
import homeDecor3 from "../../assets/images/img-3.jpg";
import homeDecor4 from "../../assets/images/hockey.jpg";
import football from "../../assets/images/img-1.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import SportsFormDialog from "./AddNewSportsForm";
import {useState} from "react";
import PlayerRegistrationFormDialog from "layouts/players/PlayersRegistrationForm";


export default function ManageSports() {
    const [show,setShow] = useState(false);
    const openModal = () =>{
        setShow(true);
    }

    const [showPlayer,setShowPlayer] = useState(false);
    const openPlayerModal = () =>{
        setShowPlayer(true);
    }

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Manage Sports</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontColor="#32325d" fontWeight="medium" >
                                    Manage Sports
                                </ArgonTypography>
                            </ArgonBox>

                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={football}
                                        label="fee 1500"
                                        title="Football"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "info",
                                            label: "View Sport",
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={homeDecor2}
                                        label="Fee 1200"
                                        title="Cricket"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "info",
                                            label: "View Sport",
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={homeDecor4}
                                        label="Fee 1200"
                                        title="Hockey"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "info",
                                            label: "View Sport",
                                        }}

                                    />
                                </Grid>
                                <Grid onClick={openModal} item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={homeDecor3}
                                        label="Fee 1200"
                                        title="Chess"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "",
                                            color: "info",
                                            label: "View Sport",
                                        }}

                                    />
                                </Grid>

                                <Grid onClick={openModal} item xs={12} md={6} xl={3}>
                                    <PlaceholderCard title={{ variant: "h5", text: "Add New Sport" }} outlined />
                                </Grid>
                                <Grid onClick={openPlayerModal} item xs={12} md={6} xl={3}>
                                    <PlaceholderCard title={{ variant: "h5", text: "Add New Sport" }} outlined />
                                </Grid>
                                <SportsFormDialog show={show} setShow={setShow} />
                                <PlayerRegistrationFormDialog show={showPlayer} setShowPlayer={setShowPlayer} />
                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
