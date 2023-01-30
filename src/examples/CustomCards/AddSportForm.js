import React, {useContext, useState} from 'react';
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
import {ApplicationContext} from "../../context/ApplicationContext";
import ArgonInput from "../../components/ArgonInput";
import ArgonButton from "../../components/ArgonButton";



export default function AddSportForm() {
    const [sport, setSport] = useState('')
    const {sports, setSports} = useContext(ApplicationContext)
    const [sportData, setSportsData] = useState({
        sportName: sport,
        description: '',
        imageUrl: '',
        fee: '',
        eventId: ''
    })

    const handleSportsChange = (event) => {
        event.preventDefault()
        setSport(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sportData)

        if (JSON.parse(localStorage.getItem("sports"))) {
            let items = JSON.parse(localStorage.getItem("sports"))
            items.push(sportData)
            localStorage.setItem("sports", JSON.stringify(items))
            setSports(items)
            setSportsData({
                sportName: '',
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
        } else {
            let sportNew = []
            sportNew.push(sportData)
            localStorage.setItem("sports", JSON.stringify(sportNew))
            setSports(sportNew)
            setSportsData({
                sportName: '',
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ArgonTypography variant="h6" fontWeight="medium" style={{marginBottom: '10px', textAlign: 'center'}}>
                <h2>Register Sport</h2>
            </ArgonTypography>
            {/*<ArgonBox mb={1.5}>*/}
            {/*    <FormControl sx={{ minWidth: "100%" }}>*/}
            {/*        <InputLabel id="sport">Select Sport</InputLabel>*/}
            {/*        <Select*/}
            {/*            style={{alignContent:'center'}}*/}
            {/*            labelId="sport"*/}
            {/*            id="demo-simple-select-helper"*/}
            {/*            value={sportData}*/}
            {/*            label="Sport"*/}
            {/*               style={{marginRight:'200px'}}*/}
            {/*            onChange={(e)=> setSportsData({...sportData, sportName: e.target.value})}*/}
            {/*        >*/}
            {/*            <MenuItem value="none"></MenuItem>*/}
            {/*            <MenuItem value="cricket">Cricket</MenuItem>*/}
            {/*            <MenuItem value="chess">Chess</MenuItem>*/}
            {/*            <MenuItem value="football">Football</MenuItem>*/}
            {/*            <MenuItem value="tennis">Tennis</MenuItem>*/}
            {/*            <MenuItem value="ludo">Ludo</MenuItem>*/}
            {/*            <MenuItem value="jumping">Jumping</MenuItem>*/}
            {/*            <MenuItem value="tug-of-war">Tug of Wars</MenuItem>*/}
            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</ArgonBox>*/}

            <ArgonBox mb={1.5}>
                <ArgonInput
                    placeholder="Name"
                    id="Name"
                    value={sportData.sportName}
                    onChange={(e)=> setSportsData({...sportData, sportName: e.target.value})}
                    fullWidth
                />
            </ArgonBox>
            <ArgonBox mb={1.5} >
                <ArgonInput
                    placeholder="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={sportData.description}
                    onChange={(e)=> setSportsData({...sportData, description: e.target.value})}
                    margin="normal"
                    fullWidth
                />
            </ArgonBox>
            <ArgonBox mb={1.5}>
                <ArgonInput
                    placeholder="Fee"
                    type="number"
                    variant="outlined"
                    value={sportData.fee}
                    onChange={(e)=> setSportsData({...sportData, fee: e.target.value})}
                    margin="normal"
                    fullWidth
                />
            </ArgonBox>
            <ArgonBox mb={1.5}>
                <ArgonInput
                    placeholder="Image Url"
                    accept="image/*"
                    id="image"
                    value={sportData.imageUrl}
                    onChange={(e)=> setSportsData({...sportData, imageUrl: e.target.value})}
                    type="text"
                />
            </ArgonBox>


            <ArgonBox mb={.5}>
                <ArgonButton style={{width:'45%', marginRight:'10px'}} variant="contained" color="dark">
                    Cancel
                </ArgonButton>
                <ArgonButton style={{width:'45%'}} type="submit" variant="contained" color="info">
                    Submit
                </ArgonButton>
            </ArgonBox>
        </form>

    );
}
