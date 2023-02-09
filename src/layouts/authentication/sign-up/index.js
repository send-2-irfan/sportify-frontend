// react-router-dom components
import {Link, useNavigate} from "react-router-dom";
import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import {useState} from "react";
import {useAuth} from "../../../context/AuthContext";
import {openNotificationWithIcon} from "../../../components/global/notification";

// Images
const bgImage = "https://thumbs.dreamstime.com/b/soccer-football-background-sport-poster-flyer-space-77780744.jpg";

// "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";
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

const names = [
    'COORDINATOR',
    'EXECUTOR',
    'PLAYER'
];

const executorRoles = [
    'CRICKET',
    'FOOTBALL',
    'CHESS',
    'TUG OF WAR',
    'BADMINTON',
    'BASKETBALL',
    'LUDO',
    'VOLLEYBALL',
    'TABLE TENNIS',
    'THROWBALL',
    'HOCKEY'
];


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function Cover() {
    const theme = useTheme();
    const [user, setUser] = useState({
        username: '',
        password: '',
        fullName: '',
        active: false,
        role: '',
        executorRole: '',
        playerRole: ''
    })
    const [personName, setPersonName] = React.useState([]);
    const [playerRole, setPlayerRole] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
        setUser({...user, role: value, active: (value === 'PATRON' || value === 'PLAYER')})
    };

    const handleChangePlayerRole = (event) => {
        const {
            target: {value},
        } = event;
        setPlayerRole(
            typeof value === 'string' ? value.split(',') : value,
        );
        setUser({...user, playerRole: value})
    };
    const navigate = useNavigate()
    const signUp = async () => {
        try {
            if (user.role === 'PATRON')
                setUser({...user, active: true})
            if (!user.username || !user.password || !user.role || !user.fullName)
                openNotificationWithIcon("error", "All fields are required", "Please fill all the fields for sign up")
            else {
                let allUsers = JSON.parse(localStorage.getItem("users"))
                if (allUsers && allUsers.length > 0) {
                    for (const usr of allUsers) {
                        if(usr.username===user.username) {
                            openNotificationWithIcon("error", "Email already in use", "Please use different email address")
                            return
                        }
                    }
                    allUsers.push(user)
                    localStorage.setItem("users", JSON.stringify(allUsers))
                    setUser({
                        username: '',
                        password: '',
                        fullName: '',
                        role: ''
                    })

                    {
                        user.role === 'EXECUTOR' ?
                        openNotificationWithIcon("info", "Your Request has been sent to Coordinator", "Your account will be activated with in 24 hours.") :
                        user.role === 'COORDINATOR' ? openNotificationWithIcon("info", "Your Request has been sent to Patron", "Your account will be activated with in 24 hours.") : ''

                    }
                    navigate("/authentication/sign-in");
                } else {
                    let allUsers = []
                    allUsers.push(user)
                    localStorage.setItem("users", JSON.stringify(allUsers))
                    setUser({
                        username: '',
                        password: '',
                        fullName: '',
                        role: ''
                    })
                    navigate("/authentication/sign-in");
                }
            }
        } catch {
            console.log("ss");
        }
    }
    return (
        <CoverLayout
            title="Welcome!"
            description="SIBA Sportify Registration Page"
            image={bgImage}
            imgPosition="top"
            button={{color: "dark", variant: "gradient"}}
        >
            <Card>
                <ArgonBox p={3} mb={1} textAlign="center">
                    <ArgonTypography variant="h5" fontWeight="medium">
                        Create Account
                    </ArgonTypography>
                </ArgonBox>
                <ArgonBox pt={2} pb={3} px={3}>
                    <ArgonBox component="form" role="form">
                        <ArgonBox mb={2}>
                            <ArgonInput value={user.fullName}
                                        onChange={(e) => setUser({...user, fullName: e.target.value})}
                                        placeholder="Full Name"/>
                        </ArgonBox>
                        <ArgonBox mb={2}>
                            <ArgonInput value={user.username}
                                        onChange={(e) => setUser({...user, username: e.target.value})} type="email"
                                        placeholder="example@example.com"/>
                        </ArgonBox>
                        <ArgonBox mb={2}>
                            <ArgonInput value={user.password}
                                        onChange={(e) => setUser({...user, password: e.target.value})} type="password"
                                        placeholder="Password"/>
                        </ArgonBox>

                        <FormControl sx={{m: 1, width: 300, mt: 3}}>
                            <Select
                                displayEmpty
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput/>}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Select Role</em>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                                inputProps={{'aria-label': 'Without label'}}
                            >
                                <MenuItem disabled value="">
                                    <em>Select Role</em>
                                </MenuItem>
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {
                            user.role === 'PLAYER' && <FormControl sx={{m: 1, width: 300, mt: 3}}>
                                <Select
                                    displayEmpty
                                    value={playerRole}
                                    onChange={handleChangePlayerRole}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Player Role</em>;
                                        }

                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    <MenuItem disabled value="">
                                        <em>Player Role</em>
                                    </MenuItem>
                                    {executorRoles.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        }
                        <ArgonBox display="flex" alignItems="center">
                            <Checkbox defaultChecked/>
                            <ArgonTypography
                                variant="button"
                                fontWeight="regular"
                                sx={{cursor: "pointer", userSelect: "none"}}
                            >
                                &nbsp;&nbsp;I agree the&nbsp;
                            </ArgonTypography>
                            <ArgonTypography
                                component="a"
                                href="#"
                                variant="button"
                                fontWeight="bold"
                                textGradient
                            >
                                Terms and Conditions
                            </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox mt={4} mb={1}>
                            <ArgonButton onClick={signUp} variant="gradient" color="dark" fullWidth>
                                sign up
                            </ArgonButton>
                        </ArgonBox>
                        <ArgonBox mt={2}>
                            <ArgonTypography variant="button" color="text" fontWeight="regular">
                                Already have an account?&nbsp;
                                <ArgonTypography
                                    component={Link}
                                    to="/authentication/sign-in"
                                    variant="button"
                                    color="dark"
                                    fontWeight="bold"
                                    textGradient
                                >
                                    Sign In
                                </ArgonTypography>
                            </ArgonTypography>
                        </ArgonBox>
                    </ArgonBox>
                </ArgonBox>
            </Card>
        </CoverLayout>
    );
}

export default Cover;
