import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
import {
    FormControl,
    InputLabel,
    TextField,
    Select, MenuItem,
} from '@mui/material';
import Button from "@mui/material/Button";
import input from "../../assets/theme/components/form/input";
import Card from "@mui/material/Card";
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';


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
    formStyle:{
        margin: "auto",
        width:'50%',
        padding:20,
        paddingTop: 20,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
    },
    myBtn:{
        marginTop: 10,
        width: '20%'
    }
}));

export default function AddSportForm() {
    const classes = useStyles();
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');
    const [fee, setFee] = useState('');
    const [image, setImage] = useState(null);
    const [sports, setSports] = useState('');
    const [listSports, setListSports] = useState([{activity: '', description: '', fee: '', image: ''}]);

    const handleSportsChange = event => {
        setSports(event.target.value);
    };

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
        setListSports([...listSports, {activity: activity, sports: sports, description: description, fee: fee, image: image}]);
        console.log("List of Sports: ", listSports);
    };

    return (
        <div>
        <ArgonBox pt={2} px={2}>
            <ArgonBox mb={0.5}>
            <ArgonTypography variant="h6" fontWeight="medium">
                <h2>Register Sport</h2>
            </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={1}>
            </ArgonBox>
        </ArgonBox>
        <form className={classes.formStyle} onSubmit={handleSubmit} style={{width: '40%', marginTop:'50px', }}>
        <ArgonBox mb={0.5}>
            <ArgonTypography variant="h6" fontWeight="medium">
                <h2>Register Sport</h2>
            </ArgonTypography>
            </ArgonBox>
            {/*<FormControl fullWidth>*/}
            {/*    <InputLabel htmlFor="activity-select">Select Sport</InputLabel>*/}
            {/*    <Select*/}
            {/*        aria-labelledby="form-dialog-title"*/}
            {/*        style={{with:'100%', marginTop:'10px'}}*/}
            {/*        native*/}
            {/*        value={activity}*/}
            {/*        onChange={handleActivityChange}*/}
            {/*        inputProps={{*/}
            {/*            name: 'activity',*/}
            {/*            id: 'activity-select',*/}
            {/*        }}*/}
            {/*        fullWidth*/}
            {/*    >*/}
            {/*        <option aria-label="None" value="" />*/}
            {/*        <option value="cricket">Cricket</option>*/}
            {/*        <option value="chess">Chess</option>*/}
            {/*        <option value="football">Football</option>*/}
            {/*        <option value="tennis">Tennis</option>*/}
            {/*        <option value="ludo">Ludo</option>*/}
            {/*        <option value="jumping">Jumping</option>*/}
            {/*        <option value="running">Running</option>*/}
            {/*        <option value="tug of wars">Tug of Wars</option>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="sports-label">Select Sports</InputLabel>
                    <Select
                        labelId="sports-label"
                        id="sports"
                        value={sports}
                        onChange={handleSportsChange}
                        label="Select Sport"
                        inputProps={{
                            name: 'activity',
                            id: 'activity-select',
                        }}
                    >
                        <MenuItem value="none"></MenuItem>
                        <MenuItem value="cricket">Cricket</MenuItem>
                        <MenuItem value="chess">Chess</MenuItem>
                        <MenuItem value="football">Football</MenuItem>
                        <MenuItem value="tennis">Tennis</MenuItem>
                        <MenuItem value="ludo">Ludo</MenuItem>
                        <MenuItem value="jumping">Jumping</MenuItem>
                        <MenuItem value="tug-of-war">Tug of Wars</MenuItem>
                    </Select>
                </FormControl>
            </div>
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
                <Button style={{marginTop:10}} variant="contained" color='primary' component="span">
                    Upload Image
                </Button>
            </label>

            <Button style={{marginLeft:'20px', marginTop: 10}} className={classes.myBtn} type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
        </div>
    );
}
