
import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {FormControl, Select, makeStyles} from "@mui/material";


// import { makeStyles } from '@material-ui/core/styles';


export default function SimpleSelect() {

    const [sport, setSport] = React.useState('');

    const handleChange = (event) => {
        setSport(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sport}
                    onChange={handleChange}
                >
                    <MenuItem value="cricket">Cricket</MenuItem>
                    <MenuItem value="football">Football</MenuItem>
                    <MenuItem value="chess">Chess</MenuItem>
                    <MenuItem value="hockey">Hockey</MenuItem>
                    <MenuItem value="table_tennis">Table Tennis</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
