// react-router-dom components
import {Link, useNavigate} from "react-router-dom";

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

// Images
const bgImage = "https://thumbs.dreamstime.com/b/soccer-football-background-sport-poster-flyer-space-77780744.jpg";

// "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

function Cover() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        fullName: '',
    })
    const navigate = useNavigate()
    const signUp = () => {
        localStorage.setItem('register', JSON.stringify(user))
        navigate("authentication/sign-in")
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
                                        placeholder="Name"/>
                        </ArgonBox>
                        <ArgonBox mb={2}>
                            <ArgonInput value={user.username}
                                        onChange={(e) => setUser({...user, username: e.target.value})} type="email"
                                        placeholder="CMS-ID"/>
                        </ArgonBox>
                        <ArgonBox mb={2}>
                            <ArgonInput value={user.password}
                                        onChange={(e) => setUser({...user, password: e.target.value})} type="password"
                                        placeholder="Password"/>
                        </ArgonBox>
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
