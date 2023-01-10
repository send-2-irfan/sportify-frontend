import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
import {
    FormControl,
    InputLabel,
    TextField,
    Select,
} from '@mui/material';
import Button from "@mui/material/Button";
import input from "../../assets/theme/components/form/input";
import Card from "@mui/material/Card";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
    input: {
        display: 'none',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 200,
        padding: '0 30px',
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: "80%"
    },
}));

export default function AddSportForm() {
    const classes = useStyles();
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');
    const [fee, setFee] = useState('');
    const [image, setImage] = useState(null);

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFeeChange = (event) => {
        setFee(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Activity: ", activity);
        console.log("Description: ", description);
        console.log("Fee: ", fee);
        console.log("Image: ", image);
    };

    return (
        <Card style={{width:'50%'}}>
        <form onSubmit={handleSubmit} style={{border: 'none', with:'100px', height:'300px'}}>
            <FormControl fullWidth>
                <InputLabel htmlFor="activity-select">Select Sport</InputLabel>
                <Select
                    aria-labelledby="form-dialog-title"
                    style={{with:'100%', marginTop:'10px'}}
                    native
                    value={activity}
                    onChange={handleActivityChange}
                    inputProps={{
                        name: 'activity',
                        id: 'activity-select',
                    }}
                    fullWidth
                >
                    <option aria-label="None" value="" />
                    <option value="cricket">Cricket</option>
                    <option value="chess">Chess</option>
                    <option value="football">Football</option>
                    <option value="tennis">Tennis</option>
                    <option value="ludo">Ludo</option>
                    <option value="jumping">Jumping</option>
                    <option value="running">Running</option>
                    <option value="tug of wars">Tug of Wars</option>
                </Select>
            </FormControl>
            <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Fee"
                type="number"
                variant="outlined"
                value={fee}
                onChange={handleFeeChange}
                margin="normal"
                fullWidth
            />
            <input
                accept="image/*"
                className={classes.input}
                id="image"
                type="file"
                onChange={handleImageChange}
            />
            <label  htmlFor="image">
                <Button variant="contained" component="span">
                    Upload Image
                </Button>
            </label>

            <Button style={{marginLeft:'20px'}} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
        </Card>
    );
}
