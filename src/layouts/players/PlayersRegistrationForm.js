import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import AddSportForm from "../../examples/CustomCards/AddSportForm";
export default function PlayerRegistrationFormDialog({show,setShowPlayer}) {

    const handleClose = () => {
        setShowPlayer(false);
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose} >
                <DialogContent>
                    <AddSportForm />
                </DialogContent>
            </Dialog>
        </div>
    );
}