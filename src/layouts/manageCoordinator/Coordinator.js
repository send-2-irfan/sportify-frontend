import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
// import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
// import homeDecor1 from "../../assets/images/home-decor-1.jpg";
// import team1 from "../../assets/images/team-1.jpg";
// import team2 from "../../assets/images/team-2.jpg";
// import team3 from "../../assets/images/team-3.jpg";
// import team4 from "../../assets/images/team-4.jpg";
// import homeDecor2 from "../../assets/images/cricket.jpg";
// import homeDecor3 from "../../assets/images/img-3.jpg";
// import homeDecor4 from "../../assets/images/hockey.jpg";
// import football from "../../assets/images/img-1.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import Bill from "../billing/components/Bill";
import ArgonAvatar from "../../components/ArgonAvatar";
import burceMars from "../../assets/images/bruce-mars.jpg";
import Depeeka from "../../assets/images/team-1.jpg";
import AddCoordinator from "../patron/AddCoordinator";
import React, {useContext, useEffect} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";



export default function ManageCoordinator() {
    const {coordinators, setAllCoordinators} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("coordinators")) && setAllCoordinators(JSON.parse(localStorage.getItem("coordinators")))
    }, [])

    const profileImg = <ArgonAvatar
        src={Depeeka}
        alt="profile-image"
        variant="rounded"
        size="xxl"
        shadow="sm"
    />;

    function handleDelete(name) {
        let coordinatorNew = []
        for (let i = 0; i < coordinators.length; i++) {
            if (coordinators[i].name !== name) {
                coordinatorNew.push(coordinators[i])
            }
        }
        localStorage.setItem('coordinators', JSON.stringify(coordinatorNew))
        setAllCoordinators(coordinatorNew)
    }
    
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Coordinator</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontcolor="#32325d" fontWeight="medium" >
                                    Manage Coordinator
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            {
                                coordinators.map(events => {
                                    return <Grid container spacing={3} p={2}>
                                        <Bill
                                            del={() => handleDelete(events.name)}
                                            name={events.name}
                                            company={events.departmentName}
                                            email={events.email}
                                            vat={events.cmsID}
                                            img={<ArgonAvatar
                                                src={events.imageUrl}
                                                alt="profile-image"
                                                variant="rounded"
                                                size="xxl"
                                                shadow="sm"
                                            />}
                                        ></Bill>
                                        {/*<div>*/}
                                        {/*    <IconButton>*/}
                                        {/*        <Edit ed={() => handleDelete(events.name)} color='info' />*/}
                                        {/*    </IconButton>*/}
                                        {/*    <IconButton>*/}
                                        {/*        <Delete del={() => handleDelete(events.name)} color='error'/>*/}
                                        {/*    </IconButton>*/}
                                        {/*</div>*/}
                                    </Grid>
                                })
                            }
                        </ArgonBox>
                        <AddCoordinator/>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
