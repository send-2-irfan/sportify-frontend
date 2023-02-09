import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import ArgonInput from "../../components/ArgonInput";
import {openNotificationWithIcon} from "../../components/global/notification";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ReportToPatron() {
    const classes = useStyles();
    const [report, setReport] = useState({
        coordinatorName: JSON.parse(sessionStorage.getItem("login")).fullName,
        message: '',
        submissionDate: `${new Date().toString()}`
    })

    async function submitMessage() {
        if (!report.message) {
            openNotificationWithIcon("error", "Empty Exception", "Please enter any message to report to patron")
        } else {
            let messages = await JSON.parse(localStorage.getItem("messages"))
            if (messages) {
                messages.push(report)
                await localStorage.setItem("messages", JSON.stringify(messages))
                openNotificationWithIcon("success", "Success", "Message reported to Patron")
                setReport({...report, message: ''})
            } else {
                let tempMessages = []
                tempMessages.push(report)
                await localStorage.setItem("messages", JSON.stringify(tempMessages))
                openNotificationWithIcon("success", "Success", "Message reported to Patron")
                setReport({...report, message: ''})
            }
        }
    }

    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Executors</h1>

                <Card className={"p-4"} type="contained" style={{width: '360'}} mt={3}>
                    <textarea value={report.message} onChange={(e) => setReport({...report, message: e.target.value})}
                              className="form-control" id="exampleFormControlTextarea1" rows="8"
                              placeholder="Write any message to report to PATRON"></textarea>
                    <Button onClick={submitMessage} variant="contained" color="primary" className={classes.button}
                            type="submit">
                        Submit Message
                    </Button>
                </Card>

            </DashboardLayout>
        </>
    )
}
