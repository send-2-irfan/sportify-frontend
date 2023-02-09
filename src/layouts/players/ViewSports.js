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

import {ApplicationContext} from "../../context/ApplicationContext";


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
                <ArgonBox mb={3} mt={6}>
                    <Card>
                        <ArgonBox pt={1} px={2}>
                            <ArgonBox>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    List of Available Sports
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
                                                    route: "/register-teams",
                                                    color: "primary",
                                                    label: "Register",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                })
                            }
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
