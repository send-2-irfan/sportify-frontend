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

export default function PlayerRegistrationFormDialog({show,setShowPlayer}) {

    const handleClose = () => {
        setShowPlayer(false);
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Sport Form</DialogTitle>
                <DialogContent>
                    <Card>
                       {/**Registration Form */}
                        <ArgonBox p={2}>
                            <ArgonBox mb={2}>
                                <ArgonTypography variant="body1" fontColor="#32325d" fontWeight="medium" >
                                    Fill the form to add new sport
                                </ArgonTypography>
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput
                                    id="outlined-basic"
                                    label="Sport Name"
                                    variant="outlined"
                                    fullWidth
                                />
                            </ArgonBox> 
                            <ArgonBox mb={2}>
                                <ArgonInput
                                    id="outlined-basic"
                                    label="Sport Fee"
                                    variant="outlined"
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput
                                    id="outlined-basic"
                                    label="Sport Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonInput
                                    id="outlined-basic"
                                    label="Sport Image"
                                    variant="outlined"
                                    fullWidth
                                />
                            </ArgonBox>
                            <ArgonBox mb={2}>
                                <ArgonButton
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Add Sport
                                </ArgonButton>
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