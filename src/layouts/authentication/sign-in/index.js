import {useState} from "react";

// react-router-dom components
import {Link, useNavigate} from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import {useAuth} from "../../../context/AuthContext";
import ArgonAlert from "../../../components/ArgonAlert";
import {openNotificationWithIcon} from "../../../components/global/notification";

// Image
const bgImage = "https://i.pinimg.com/736x/33/2e/21/332e213e36c73c2cfba495ae141aa1b0.jpg";

// "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
    const [rememberMe, setRememberMe] = useState(false);

    // const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: 'Sir Asad Patron',
        username: '',
        password: '',
        role: 'PATRON',
    })

    const [pending, setPending] = useState(false);
    const checkUserPending = async () => {
        if(pending){
            openNotificationWithIcon("error", "User pending notification", "Please wait until your account is activated.");
        }else {
            openNotificationWithIcon("error", "Email or Password incorrect exception", "Username or password is incorrect");
        }
    }
    const signin = async () => {
        if(user.username==='patron@iba-suk.edu.pk' && user.password==='patron12345'){
            await sessionStorage.setItem("login", JSON.stringify(user))
            window.location.href = "/dashboard";
        }else{
            let allUsers = JSON.parse(localStorage.getItem("users"))
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].username === user.username && allUsers[i].password === user.password && allUsers[i].active) {
                    sessionStorage.setItem("login", JSON.stringify(allUsers[i]))
                    // navigate("/dashboard");
                    window.location.href = "/dashboard";
                    return
                }
            }
            for (let i = 0; i < allUsers.length; i++) {
                if(allUsers[i].username === user.username && !allUsers[i].active){
                   setPending(true);
                }
            }
            checkUserPending();

        }
    }

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    return (
        <IllustrationLayout
            title="Sign In"
            description="Enter your Email and Password to sign in"
            illustration={{
                image: bgImage,
                coordinatorName: 'SIBAU Sports Management System',
                description:
                    "Sports at Sukkur IBA University in Pakistan include a variety of outdoor and indoor activities such as cricket, football, basketball, and table tennis etc.",
            }}
        >
            <ArgonBox component="form" role="form">
                <ArgonBox mb={2}>
                    <ArgonInput value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
                                type="email" placeholder="Email" size="large"/>
                </ArgonBox>
                <ArgonBox mb={2}>
                    <ArgonInput value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
                                type="password" placeholder="Password" size="large"/>
                </ArgonBox>
                <ArgonBox display="flex" alignItems="center">
                    <Switch checked={rememberMe} onChange={handleSetRememberMe}/>
                    <ArgonTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={handleSetRememberMe}
                        sx={{cursor: "pointer", userSelect: "none"}}
                    >
                        &nbsp;&nbsp;Remember me
                    </ArgonTypography>
                </ArgonBox>
                <ArgonBox mt={4} mb={1}>
                    <ArgonButton onClick={signin} color="info" size="large" fullWidth>
                        Sign In
                    </ArgonButton>
                </ArgonBox>
                <ArgonBox mt={3} textAlign="center">
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                        Don&apos;t have an account?{" "}
                        <ArgonTypography
                            component={Link}
                            to="/authentication/sign-up"
                            variant="button"
                            color="info"
                            fontWeight="medium"
                        >
                            Sign up
                        </ArgonTypography>
                    </ArgonTypography>
                </ArgonBox>
            </ArgonBox>
        </IllustrationLayout>
    );
}

export default Illustration;
