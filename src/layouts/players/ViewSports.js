import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import hockeyImg from "../../assets/images/hockey.jpg";
import cricketImg from "../../assets/images/cricket.jpg";

import chessImg from "../../assets/images/img-3.jpg";
import homeDecor2 from "../../assets/images/home-decor-2.jpg";
import homeDecor3 from "../../assets/images/home-decor-3.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import SportsCardForView from "../../examples/Cards/SportsCardForView";

function AlignItemsList() {
    return (
        <List sx={{ width: '100%', maxWidth: "100%", height:"10%", bgcolor: 'background.paper' }}>

            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar sx={{width:'200px', height:'200px', marginTop:'-40%'}} alt="Cindy Baker" src={sportsGala} />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}



export default function ViewSports() {

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Sports List</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    Projects
                                </ArgonTypography>
                            </ArgonBox>
                            <ArgonBox mb={1}>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={cricketImg}
                                        label=""
                                        title="Cricket"
                                        description="Cricket is a game of 11 players. It is loved allover Pakistan. I was started by English people."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "View Event",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={hockeyImg}
                                        label=""
                                        title="Hockey"
                                        description="Music is something that every person has his or her own specific opinion about."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "View Event",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3} xl={8}>
                                    <SportsCardForView
                                        image={chessImg}
                                        label=""
                                        title="scandinavian"
                                        description="Music is something that every person has his or her own specific opinion about."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "primary",
                                            label: "View Event",
                                        }}
                                    />
                                </Grid>

                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
