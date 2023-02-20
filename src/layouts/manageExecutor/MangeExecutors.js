// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

//  MUI base styles
import borders from "assets/theme/base/borders";
import sportsGala from "../../assets/images/bruce-mars.jpg";
// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import {Avatar, CardContent, CardHeader, Typography} from "@mui/material";
import React, {useContext, useEffect} from "react";
import AthleteCard from "./ExecutorsCardDemo";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import AddExecutor from "../patron/AddExecutor";
import {ApplicationContext} from "../../context/ApplicationContext";
import ArgonAvatar from "../../components/ArgonAvatar";
import Bill from "../billing/components/Bill";

function ManageExecutors() {
    const {borderWidth, borderColor} = borders;

    const {executors, setAllExecutors} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("executors")) && setAllExecutors(JSON.parse(localStorage.getItem("executors")))
        fetchExecutors()
    }, [])
    const fetchExecutors = async () => {

        let allUsers = await JSON.parse(localStorage.getItem("users"))
        let executor = []
        for (let user of allUsers) {
            user.role === "EXECUTOR" && executor.push(user)
        }
        setAllExecutors(executor)
    }

    function handleDelete(name) {
        let executorNew = []
        for (let i = 0; i < executors.length; i++) {
            if (executors[i].name !== name) {
                executorNew.push(executors[i])
            }
        }
        localStorage.setItem('executors', JSON.stringify(executorNew))
        setAllExecutors(executorNew)
    }

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <h1>Manage Executors</h1>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox pt={2} px={2}>
                        <ArgonBox mb={0.5}>
                            <ArgonTypography variant="h6" fontWeight="medium">
                                Manage Executors
                            </ArgonTypography>
                        </ArgonBox>
                    </ArgonBox>
                    <ArgonBox p={2}>
                        <div className="row">
                        {
                            JSON.parse(sessionStorage.getItem("login")).role === 'COORDINATOR' && executors.map(events => {
                                return <Grid className={"col-sm-12 col-lg-6 col-xl-6 col-md-12"} item p={2}>
                                    <Bill
                                        del={() => handleDelete(events.name)}
                                        name={`Name: ${events.fullName}`}
                                        type={"EXECUTOR"}
                                        company={events.username}
                                        email={JSON.stringify(events.active)}
                                        vat={events.cmsID}
                                        img={<ArgonAvatar
                                            src={"https://img.freepik.com/free-icon/businessman_318-371887.jpg?w=2000"}
                                            alt="profile-image"
                                            variant="rounded"
                                            size="xxl"
                                            shadow="sm"
                                        />}
                                    ></Bill>
                                </Grid>
                            })
                        }
                        </div>
                        <AddExecutor />
                    </ArgonBox>
                </Card>
            </ArgonBox>

        </DashboardLayout>
    );
}

export default ManageExecutors;
