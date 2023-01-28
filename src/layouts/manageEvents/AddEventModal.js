import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Socials from "../authentication/components/Socials";
import Separator from "../authentication/components/Separator";
import ArgonInput from "../../components/ArgonInput";
import Checkbox from "@mui/material/Checkbox";
import ArgonButton from "../../components/ArgonButton";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import {TextareaAutosize} from "@mui/material";
import {TextFieldsRounded} from "@mui/icons-material";

export default function FormDialog({show,setShow}) {

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Register Event</DialogTitle>
                <DialogContent>
                    <Card>
                        <ArgonBox pt={2} pb={3} px={3}>
                            <ArgonBox component="form" role="form">
                                <ArgonBox mb={2}>
                                    <ArgonInput placeholder="Event Name" />
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput type="textarea" placeholder="Details" />
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput type="text" placeholder="details" />
                                </ArgonBox>
                                <ArgonBox mt={4} mb={1}>
                                    <ArgonButton variant="gradient" color="dark" fullWidth>
                                        Upload Image
                                    </ArgonButton>
                                </ArgonBox>
                            </ArgonBox>
                        </ArgonBox>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add Event</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


//
// import React, { useState } from 'react';
// import { Modal, TextField, Button } from '@mui/material';
//
// function FormDialog() {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState({ name: '', details: '', image: '' });
//
//     const handleOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Send formData to backend here
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <Button variant="contained" color="primary" onClick={handleOpen}>
//                 Add Event
//             </Button>
//             <Modal open={open} onClose={handleClose}>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         label="Name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                     <br />
//                     <TextField
//                         label="Details"
//                         name="details"
//                         value={formData.details}
//                         onChange={handleChange}
//                         multiline
//                         rows={4}
//                         required
//                     />
//                     <br />
//                     <TextField
//                         label="Image"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleChange}
//                         required
//                     />
//                     <br />
//                     <Button type="submit" variant="contained" color="primary">
//                         Add Event
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                         <DialogActions>
//                             <Button type="submit" onClick={handleClose}>Cancel</Button>
//                             <Button onClick={handleClose}>Add Event</Button>
//                         </DialogActions>
//                  </form>
//              </Modal>
//          </div>
//     );
// }
//
// export default FormDialog;
