import React from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [sport, setSport] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [players, setPlayers] = React.useState('');
    const [fee, setFee] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setSport(event.target.value);
    };

    const handleSubmit = () => {
        // process form submission here
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open Form Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Registration Form</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sport}
                            onChange={handleChange}
                        >
                            <MenuItem value="cricket">Cricket</MenuItem>
                            <MenuItem value="football">Football</MenuItem>
                            <MenuItem value="hockey">Hockey</MenuItem>
                            <MenuItem value="chess">Chess</MenuItem>
                            <MenuItem value="tennis">Tennis</MenuItem>
                            <MenuItem value="ludo">Ludo</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        id="description"
                        label="Sport Description"
                        type="text"
                        fullWidth
                        multiline
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="players"
                        label="Number of Players"
                        type="number"
                        fullWidth
                    />

                </DialogContent>
            </Dialog>
        </div>
    );
}