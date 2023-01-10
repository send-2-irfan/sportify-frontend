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

export default function SportsFormDialog({show,setShow}) {

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Sport Form</DialogTitle>
                <DialogContent>
                    <Card>
                        <ArgonBox pt={2} pb={3} px={3}>
                            <ArgonBox component="form" role="form">
                                <ArgonBox mb={2}>
                                    <ArgonInput placeholder="Sport Name" />
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput type="textarea" placeholder="Sports Details" />
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput type="number" placeholder="Fee" />
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