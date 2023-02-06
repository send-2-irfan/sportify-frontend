import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "../../assets/images/home-decor-1.jpg";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import homeDecor2 from "../../assets/images/cricket.jpg";
import homeDecor3 from "../../assets/images/img-3.jpg";
import homeDecor4 from "../../assets/images/hockey.jpg";
import football from "../../assets/images/img-1.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
// import SportsFormDialog from "./AddNewSportsForm";
import React, {useContext, useEffect, useState} from "react";
import PlayerRegistrationFormDialog from "layouts/players/PlayersRegistrationForm";
import {ApplicationContext} from "../../context/ApplicationContext";
import {Link} from "react-router-dom";
import AddSport from "../patron/AddSport";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


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
    const openPlayerModal = () =>{
        setShowPlayer(true);
    }

    function handleDelete(sportName) {
        let sportsNew = []
        for (let i = 0; i < sports.length; i++) {
            if (sports[i].sportName !== sportName) {
                sportsNew.push(sports[i])
            }
        }
        localStorage.setItem('sports', JSON.stringify(sportsNew))
        setSports(sportsNew)
    }

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
                                                label={sports.fee}
                                                title={sports.sportName}
                                                description={sports.description}
                                                action={{
                                                    type: "internal",
                                                    route: "view-sports",
                                                    color: "info",
                                                    label: "",
                                                }}
                                            />
                                            <div className={classes.cardActions}>

                                                <IconButton
                                                    aria-label="more"
                                                    id="long-button"
                                                    aria-controls={opened ? 'long-menu' : undefined}
                                                    aria-expanded={opened ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    MenuListProps={{
                                                        'aria-labelledby': 'long-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={opened}
                                                    onClose={handleClos}
                                                    PaperProps={{
                                                        style: {
                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                            width: '20ch',
                                                        },
                                                    }}
                                                >
                                                    <MenuItem onClick={() => handleDelete(sports.sportName)} Delete>
                                                        <Delete  color='error'/>
                                                        Delete
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </Grid>
                                    })
                                }

                                {/*<Grid item xs={12} md={6} xl={3}>*/}
                                {/*    <DefaultProjectCard*/}
                                {/*        image={homeDecor2}*/}
                                {/*        label="Fee 1200"*/}
                                {/*        title="Cricket"*/}
                                {/*        description="As Uber works through a huge amount of internal management turmoil."*/}
                                {/*        action={{*/}
                                {/*            type: "internal",*/}
                                {/*            route: "/pages/profile/profile-overview",*/}
                                {/*            color: "info",*/}
                                {/*            label: "View Sport",*/}
                                {/*        }}*/}

                                {/*    />*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12} md={6} xl={3}>*/}
                                {/*    <DefaultProjectCard*/}
                                {/*        image={homeDecor4}*/}
                                {/*        label="Fee 1200"*/}
                                {/*        title="Hockey"*/}
                                {/*        description="As Uber works through a huge amount of internal management turmoil."*/}
                                {/*        action={{*/}
                                {/*            type: "internal",*/}
                                {/*            route: "/pages/profile/profile-overview",*/}
                                {/*            color: "info",*/}
                                {/*            label: "View Sport",*/}
                                {/*        }}*/}

                                {/*    />*/}
                                {/*</Grid>*/}
                                {/*<Grid onClick={openModal} item xs={12} md={6} xl={3}>*/}
                                {/*    <DefaultProjectCard*/}
                                {/*        image={homeDecor3}*/}
                                {/*        label="Fee 1200"*/}
                                {/*        title="Chess"*/}
                                {/*        description="As Uber works through a huge amount of internal management turmoil."*/}
                                {/*        action={{*/}
                                {/*            type: "internal",*/}
                                {/*            route: "",*/}
                                {/*            color: "info",*/}
                                {/*            label: "View Sport",*/}
                                {/*        }}*/}

                                {/*    />*/}
                                {/*</Grid>*/}

                                {/* <Grid onClick={openModal} item xs={12} md={6} xl={3}>
                                    <PlaceholderCard title={{ variant: "h5", text: "Add New Sport" }} outlined />
                                </Grid> */}
                                {/*<Grid onClick={openPlayerModal} item xs={12} md={6} xl={2}>*/}
                                {/*    <PlaceholderCard title={{ variant: "h5", text: "Add New Sport" }} outlined />*/}
                                {/*</Grid>*/}
                                {/*<SportsFormDialog show={show} setShow={setShow} />*/}
                                {/*<PlayerRegistrationFormDialog show={showPlayer} setShowPlayer={setShowPlayer} />*/}
                                <AddSport/>
                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
