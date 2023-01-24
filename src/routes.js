import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";


import ArgonBox from "components/ArgonBox";
import Events from "./layouts/manageEvents/Events";
import ManageSports from "./layouts/manageSports/ManageSports";
import ManageCoordinator from "./layouts/manageCoordinator/Coordinator";
import ViewSports from "./layouts/players/ViewSports";
import ManageExecutors from "./layouts/Coordinator/ManageExecutors";
import GenerateSchedule from "./layouts/Executor/GenerateSchedule";


const routes =
    JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role === 'ADMIN' ? [
            /**
             * ADMIN MODULES
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
                name: "Tables",
                key: "tables",
                route: "/tables",
                icon: (
                    <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58"/>
                ),
                component: <Tables/>,
            },
            {
                type: "route",
                name: "Billing",
                key: "billing",
                route: "/billing",
                icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card"/>,
                component: <Billing/>,
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
                name: "Manage Coordinator",
                key: "manage-coordinator",
                route: "/manage-coordinator",
                icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-02"/>,
                component: <ManageCoordinator/>,
            },
            // {
            //   type: "route",
            //   name: "Virtual Reality",
            //   key: "virtual-reality",
            //   route: "/virtual-reality",
            //   icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
            //   component: <VirtualReality />,
            // },
            // {
            //   type: "route",
            //   name: "RTL",
            //   key: "rtl",
            //   route: "/rtl",
            //   icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-world-2" />,
            //   component: <RTL />,
            // },
            {type: "title", title: "Account Pages", key: "account-pages"},
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
                name: "Sign In",
                key: "sign-in",
                route: "/authentication/sign-in",
                icon: (
                    <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04"/>
                ),
                component: <SignIn/>,
            },
            {
                type: "route",
                name: "Sign Up",
                key: "sign-up",
                route: "/authentication/sign-up",
                icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection"/>,
                component: <SignUp/>,
            },
        ]

        : JSON.parse(sessionStorage.getItem("login")) &&  JSON.parse(sessionStorage.getItem("login")).role === 'PLAYER' ? [{}, {}]
            : JSON.parse(sessionStorage.getItem("login")) &&  JSON.parse(sessionStorage.getItem("login")).role === 'COORDINATOR' ? []
                : JSON.parse(sessionStorage.getItem("login")) &&  JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' ? [
                    JSON.parse(sessionStorage.getItem("login")) &&  JSON.parse(sessionStorage.getItem("login")).role === 'EXECUTOR' && {}
                ] : [

                    /**
                     * Testing
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
                        name: "Manage-Events",
                        key: "manage-events",
                        route: "/manage-events",
                        icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-collection"/>,
                        component: <Events/>,
                    },
                    {
                        type: "route",
                        name: "Tables",
                        key: "tables",
                        route: "/tables",
                        icon: (
                            <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58"/>
                        ),
                        component: <Tables/>,
                    },
                    // {
                    //     type: "route",
                    //     name: "Billing",
                    //     key: "billing",
                    //     route: "/billing",
                    //     icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card"/>,
                    //     component: <Billing/>,
                    // },
                    {
                        type: "route",
                        name: "Manage-Sports",
                        key: "manage-sports",
                        route: "/manage-sports",
                        icon: <ArgonBox component="i" color="information" fontSize="14px" className="ni ni-world"/>,
                        component: <ManageSports/>,
                    },
                    {
                        type: "route",
                        name: "View-Sport",
                        key: "view-sports",
                        route: "view-sports",
                        icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection"/>,
                        component: <ViewSports />,
                    },
                    {
                        type: "route",
                        name: "Manage Coordinator",
                        key: "manage-coordinator",
                        route: "/manage-coordinator",
                        icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-02"/>,
                        component: <ManageCoordinator/>,
                    },
                    // {
                    //   type: "route",
                    //   name: "Virtual Reality",
                    //   key: "virtual-reality",
                    //   route: "/virtual-reality",
                    //   icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
                    //   component: <VirtualReality />,
                    // },
                    // {
                    //   type: "route",
                    //   name: "RTL",
                    //   key: "rtl",
                    //   route: "/rtl",
                    //   icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-world-2" />,
                    //   component: <RTL />,
                    // },
                    {
                        type: "route",
                        name: "Manage Executors",
                        key: "manage-executors",
                        route: "/manage-executors",
                        icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-user-run"/>,
                        component: <ManageExecutors/>,
                    },
                    {
                        type: "route",
                        name: "Generate Schedule",
                        key: "generate-schedule",
                        route: "/generate-schedule",
                        icon: <ArgonBox component="i" color="information" fontSize="14px" className="ni ni-calendar-grid-58"/>,
                        component: <GenerateSchedule/>,
                    },
                    {type: "title", title: "Account Pages", key: "account-pages"},
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
                        name: "Sign In",
                        key: "sign-in",
                        route: "/authentication/sign-in",
                        icon: (
                            <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04"/>
                        ),
                        component: <SignIn/>,
                    },
                    {
                        type: "route",
                        name: "Sign Up",
                        key: "sign-up",
                        route: "/authentication/sign-up",
                        icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection"/>,
                        component: <SignUp/>,
                    },


                ]
export default routes;
