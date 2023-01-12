import React from 'react';
import {makeStyles} from "@mui/styles";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    getRatingUtilityClass,
    Icon,
    IconButton,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import {Delete, Edit} from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        maxHeight: 500,
        backgroundColor: red[30]
    },
    media: {
        padding: '1%', // 16:9
        width:'100%',
        border: '1px solid white',
        borderRadius: '23px',
        boxShadow: '0 0 2px whitesmoke'

    },
    avatar: {
        backgroundColor: red[500],
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const ManageExecutorCard = ({ imageUrl, name, department, cmsId, email, password }) => {
    const classes = useStyles();
    const handleEdit = () => {
        // handle edit logic here
        console.log("Edit clicked")
    }
    const handleDelete = () => {
        // handle delete logic here
        console.log("Delete clicked")
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar aria-label="recipe" color='secondary' className={classes.avatar}>
                        {name[0]}
                    </Avatar>
                }
                title={name}
                action={
                    <>
                        <IconButton aria-label="edit" color='info' onClick={handleEdit}>
                            <Icon>edit</Icon>
                        </IconButton>
                        <IconButton aria-label="delete" color='error' onClick={handleDelete}>
                            <Delete />
                        </IconButton>
                    </>
                }
            />
            <img src={imageUrl} alt={name} className={classes.media} />

            <CardContent>
                <Typography variant="body2" color="secondary" component="p">
                    Role: Executor
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                    Department: {department}
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                    CMS-ID: {cmsId}
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                    Email: {email}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default ManageExecutorCard;
