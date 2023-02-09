import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import {Avatar, List} from 'antd';
import React, {useEffect, useState} from "react";


export default function ReportsModule() {
    const [reports, setReports] = useState([])
    // const fetchReports =  () => {
    //     let messages =  JSON.parse(localStorage.getItem("messages"))
    //     if (messages) setReports(messages)
    // }

    const fetchReports =  () => {
        let messages =  JSON.parse(localStorage.getItem("messages"))
        if (messages) {
            messages.sort((a, b) => new Date(b.submissionDate) - new Date(a.submissionDate));
            setReports(messages)
        }
    }

    useEffect(() => {
        fetchReports()
    })

    return (<>
        <DashboardLayout>
            <DashboardNavbar/>
            <h1>Manage Coordinator</h1>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox pt={2} px={2}>
                        <ArgonBox mb={0.5}>
                            <ArgonTypography variant="h6" fontcolor="#32325d" fontWeight="medium">
                                Reports by coordinators
                            </ArgonTypography>
                        </ArgonBox>
                    </ArgonBox>
                    <ArgonBox p={2}>
                        <List
                            itemLayout="horizontal"
                            dataSource={reports}
                            renderItem={(item) => (
                                <List.Item actions={[item.submissionDate]}>
                                    <List.Item.Meta
                                        avatar={<Avatar
                                            src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1675923285/sportify/2_a1mje1.png"/>}
                                        title={item.coordinatorName}
                                        description={item.message}
                                    />
                                </List.Item>
                            )}
                        />
                    </ArgonBox>
                </Card>
            </ArgonBox>
        </DashboardLayout>
    </>)
}
