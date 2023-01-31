

import { useState } from "react";

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

// Image
const bgImage = "https://i.pinimg.com/736x/33/2e/21/332e213e36c73c2cfba495ae141aa1b0.jpg";
  // "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()
  const signin = () => {
    let registered = JSON.parse(localStorage.getItem("register"))
    if(registered.username===user.username && registered.password===user.password ){
      sessionStorage.setItem('login', JSON.stringify(user))
      navigate("authentication/sign-in")
    }else{
      alert("username or password is incorrect")
    }

  }

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your CMS-ID and Password to sign in"
      illustration={{
        image: bgImage,
        title: 'SIBAU Sports Management System',
        description:
          "Sports at Sukkur IBA University in Pakistan include a variety of outdoor and indoor activities such as cricket, football, basketball, and table tennis etc.",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput value={user.username} onChange={(e)=> setUser({...user, username: e.target.value})}  type="email" placeholder="CMS-ID" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}  type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
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
