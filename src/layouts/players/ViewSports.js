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
import Avatar from "../../assets/theme/components/avatar";

export default function ViewSports() {

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1 style={{color:"white"}}>Sports List</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <h1>Hello WOrld</h1>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
