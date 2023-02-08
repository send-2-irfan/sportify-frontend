

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

//  MUI example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

//  MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <ArgonBox position="relative">
      <DashboardNavbar absolute light />
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ArgonAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xxl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <ArgonTypography variant="h6" fontWeight="medium">
                <label htmlFor="role">Full Name: </label>
                <ArgonTypography variant="h6" fontWeight="medium" color='black' style={{display:'inline-block', marginLeft:'2px'}}>
                  { JSON.parse(sessionStorage.getItem("login")).fullName}
                </ArgonTypography>
              </ArgonTypography>
              <ArgonTypography variant="h6" fontWeight="small">
                <label htmlFor="role">Role Logged In: </label>
                <ArgonTypography variant="h6" fontWeight="medium" color='black' style={{display:'inline-block', marginLeft:'2px'}}>
                  { JSON.parse(sessionStorage.getItem("login")).role}
                </ArgonTypography>
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="medium">
                <label htmlFor="role" style={{marginRight:'2px'}}>Email ID: </label>
                <a href={`mailto:${JSON.parse(sessionStorage.getItem("login")).username}`}>{JSON.parse(sessionStorage.getItem("login")).username}</a>
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">

              {/*<Grid item xs={12} md={6} lg={6} sx={{ ml: "auto", mr:'-18%' }} >*/}
              {/*  <AppBar position="static">*/}
              {/*    <Grid item>*/}
              {/*      <ArgonBox height="100%" mt={0.5} lineHeight={1}>*/}
              {/*        <ArgonTypography variant="h4" fontWeight="medium" ml={4}>*/}
              {/*          VS*/}
              {/*        </ArgonTypography> <br/>*/}
              {/*        <ArgonTypography variant="button" color="text" fontWeight="medium">*/}
              {/*          Date: {schedule.matchDate}*/}
              {/*        </ArgonTypography><br/>*/}
              {/*        <ArgonTypography variant="button" color="text" fontWeight="medium">*/}
              {/*          Date: {schedule.matchTime}*/}
              {/*        </ArgonTypography><br/>*/}
              {/*        <ArgonTypography variant="button" color="text" fontWeight="medium">*/}
              {/*          Date: {schedule.matchLocation}*/}
              {/*        </ArgonTypography><br/>*/}
              {/*      </ArgonBox>*/}
              {/*    </Grid>*/}
              {/*  </AppBar>*/}
              {/*</Grid>*/}



              {/*<Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>*/}
              {/*  <Tab*/}
              {/*    label="App"*/}
              {/*    icon={*/}
              {/*      <i className="ni ni-app" style={{ marginTop: "6px", marginRight: "8px" }} />*/}
              {/*    }*/}
              {/*  />*/}
              {/*  <Tab*/}
              {/*    label="Message"*/}
              {/*    icon={*/}
              {/*      <i*/}
              {/*        className="ni ni-email-83"*/}
              {/*        style={{ marginTop: "6px", marginRight: "8px" }}*/}
              {/*      />*/}
              {/*    }*/}
              {/*  />*/}
              {/*  <Tab*/}
              {/*    label="Settings"*/}
              {/*    icon={*/}
              {/*      <i*/}
              {/*        className="ni ni-settings-gear-65"*/}
              {/*        style={{ marginTop: "6px", marginRight: "8px" }}*/}
              {/*      />*/}
              {/*    }*/}
              {/*  />*/}
              {/*</Tabs>*/}
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </ArgonBox>
  );
}

export default Header;
