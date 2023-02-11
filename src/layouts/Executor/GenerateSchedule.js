import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import MatchScheduler from "./MatchScheduler";
import Schedule from "./ShowSchedule";


export default function GenerateSchedule() {
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Generate Schedules</h1>
                <MatchScheduler />
                <Schedule/>
            </DashboardLayout>
        </>
    )
}
