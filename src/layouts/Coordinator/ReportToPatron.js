import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";


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
    const [value, setValue] = useState('');
    const [rating, setRating] = useState('');
    const [feedback, setFeedback] = useState('');
    const [department, setDepartment] = useState('');
    const [options, setOptions] = useState([]);
    const [email, setEmail] = useState('');


    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleRatingChange = event => {
        setRating(event.target.value);
    };

    const handleFeedbackChange = event => {
        setFeedback(event.target.value);
    };

    const handleDepartmentChange = event => {
        setDepartment(event.target.value);
    };

    const handleOptionChange = event => {
        setOptions(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Thank you for your feedback!\nName: ${value}\nFeedback: ${feedback}\nEmail: ${email}`);
    };


    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Manage Executors</h1>

                <Card type="contained" style={{width:'360'}} mt={3}>
                    <div>
                        <TextField
                            id="name"
                            label="Name"
                            value={value}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                        <TextField
                            id="email"
                            label="Email"
                            value={email}
                            onChange={handleEmailChange}
                            variant="outlined"
                            required
                        />
                    </div>
                    <div style={{width:'30%'}}>
                        <TextField
                            id="feedback"
                            label="Feedback"
                            multiline
                            rows={6}
                            value={feedback}
                            onChange={handleFeedbackChange}
                            variant="outlined"
                            required
                        />
                    </div>

                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                        Submit
                    </Button>
                </Card>

            </DashboardLayout>
        </>
    )
}
