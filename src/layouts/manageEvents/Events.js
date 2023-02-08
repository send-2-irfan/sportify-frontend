import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import {Card, Space} from 'antd';
import React, {useContext, useEffect, useState} from "react";
import AddEvent from "../patron/AddEvent";
import {ApplicationContext} from "../../context/ApplicationContext";
import {Button, Modal} from 'antd';
import {makeStyles} from "@mui/styles";
import ArgonButton from "../../components/ArgonButton";
import {Select} from 'antd';


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
    const options = [];
    const coordinator = [];
    const [allSports, setAllSports] = useState([])
    const {coordinators} = useContext(ApplicationContext)
    const fetchAllSports = async () => {
        console.log(coordinators)
        // await setAllSports(JSON.parse(localStorage.getItem("sports")))
        // for (let i = 0; i < allSports.length; i++) {
        //     options.push({
        //         label: allSports[i].sportName,
        //         value: allSports[i].sportName,
        //     });
        // }
        for (let i = 0; i < coordinators.length; i++) {
            coordinator.push({
                label: coordinators[i].username,
                value: coordinators[i].username,
            });
        }
    }

    useEffect(()=> {
        fetchAllSports()
    }, [])
    const handleChangeSports = (value) => {
        console.log(`selected ${value}`);
    };
    const handleChangeCoordinator = (value) => {
        console.log(`selected ${value}`);
    };

    const classes = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const {allEvents, setAllEvents} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("events")) && setAllEvents(JSON.parse(localStorage.getItem("events")))
    }, [])



    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Events</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    Manage Events
                                </ArgonTypography>
                            </ArgonBox>
                        </ArgonBox>
                        <ArgonBox p={2} mt={2}>
                            <Grid container spacing={3}>
                                {
                                    allEvents.map(events => {
                                        return <Grid style={{backgroundColor: 'whitesmoke', borderRadius:'5%'}} item xs={12} md={6} xl={4} p={3}>
                                            <DefaultProjectCard
                                                ml={-2}
                                                image={events.imageUrl}
                                                label=""
                                                title={events.name}
                                                description={events.detail}
                                                action={{
                                                    type: "internal",
                                                    route: "/manage-sports",
                                                    color: "info",
                                                    label: "",
                                                }}
                                            />
                                            <div className={classes.cardActions}>
                                                <button onClick={showModal} className="btn btn-outline-primary btn-sm">
                                                    Modify Event
                                                </button>
                                            </div>
                                            {/* dropdown menu ends here*/}


                                            <Modal title="Modify Event" open={isModalOpen} onOk={handleOk}
                                                   style={{
                                                       marginTop:'12%'
                                                   }}
                                                   onCancel={handleCancel}>

                                                <div className="row mb-4">
                                                    <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">
                                                        <label htmlFor="coodinator select">Select Sports for Event</label>
                                                        <Select
                                                            mode="multiple"
                                                            allowClear
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                            placeholder="Please select"
                                                            onChange={handleChangeSports}
                                                            options={options}
                                                        />
                                                    </div>
                                                    <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">
                                                        <label htmlFor="coodinator select">Select Coordinators for Event</label>
                                                        <Select
                                                            allowClear
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                            placeholder="Please select"
                                                            onChange={handleChangeCoordinator}
                                                            options={coordinator}
                                                        />
                                                    </div>
                                                    <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">
                                                        {/*   drop down 2*/}
                                                    </div>
                                                </div>
                                            </Modal>
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
