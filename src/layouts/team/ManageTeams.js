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
                                    teams.map(events=> {
                                        return  <ArgonBox m={3} >
                                            <Card>

                                            </Card>
                                        </ArgonBox>
                                    })
                                }
                            </Grid>
                        </ArgonBox>
                        <RegisterTeamModal/>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
