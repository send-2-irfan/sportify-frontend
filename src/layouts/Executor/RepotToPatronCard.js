import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
        alert(`Thank you for your feedback!\nName: ${value}\nFeedback: ${feedback}\nEmail: ${email}`);
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
            {/*<div>*/}
            {/*    <FormControl component="fieldset" className={classes.formControl}>*/}
            {/*        <FormLabel component="legend">Overall rating</FormLabel>*/}
            {/*        <RadioGroup row aria-label="rating" name="rating" value={rating} onChange={handleRatingChange}>*/}
            {/*            <FormControlLabel value="1" control={<Radio color="primary" />} label="1" />*/}
            {/*            <FormControlLabel value="2" control={<Radio color="primary" />} label="2" />*/}
            {/*            <FormControlLabel value="3" control={<Radio color="primary" />} label="3" />*/}
            {/*            <FormControlLabel value="4" control={<Radio color="primary" />} label="4" />*/}
            {/*            <FormControlLabel value="5" control={<Radio color="primary" />} label="5" />*/}
            {/*        </RadioGroup>*/}
            {/*    </FormControl>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <FormControl variant="outlined" className={classes.formControl} style={{width:'23%'}}>*/}
            {/*        <InputLabel id="issue-label">Title</InputLabel>*/}
            {/*        <Select*/}
            {/*            labelId="issue-label"*/}
            {/*            id="Issue"*/}
            {/*            value={department}*/}
            {/*            onChange={handleDepartmentChange}*/}
            {/*            label="Department"*/}

            {/*        >*/}
            {/*            <ArrowDropDownIcon/>*/}
            {/*            <MenuItem value="schedule">Schedule</MenuItem>*/}
            {/*            <MenuItem value="match">Match</MenuItem>*/}
            {/*            <MenuItem value="clash">Clash</MenuItem>*/}
            {/*            <MenuItem value="winner">Winner</MenuItem>*/}
            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <FormControl component="fieldset" className={classes.formControl}>*/}
            {/*        <FormLabel component="legend">What areas do you think we can improve on?</FormLabel>*/}
            {/*        <FormGroup>*/}
            {/*            <FormControlLabel*/}
            {/*                control={<Checkbox color="primary" onChange={handleOptionChange} value="option1" name="option1" />}*/}
            {/*                label="Request to "*/}
            {/*            />*/}
            {/*            <FormControlLabel*/}
            {/*                control={<Checkbox color="primary" onChange={handleOptionChange} value="option2" name="option2" />}*/}
            {/*                label="Request to Add Sport"*/}
            {/*            />*/}
            {/*            <FormControlLabel*/}
            {/*                control={<Checkbox color="primary" onChange={handleOptionChange} value="option3" name="option3" />}*/}
            {/*                label="Website usability"*/}
            {/*            />*/}
            {/*            <FormControlLabel*/}
            {/*                control={<Checkbox color="primary" onChange={handleOptionChange} value="option4" name="option4" />}*/}
            {/*                label="Other"*/}
            {/*            />*/}
            {/*        </FormGroup>*/}
            {/*    </FormControl>*/}
            {/*</div>*/}

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
        </form>
    );
}

