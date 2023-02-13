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
import InputLabel from '@mui/material/InputLabel';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {openNotificationWithIcon} from "../../components/global/notification";
import ArgonButton from "../../components/ArgonButton";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import {useNavigate} from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
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
    const [open, setOpen] = useState(false);
    const {sports, coordinators} = useContext(ApplicationContext)
    const [coordinatorName, setCoordinatorName] = React.useState('');
    const {allEvents, setAllEvents} = useContext(ApplicationContext)

    const [sportNames, setSportNames] = React.useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeSportNames = (event) => {
        const {target: {value},} = event;
        setSportNames(typeof value === 'string' ? value.split(',') : value,);
    };


    const handleChangeCoordinatorName = (event) => {
        setCoordinatorName(event.target.value);
    };


    const classes = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async (selectedEvent) => {
        try {
            selectedEvent.sports = sportNames;
            selectedEvent.coordinatorName = coordinatorName;
            let tempEvent = []
            for (let events of allEvents) {
                if (events.name !== selectedEvent.name) {
                    tempEvent.push(events)
                    continue
                }else{
                    tempEvent.push(selectedEvent)
                    continue
                }
            }
            sessionStorage.setItem("events", JSON.stringify(tempEvent))
            openNotificationWithIcon("success", "Done", "Coordinator and Sports have been assigned to event")
            setIsModalOpen(false);
        } catch (err) {
            console.log(err)
            openNotificationWithIcon("error", "Error", "Sorry, you can't assign coordinator or sports on event for now")
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        JSON.parse(localStorage.getItem("events")) && setAllEvents(JSON.parse(localStorage.getItem("events")))
    }, [])

    const navigate = useNavigate();

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
                                        return <Grid style={{backgroundColor: 'whitesmoke', borderRadius: '5%'}} item
                                                     xs={12} md={6} xl={4} p={3} ml={1}>
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
                                                    Manage Event
                                                </button>
                                            </div>
                                            {/* dropdown menu ends here*/}


                                            <Modal title="Manage Sports and Coordinators" open={isModalOpen}
                                                   // onOk={}
                                                   style={{
                                                       marginTop: '12%',
                                                   }}
                                                   onCancel={handleCancel}>

                                                <div className="row mb-4">

                                                        {/*<label htmlFor="Manage Sports">Select Sports for*/}
                                                        {/*    Event</label>*/}
                                                        <div className={"col-sm-12 col-lg-6 col-xl-6 col-md-12"}>
                                                            <Grid onClick={()=>navigate('/manage-sports')} style={{width:'200px'}}>
                                                                <PlaceholderCard title={{variant: "h5", text: "Add Sports"}} outlined/>
                                                            </Grid>
                                                        </div>
                                                        <div className={"col-sm-12 col-lg-6 col-xl-6 col-md-12"}>
                                                            <Grid onClick={()=>navigate('/manage-coordinator')} style={{width:'200px'}}>
                                                                <PlaceholderCard title={{variant: "h5", text: "Add Coordinator"}} outlined/>
                                                            </Grid>
                                                        </div>

                                                    </div>
                                            </Modal>





                                            {/*<Modal width={'40%'} title="Modify Event" open={isModalOpen}*/}
                                            {/*       onOk={(events) => handleOk(events)}*/}
                                            {/*       style={{*/}
                                            {/*           marginTop: '12%',*/}
                                            {/*       }}*/}
                                            {/*       onCancel={handleCancel}>*/}

                                            {/*    <div className="row mb-4">*/}
                                            {/*        <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">*/}
                                            {/*            <label htmlFor="coodinator select">Select Sports for*/}
                                            {/*                Event</label>*/}
                                            {/*            <div>*/}
                                            {/*                <FormControl sx={{m: 1, minWidth: 200}} size="small">*/}
                                            {/*                    <InputLabel*/}
                                            {/*                        id="demo-select-large">Coordinator</InputLabel>*/}
                                            {/*                    <Select*/}
                                            {/*                        labelId="demo-select-large"*/}
                                            {/*                        id="demo-select-large"*/}
                                            {/*                        value={coordinatorName}*/}
                                            {/*                        label="Age"*/}
                                            {/*                        onChange={handleChangeCoordinatorName}*/}
                                            {/*                    >*/}
                                            {/*                        {*/}
                                            {/*                            coordinators.map(coordinator => {*/}
                                            {/*                                return <MenuItem key={coordinator.fullName}*/}
                                            {/*                                                 value={coordinator.fullName}>*/}
                                            {/*                                    <em>{coordinator.fullName}</em>*/}
                                            {/*                                </MenuItem>*/}
                                            {/*                            })*/}
                                            {/*                        }*/}
                                            {/*                    </Select>*/}
                                            {/*                </FormControl>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">*/}
                                            {/*            <label htmlFor="coodinator select">Select Coordinators for*/}
                                            {/*                Event</label>*/}
                                            {/*            <div>*/}
                                            {/*                <FormControl sx={{m: 1, width: 300}}>*/}
                                            {/*                    <InputLabel*/}
                                            {/*                        id="demo-multiple-name-label">Sports</InputLabel>*/}
                                            {/*                    <Select*/}
                                            {/*                        labelId="demo-multiple-name-label"*/}
                                            {/*                        id="demo-multiple-name"*/}
                                            {/*                        multiple*/}
                                            {/*                        value={sportNames}*/}
                                            {/*                        onChange={handleChangeSportNames}*/}
                                            {/*                        input={<OutlinedInput label="Name"/>}*/}
                                            {/*                        MenuProps={MenuProps}*/}
                                            {/*                    >*/}
                                            {/*                        {*/}
                                            {/*                            sports.map(sport => {*/}
                                            {/*                                return <MenuItem key={sport.sportName}*/}
                                            {/*                                                 value={sport.sportName}>*/}
                                            {/*                                    <em>{sport.sportName}</em>*/}
                                            {/*                                </MenuItem>*/}
                                            {/*                            })*/}
                                            {/*                        }*/}
                                            {/*                    </Select>*/}
                                            {/*                </FormControl>*/}
                                            {/*            </div>*/}

                                            {/*        </div>*/}
                                            {/*        <div className="col-sm-12 col-lg-6 col-xl-6 col-md-12">*/}
                                            {/*            /!*   drop down 2*!/*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</Modal>*/}
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
