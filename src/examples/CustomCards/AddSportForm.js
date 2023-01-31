import React, {useContext, useState} from 'react';
import {makeStyles} from '@mui/styles';
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
        if (JSON.parse(localStorage.getItem("sports"))) {
            let items = JSON.parse(localStorage.getItem("sports"))
            items.push(event)
            localStorage.setItem("sports", JSON.stringify(items))
            setSports(items)
            setSportsData({
                sportName: sport,
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
        } else {
            let sportName = []
            sportName.push(event)
            setSports(sportName)
            setSportsData({
                sportName: sport,
                description: '',
                imageUrl: '',
                fee: '',
                eventId: ''
            })
        }
    };

    return (
        <div>
            <ArgonTypography variant="h6" fontWeight="medium" style={{marginBottom: '10px', textAlign: 'center'}}>
                <h2>Register Sport</h2>
            </ArgonTypography>
            <ArgonBox mb={1.5}>

                <FormControl sx={{minWidth: "100%"}}>
                    <ArgonInput
                        placeholder="Sport Name"
                        type="text"
                        value={sportData.sportName}
                        onChange={(e) => setSportsData({...sportData, sportName: e.target.value})}
                        fullWidth
                    />
                </FormControl>

            </ArgonBox>
            <ArgonBox mb={1.5}>
                <ArgonInput
                    placeholder="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={sportData.description}
                    onChange={(e) => setSportsData({...sportData, description: e.target.value})}
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
                    onChange={(e) => setSportsData({...sportData, fee: e.target.value})}
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
                    onChange={(e) => setSportsData({...sportData, imageUrl: e.target.value})}
                    type="text"
                />
            </ArgonBox>


            <ArgonBox mb={.5}>
                <Button style={{width: '45%', marginRight: '10px'}} variant="contained" color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} style={{width: '45%'}} variant="contained" color="primary">
                    Submit
                </Button>
            </ArgonBox>
        </div>

    );
}
