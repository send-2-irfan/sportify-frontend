import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import ArgonBox from "components/ArgonBox";
import Events from "./layouts/manageEvents/Events";
import ManageSports from "./layouts/manageSports/ManageSports";
import ManageCoordinator from "./layouts/manageCoordinator/Coordinator";
import ViewSports from "./layouts/players/ViewSports";
import GenerateSchedule from "./layouts/Executor/GenerateSchedule";
import ManageTeams from "./layouts/team/ManageTeams";
import AddFinalScores from "./layouts/patron/AddFinalScores";
import ReportToPatron from "./layouts/Coordinator/ReportToPatron";
import ViewSchedule from "./layouts/players/ViewSchedule";
import {ContactUs} from "./components/contact/ContactUs";
import ManageExecutors from "./layouts/manageExecutor/MangeExecutors";
import ReportsModule from "./layouts/reports-module/Report";


const routes =
    JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role === 'PATRON' ? [
            /**
             * Patron:
             * MANAGE EVENTS
             * MANAGE COORDINATORS
             */
            {
                type: "route",
                name: "Dashboard",
                key: "dashboard",
                route: "/dashboard",
                icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2"/>,
                component: <Dashboard/>,
            },
            {
                type: "route",
                name: "Manage Events",
                key: "manage-events",
                route: "/manage-events",
                icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-collection"/>,
                component: <Events/>,
            },
            {
                type: "route",
                name: "Manage Coordinator",
                key: "manage-coordinator",
                route: "/manage-coordinator",
                icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04"/>,
                component: <ManageCoordinator/>,
            },
            {
                type: "route",
                name: "Manage Sports",
                key: "manage-sports",
                route: "/manage-sports",
                icon: <ArgonBox component="i" color="information" fontSize="14px" className="ni ni-world"/>,
                component: <ManageSports/>,
            }, {
                type: "route",
                name: "Profile",
                key: "profile",
                route: "/profile",
                icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02"/>,
                component: <Profile/>,
            },
            {
                type: "route",
                name: "Contact Us",
                key: "contact-us",
                route: "/contact-us",
                icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-email-83"/>,
                component: <ContactUs/>,
            },
            {
                type: "route",
                name: "View Reports",
                key: "view-reports",
                route: "/view-reports",
                icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04"/>,
                component: <ReportsModule/>,
            }
        ]
        : JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role === 'COORDINATOR' ? [
                {
                    type: "route",
                    name: "Dashboard",
                    key: "dashboard",
                    route: "/dashboard",
                    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2"/>,
                    component: <Dashboard/>,
                },
                {
                    type: "route",
                    name: "Manage Executors",
                    key: "manage-executor",
                    route: "/manage-executor",
                    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card"/>,
                    component: <ManageExecutors/>,
                },
                {
                    type: "route",
                    name: "Report To Patron",
                    key: "report-to-patron",
                    route: "/report-to-patron",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-chat-round"/>,
                    component: <ReportToPatron/>,
                }, {
                    type: "route",
                    name: "Profile",
                    key: "profile",
                    route: "/profile",
                    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02"/>,
                    component: <Profile/>,
                },
                {
                    type: "route",
                    name: "Contact Us",
                    key: "contact-us",
                    route: "/contact-us",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-single-02"/>,
                    component: <ContactUs/>,
                }
            ]
            : JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' ? [
                {
                    type: "route",
                    name: "Dashboard",
                    key: "dashboard",
                    route: "/dashboard",
                    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2"/>,
                    component: <Dashboard/>,
                },
                {
                    type: "route",
                    name: "Manage Teams",
                    key: "manage-teams",
                    route: "/manage-teams",
                    icon: <ArgonBox component="i" color="purple" fontSize="14px" className="ni ni-tablet-button"/>,
                    component: <ManageTeams/>,
                },
                {
                    type: "route",
                    name: "Manage Final Scores",
                    key: "manage-score",
                    route: "/manage-score",
                    icon: <ArgonBox component="i" color="gold" fontSize="14px" className="ni ni-trophy"/>,
                    component: <AddFinalScores/>,
                },
                {
                    type: "route",
                    name: "Generate Schedule",
                    key: "generate-schedule",
                    route: "/generate-schedule",
                    icon: <ArgonBox component="i" color="secondary" fontSize="14px" className="ni ni-calendar-grid-58"/>,
                    component: <GenerateSchedule/>,
                },
                {
                    type: "route",
                    name: "Report To Patron",
                    key: "report-to-patron",
                    route: "/report-to-patron",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-chat-round"/>,
                    component: <ReportToPatron/>,
                },
                {
                    type: "route",
                    name: "Profile",
                    key: "profile",
                    route: "/profile",
                    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02"/>,
                    component: <Profile/>,
                },
                {
                    type: "route",
                    name: "Contact Us",
                    key: "contact-us",
                    route: "/contact-us",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-email-83"/>,
                    component: <ContactUs/>,
                }
            ] : JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role === 'PLAYER' ? [
                {
                    type: "route",
                    name: "Dashboard",
                    key: "dashboard",
                    route: "/dashboard",
                    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2"/>,
                    component: <Dashboard/>,
                },
                {
                    type: "route",
                    name: "View Sports",
                    key: "view-sports",
                    route: "/view-sports",
                    icon: <ArgonBox component="i" color="orange" fontSize="14px" className="ni ni-world"/>,
                    component: <ViewSports/>,
                },
                {
                    type: "route",
                    name: "Register Team",
                    key: "register-teams",
                    route: "/register-teams",
                    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-tablet-button"/>,
                    component: <ManageTeams/>,
                },
                {
                    type: "route",
                    name: "View Schedules",
                    key: "view-schedules",
                    route: "/view-schedules",
                    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-calendar-grid-58"/>,
                    component: <ViewSchedule/>,
                },
                {
                    type: "route",
                    name: "Final Score",
                    key: "final-score",
                    route: "/final-score",
                    icon: <ArgonBox component="i" color="green" fontSize="14px" className="ni ni-collection"/>,
                    component: <AddFinalScores/>,
                },
                {
                    type: "route",
                    name: "Profile",
                    key: "profile",
                    route: "/profile",
                    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02"/>,
                    component: <Profile/>,
                },
                {
                    type: "route",
                    name: "Contact Us",
                    key: "contact-us",
                    route: "/contact-us",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-email-83"/>,
                    component: <ContactUs/>,
                }

            ] : [
                {
                    type: "route",
                    name: "Login",
                    key: "login",
                    route: "/dashboard",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection"/>,
                    component: <SignIn/>,
                },
                {
                    type: "route",
                    name: "Sing Up",
                    key: "sign-up",
                    route: "/authentication/sign-up",
                    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection"/>,
                    component: <SignUp/>,
                }
            ]
export default routes;
