import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Grid from "@mui/material/Grid";
// import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard";
// import homeDecor1 from "../../assets/images/home-decor-1.jpg";
// import team1 from "../../assets/images/team-1.jpg";
// import team2 from "../../assets/images/team-2.jpg";
// import team3 from "../../assets/images/team-3.jpg";
// import team4 from "../../assets/images/team-4.jpg";
// import homeDecor2 from "../../assets/images/cricket.jpg";
// import homeDecor3 from "../../assets/images/img-3.jpg";
// import homeDecor4 from "../../assets/images/hockey.jpg";
// import football from "../../assets/images/img-1.jpg";
import PlaceholderCard from "../../examples/Cards/PlaceholderCard";
import Bill from "../billing/components/Bill";
import ArgonAvatar from "../../components/ArgonAvatar";
import burceMars from "../../assets/images/bruce-mars.jpg";
import Depeeka from "../../assets/images/team-1.jpg";
import ExecutorCard from "./ExecutorCard";
import ManageExecutorCard from "./ManageExecutorCard";
import WinnerCard from "../players/ShowWinner";

export default function ManageExecutors() {
    const winner = {
        name: 'Irfan',
        team: 'ABC',
        teamLogo: Depeeka
    }
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Executors</h1>
                {/*<ArgonBox mb={3}>*/}
                {/*    <Card>*/}
                {/*        <ArgonBox pt={2} px={2}>*/}
                {/*            <ArgonBox mb={0.5}>*/}
                {/*                <ArgonTypography variant="h6" fontColor="#32325d" fontWeight="medium" >*/}
                {/*                    Manage Coordinator*/}
                {/*                </ArgonTypography>*/}
                {/*            </ArgonBox>*/}

                {/*        </ArgonBox>*/}
                {/*        <ArgonBox p={2}>*/}
                {/*            <Grid container spacing={3}>*/}
                {/*                /!*<Grid item xs={12} md={6} xl={2}>*!/*/}
                {/*                /!*    {profileImg}*!/*/}
                {/*                /!*</Grid>*!/*/}
                {/*                <Bill*/}
                {/*                    name="Depeeka Gai"*/}
                {/*                    company="Computer Science"*/}
                {/*                    email="lucas@stone-tech.com"*/}
                {/*                    vat="051-19-0000"*/}
                {/*                    img = {profileImg}*/}
                {/*                ></Bill>*/}
                {/*                <Grid item xs={12} md={6} xl={2}>*/}
                {/*                    <PlaceholderCard title={{ variant: "h5", text: "Add Coordinator" }} outlined />*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </ArgonBox>*/}
                {/*    </Card>*/}
                {/*</ArgonBox>*/}

                        {/*<ArgonBox pt={2} px={2}>*/}
                        {/*    <ExecutorCard imageUrl={Depeeka} name={"Depeeka Gai"} department={"CS"} cmsId={"123"} email={'depeekagai@gmail.com'} password={'12341234'} />*/}
                        {/*</ArgonBox>*/}
                        <ManageExecutorCard imageUrl={Depeeka} name={"Depeeka Gai"} department={"CS"} cmsId={"123"} email={'depeekagai@gmail.com'} password={'12341234'} />

                        <WinnerCard winner={winner}/>
            </DashboardLayout>
        </>
    )
}
