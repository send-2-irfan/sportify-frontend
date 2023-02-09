import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import {useContext, useEffect, useState} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ArgonAvatar from "../../components/ArgonAvatar";
import burceMars from "../../assets/images/bruce-mars.jpg";
import AppBar from "@mui/material/AppBar";

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
                <ArgonBox mb={3} mt={6}>
                    <Card>
                        <ArgonBox pt={1} px={2}>
                            <ArgonBox>
                                <ArgonTypography variant="h6" fontWeight="large">
                                    Schedules
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>


                        <ArgonBox position="relative" mr={2} ml={2} mb={2} >
                            <ArgonBox/>
                            <Card
                                sx={{
                                    py: 2,
                                    px: 2,
                                    boxShadow: ({ boxShadows: { md } }) => md,
                                }}
                                mr={3}
                            >
                                {
                                    schedule.map((schedule, index)=>{
                                       return <Grid container spacing={3} alignItems="center" style={{backgroundColor:'whitesmoke'}} key={index} mb={2}>
                                            <Grid item xs={12} md={6} lg={4} >
                                                <ArgonAvatar
                                                    style={{color:'white',backgroundColor:'blue'}}
                                                    alt="image"
                                                    variant="rounded"
                                                    size="xxl"
                                                    shadow="sm"
                                                >{schedule.teamA}</ArgonAvatar>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={6} sx={{ ml: "auto", mr:'-18%' }} >
                                                <AppBar position="static">
                                                    <Grid item>
                                                        <ArgonBox height="100%" mt={0.5} lineHeight={1}>
                                                            <ArgonTypography variant="h4" fontWeight="medium" ml={4}>
                                                                VS
                                                            </ArgonTypography> <br/>
                                                            <ArgonTypography variant="button" color="text" fontWeight="medium">
                                                                Date: {schedule.matchDate}
                                                            </ArgonTypography><br/>
                                                            <ArgonTypography variant="button" color="text" fontWeight="medium">
                                                                Match Time: {schedule.matchTime}
                                                            </ArgonTypography><br/>
                                                            <ArgonTypography variant="button" color="text" fontWeight="medium">
                                                                Match Venue: {schedule.matchLocation}
                                                            </ArgonTypography><br/>
                                                        </ArgonBox>
                                                    </Grid>
                                                </AppBar>
                                            </Grid>

                                            <Grid item xs={12} md={6} lg={1.5} sx={{ ml: "auto",  }} mb={4} >
                                                <AppBar position="static">
                                                    <ArgonAvatar
                                                        style={{backgroundColor:'blue', color:'white'}}
                                                        alt="image"
                                                        variant="rounded"
                                                        size="xxl"
                                                        shadow="sm"
                                                    >{schedule.teamB} </ArgonAvatar>
                                                </AppBar>
                                            </Grid>
                                        </Grid>
                                    })
                                }
                            </Card>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
