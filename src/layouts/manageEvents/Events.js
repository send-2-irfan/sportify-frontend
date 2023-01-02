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
                                        image={homeDecor1}
                                        label="project #2"
                                        title="modern"
                                        description="As Uber works through a huge amount of internal management turmoil."
                                        action={{
                                            type: "internal",
                                            route: "/pages/profile/profile-overview",
                                            color: "info",
                                            label: "View Project",
                                        }}

                                    />
                                </Grid>

                                <Grid item xs={12} md={6} xl={3}>
                                    <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
                                </Grid>
                            </Grid>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
