import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "../../assets/images/home-decor-1.jpg";
import sportsGala from "../../assets/images/sportsEvent.jpg";

import homeDecor2 from "../../assets/images/home-decor-2.jpg";
import homeDecor3 from "../../assets/images/home-decor-3.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";

export default function Events() {
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Events</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox pt={2} px={2}>
                            <ArgonBox mb={0.5}>
                                <ArgonTypography variant="h6" fontWeight="medium">
                                    Manage Events
                                </ArgonTypography>
                            </ArgonBox>

                        </ArgonBox>
                        <ArgonBox p={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultProjectCard
                                        image={sportsGala}
                                        label=""
                                        title="Sports Gala 2023"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "info",
                                            label: "View Event",
                                        }}

                                    />
                                </Grid>

                                <Grid item xs={12} md={6} xl={3}>
                                    <PlaceholderCard title={{ variant: "h5", text: "Add New Event" }} outlined />
                                </Grid>

                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
