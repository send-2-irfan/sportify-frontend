import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Checkbox,
    FormGroup,
    Button
} from '@mui/material'
import InputLabel from "@mui/material/InputLabel";

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

export default function RepotToPatronCard() {
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
        alert(`Thank you for your feedback!\nName: ${value}\nRating: ${rating}\nDepartment: ${department}\nFeedback: ${feedback}\nImprovement areas: ${options}\nEmail: ${email}`);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
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
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Overall rating</FormLabel>
                    <RadioGroup row aria-label="rating" name="rating" value={rating} onChange={handleRatingChange}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="1" />
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="2" />
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="3" />
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="4" />
                        <FormControlLabel value="5" control={<Radio color="primary" />} label="5" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select
                        labelId="department-label"
                        id="department"
                        value={department}
                        onChange={handleDepartmentChange}
                        label="Department"
                    >
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="marketing">Marketing</MenuItem>
                        <MenuItem value="customer-service">Customer Service</MenuItem>
                        <MenuItem value="technical-support">Technical Support</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField
                    id="feedback"
                    label="Feedback"
                    multiline
                    rows={4}
                    value={feedback}
                    onChange={handleFeedbackChange}
                    variant="outlined"
                    required
                />
            </div>
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">What areas do you think we can improve on?</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color="primary" onChange={handleOptionChange} value="option1" name="option1" />}
                            label="Customer Service"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" onChange={handleOptionChange} value="option2" name="option2" />}
                            label="Product Quality"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" onChange={handleOptionChange} value="option3" name="option3" />}
                            label="Website usability"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" onChange={handleOptionChange} value="option4" name="option4" />}
                            label="Other"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <Button variant="contained" color="primary" className={classes.button} type="submit">
                Submit
            </Button>
        </form>
    );
}

