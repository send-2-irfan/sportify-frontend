import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import {useContext, useEffect, useState} from "react";
import AddEvent from "../patron/AddEvent";
import {ApplicationContext} from "../../context/ApplicationContext";
import RegisterTeamModal from "./RegisterTeamModal";
import ViewSchedule from "../players/ViewSchedule";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import ArgonButton from "../../components/ArgonButton";


export default function ManageTeams() {
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true);
    }

    const {teams, setAllTeams} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("teams")) && setAllTeams(JSON.parse(localStorage.getItem("teams")))
    }, [])

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Teams</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    Manage Teams
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                {
                                    teams.map(team => {
                                        return <Grid item xs={12} md={6} xl={4}>
                                            <DefaultProjectCard
                                                image={team.imageUrl}
                                                label=""
                                                title={team.email}
                                                description={"description"}
                                                action={{
                                                    type: "internal",
                                                    route: "/manage-sports",
                                                    color: "info",
                                                    label: "View Event",
                                                }}
                                            />
                                            {/*<div className={classes.cardActions}>*/}
                                            {/*    <IconButton onClick={handleOpen}>*/}
                                            {/*        <Edit color='info' />*/}
                                            {/*    </IconButton>*/}
                                            {/*    <IconButton onClick={() => handleDelete(team.name)}>*/}
                                            {/*        <Delete color='error'/>*/}
                                            {/*    </IconButton>*/}
                                            {/*</div>*/}
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
