
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
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import {useContext, useEffect} from "react";
import {ApplicationContext} from "../../context/ApplicationContext";

function Default() {
  const { size } = typography;

  const {allEvents, setAllEvents} = useContext(ApplicationContext)
  useEffect(() => {
    JSON.parse(localStorage.getItem("events")) && setAllEvents(JSON.parse(localStorage.getItem("events")))
  }, [])

  const {sports, setSports} = useContext(ApplicationContext)
  useEffect(() => {
    JSON.parse(localStorage.getItem("sports")) && setSports(JSON.parse(localStorage.getItem("sports")))
  }, [])

  const {coordinators, setAllCoordinators} = useContext(ApplicationContext)
  useEffect(() => {
    JSON.parse(localStorage.getItem("coordinators")) && setAllCoordinators(JSON.parse(localStorage.getItem("coordinators")))
  }, [])

  const {executors, setAllExecutors} = useContext(ApplicationContext)
  useEffect(() => {
    JSON.parse(localStorage.getItem("executors")) && setAllExecutors(JSON.parse(localStorage.getItem("executors")))
  }, [])


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Events"
              count={allEvents.length}
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "", text: "" }}
            />

          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Games"
              count={sports.length}
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", count: "", text: "" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="New Teams"
              count="0"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "error", count: "", text: "" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total Executors"
              count="1"
              icon={{ color: "warning", component: <i className="ni ni-single-02" /> }}
              percentage={{ color: "success", count: "", text: "" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <Slider />
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
              <CategoriesList title="Sports Winners" categories={categoriesListData} />
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
    </DashboardLayout>
  );
}

export default Default;
