import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import React, {useContext, useEffect, useState} from "react";
import AddEvent from "../patron/AddEvent";
import {ApplicationContext} from "../../context/ApplicationContext";
import RegisterTeamModal from "./RegisterTeamModal";
import ViewSchedule from "../players/ViewSchedule";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import ArgonButton from "../../components/ArgonButton";
import {makeStyles} from "@mui/styles";
import {openNotificationWithIcon} from "../../components/global/notification";
import {useNavigate} from "react-router-dom";


export default function ManageTeams() {
    const navigate = useNavigate();

    const {teams, setAllTeams} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("teams")) && setAllTeams(JSON.parse(localStorage.getItem("teams")))
    }, [])

    function activateTeam(team) {
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].teamName === team.teamName) {
                teams[i].active = true
                localStorage.setItem("teams", JSON.stringify(teams))
                openNotificationWithIcon("success", "Activated", "Team has been activated to the portal")
                navigate("/dashboard")
            }
        }
    }

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                {
                    JSON.parse(sessionStorage.getItem("login")).role === 'PLAYER' ?
                        <h2>Register Team</h2> : <h2>Manage Teams</h2>

                }
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                {
                                    JSON.parse(sessionStorage.getItem("login")).role === 'PLAYER' ?
                                    <ArgonTypography variant="h6" fontWeight="medium">
                                        Register Team
                                    </ArgonTypography> :
                                    <ArgonTypography variant="h6" fontWeight="medium">
                                            Manage Team
                                    </ArgonTypography>
                                }
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                {
                                    teams && teams.map((team, index )=> {
                                        return (team.active && JSON.parse(sessionStorage.getItem("login")).role === 'PLAYER' && JSON.parse(sessionStorage.getItem("login")).playerRole === team.sport) ?
                                            <Grid item xs={12} md={6} xl={4} key={index}>
                                                <DefaultProjectCard
                                                    image={team.imageUrl}
                                                    label=""
                                                    title={team.teamName}
                                                    description={`Captain Contact: ${team.captainContactNumber}`}
                                                    action={{
                                                        type: "internal",
                                                        route: "/manage-sports",
                                                        color: "info",
                                                        label: "",
                                                    }}
                                                />
                                                <div className={"d-flex justify-content-center"}>
                                                    {JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' &&
                                                        <button className="btn btn-primary">Activate Team</button>}
                                                </div>
                                            </Grid> : (JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' && JSON.parse(sessionStorage.getItem("login")).executorRole === team.sport) &&
                                            <Grid item xs={12} md={6} xl={4}>
                                                <DefaultProjectCard
                                                    image={team.imageUrl}
                                                    label=""
                                                    title={''}
                                                    description={``}
                                                    action={{
                                                        type: "internal",
                                                        route: "/manage-sports",
                                                        color: "info",
                                                        label: "",
                                                    }}
                                                />
                                                <div style={{backgroundColor: '#e5e3e3'}}>
                                                    <span>Team Name: {team.teamName}</span><br/>
                                                    <span>Captain Contact Number:   <a
                                                        href={`tel:${team.captainContactNumber}`}>{team.captainContactNumber}</a> </span><br/>
                                                    <span>Team Email: <a
                                                        href={`mailto:${team.email}`}>{team.email}</a> </span><br/>
                                                    <span>Captain Name: {team.captainName}</span> <br/>
                                                    <span>Sport: {team.sport}</span>
                                                </div>
                                                <div className={"d-flex justify-content-center"}>
                                                    {JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' &&
                                                        <button onClick={() => activateTeam(team)}
                                                                disabled={team.active} className="btn btn-primary">Activate
                                                            Team</button>}
                                                </div>
                                            </Grid>
                                    })
                                }

                            </Grid>
                        </ArgonBox>
                        <RegisterTeamModal/>
                        <ArgonBox mb={2}/>
                        {/*<ViewSchedule/>*/}
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
