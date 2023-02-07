import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import React, {useContext, useEffect, useState} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";
import AddSport from "../patron/AddSport";
import IconButton from "@mui/material/IconButton";
import {makeStyles} from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";


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

const ITEM_HEIGHT = 48;

export default function ManageSports() {
    const classes = useStyles();
    const {sports, setSports} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("sports")) && setSports(JSON.parse(localStorage.getItem("sports")))
    }, [])

    const [show,setShow] = useState(false);
    const openModal = () =>{
        setShow(true);
    }

    const [showPlayer,setShowPlayer] = useState(false);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const opened = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClos = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Manage Sports</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontcolor="#32325d" fontWeight="medium" >
                                    Manage Sports
                                </ArgonTypography>
                            </ArgonBox>

                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                {
                                    sports.map(sports => {
                                        return <Grid item xs={12} md={6} xl={3}>
                                            <DefaultProjectCard
                                                image={sports.imageUrl}
                                                label={`Sport Fees: Rs. ${sports.fee}`}
                                                title={`Sport Title: ${sports.sportName}`}
                                                description={`Sport Description: ${sports.description}`}
                                                action={{
                                                    type: "internal",
                                                    route: "view-sports",
                                                    color: "info",
                                                    label: "",
                                                }}
                                            />
                                        </Grid>
                                    })
                                }
                                <AddSport/>
                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
