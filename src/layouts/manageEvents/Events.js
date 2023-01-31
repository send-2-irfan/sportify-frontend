import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "../../assets/images/home-decor-1.jpg";
import sportsGala from "../../assets/images/sportsEvent.jpg";

import homeDecor2 from "../../assets/images/home-decor-2.jpg";
import homeDecor3 from "../../assets/images/home-decor-3.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import React, {useContext, useEffect, useState} from "react";
import AddEvent from "../patron/AddEvent";
import {ApplicationContext} from "../../context/ApplicationContext";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";


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
export default function Events() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true);
    }

    const {allEvents, setAllEvents} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("events")) && setAllEvents(JSON.parse(localStorage.getItem("events")))
    }, [])

    function handleEdit(index) {

    }

    function handleDelete(name) {
        let eventsNew = []
        for (let i = 0; i < allEvents.length; i++) {
            if (allEvents[i].name !== name) {
                eventsNew.push(allEvents[i])
            }
        }
        localStorage.setItem('events', JSON.stringify(eventsNew))
        setAllEvents(eventsNew)
    }

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Events</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    Manage Events
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                {
                                    allEvents.map(events => {
                                        return <Grid item xs={12} md={6} xl={4}>
                                            <DefaultProjectCard
                                                image={events.imageUrl}
                                                label=""
                                                title={events.name}
                                                description={events.detail}
                                                action={{
                                                    type: "internal",
                                                    route: "/pages/profile/profile-overview",
                                                    color: "info",
                                                    label: "View Event",
                                                }}
                                            />
                                            <div className={classes.cardActions}>
                                                <IconButton onClick={(index) => handleEdit(index)}>
                                                    <Edit color='info'/>
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(name)}>
                                                    <Delete color='error'/>
                                                </IconButton>
                                            </div>
                                        </Grid>
                                    })
                                }

                            </Grid>
                        </ArgonBox>
                        <AddEvent/>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
