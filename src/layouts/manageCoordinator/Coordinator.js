import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";

import Bill from "../billing/components/Bill";
import ArgonAvatar from "../../components/ArgonAvatar";
import AddCoordinator from "../patron/AddCoordinator";
import React, {useContext, useEffect} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";


export default function ManageCoordinator() {
    const {coordinators, setAllCoordinators} = useContext(ApplicationContext)
    useEffect(() => {
        fetchAllUsers()
    }, [])

    const fetchAllUsers = async () => {
        let allUsers = await JSON.parse(localStorage.getItem("users"))
        let coordinators = []
        for (let user of allUsers) {
            user.role === 'COORDINATOR' && coordinators.push(user)
        }
        setAllCoordinators(coordinators)
    }


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
                                <ArgonTypography variant="h6" fontcolor="#32325d" fontWeight="medium">
                                    Manage Coordinator
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2}>
                            <div className="row">
                            {
                                coordinators.map(events => {
                                    return <Grid className={"col-sm-12 col-lg-6 col-xl-6 col-md-12"} item p={2}>
                                        <Bill
                                            del={() => handleDelete(events.name)}
                                            name={events.fullName}
                                            type={'COORDINATOR'}
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
                        </ArgonBox>
                        <AddCoordinator/>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
