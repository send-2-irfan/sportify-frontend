// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

//  MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

//  MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import {useContext, useEffect, useState} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";
import {useNavigate} from "react-router-dom";

function Default() {
    const {allEvents, setAllEvents} = useContext(ApplicationContext)
    const {
        sports, setSports, setAllCoordinators, executors, coordinators, setAllExecutors, teams, setAllTeams
    } = useContext(ApplicationContext)
    let [executorsCount, setExecutorCount] = useState(0)

    const fetchAllUsers = async () => {
        let allUsers = await JSON.parse(localStorage.getItem("users"))
        let coordinators = []
        for (let user of allUsers) {
            user.role === 'COORDINATOR' && coordinators.push(user)
        }
        setAllCoordinators(coordinators)
    }
    const fetchExecutors = async () => {
        let allUsers = await JSON.parse(localStorage.getItem("users"))
        let executor = []
        for (let user of allUsers) {
            user.role === "EXECUTOR" && executor.push(user)
        }
        setAllExecutors(executor)
    }
    const fetchExecutorCount = async () => {
        let allUsers = await JSON.parse(localStorage.getItem("users"))
        for (let user of allUsers) {
            if (user.role === "EXECUTOR" && user.active)
                setExecutorCount(executorsCount += 1)
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("login")) {
            JSON.parse(localStorage.getItem("events")) && setAllEvents(JSON.parse(localStorage.getItem("events")))
            JSON.parse(localStorage.getItem("sports")) && setSports(JSON.parse(localStorage.getItem("sports")))
            JSON.parse(localStorage.getItem("coordinators")) && setAllCoordinators(JSON.parse(localStorage.getItem("coordinators")))
            fetchExecutors()
            fetchExecutorCount()
            fetchAllUsers()
            JSON.parse(localStorage.getItem("teams")) && setAllTeams(JSON.parse(localStorage.getItem("teams")))
        } else {
            window.location.href = "/authentication/sign-in"
        }

    }, [])


    return (<DashboardLayout>
        <DashboardNavbar/>
        <ArgonBox py={3}>
            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <DetailedStatisticsCard
                        title="Total Events"
                        count={allEvents.length}
                        icon={{color: "info", component: <i className="ni ni-money-coins"/>}}
                        percentage={{color: "success", count: "", text: ""}}
                    />

                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DetailedStatisticsCard
                        title="Total Sports"
                        count={sports.length}
                        icon={{color: "error", component: <i className="ni ni-world"/>}}
                        percentage={{color: "success", count: "", text: ""}}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <DetailedStatisticsCard
                        title="New Teams"
                        count={teams.length}
                        icon={{color: "success", component: <i className="ni ni-paper-diploma"/>}}
                        percentage={{color: "error", count: "", text: ""}}
                    />
                </Grid>
                {
                    (JSON.parse(sessionStorage.getItem("login")).role === "PATRON") ? <Grid item xs={12} md={6} lg={3}>
                        <DetailedStatisticsCard
                            title="Total Coordinators"
                            count={coordinators.length}
                            icon={{color: "warning", component: <i className="ni ni-single-02"/>}}
                            percentage={{color: "success", count: "", text: ""}}
                        />
                    </Grid> : <Grid item xs={12} md={6} lg={3}>
                        <DetailedStatisticsCard
                            title="Total Executors"
                            count={executorsCount}
                            icon={{color: "warning", component: <i className="ni ni-single-02"/>}}
                            percentage={{color: "success", count: "", text: ""}}
                        />
                    </Grid>
                }
            </Grid>
            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} lg={7}>
                    <Slider/>
                </Grid>
                <Grid item xs={12} lg={5}>
                    {/*<GradientLineChart*/}
                    {/*  title="Sales Overview"*/}
                    {/*  description={*/}
                    {/*    <ArgonBox display="flex" alignItems="center">*/}
                    {/*      <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>*/}
                    {/*        <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>*/}
                    {/*      </ArgonBox>*/}
                    {/*      <ArgonTypography variant="button" color="text" fontWeight="medium">*/}
                    {/*        4% more{" "}*/}
                    {/*        <ArgonTypography variant="button" color="text" fontWeight="regular">*/}
                    {/*          in 2022*/}
                    {/*        </ArgonTypography>*/}
                    {/*      </ArgonTypography>*/}
                    {/*    </ArgonBox>*/}
                    {/*  }*/}
                    {/*  chart={gradientLineChartData}*/}
                    {/*/>*/}
                    <Grid item xs={12} md={12}>
                        <CategoriesList title="Sports Winners" categories={categoriesListData}/>
                    </Grid>
                </Grid>

            </Grid>
            {/*<Grid container spacing={3}>*/}
            {/*  <Grid item xs={12} md={8}>*/}
            {/*    <SalesTable title="Sales by Country" rows={salesTableData} />*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12} md={4}>*/}
            {/*    <CategoriesList title="categories" categories={categoriesListData} />*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
        </ArgonBox>
        {/*<Footer />*/}
    </DashboardLayout>);
}

export default Default;
