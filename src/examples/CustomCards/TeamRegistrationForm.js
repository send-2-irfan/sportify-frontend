import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import {
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button
} from "@mui/material";
import ArgonBox from "../../components/ArgonBox";
import ArgonTypography from "../../components/ArgonTypography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(3)
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: "80%"
    },
    button: {
        margin: theme.spacing(4)
    }
}));

function FootballTeamRegistrationForm() {
    const classes = useStyles();
    const [teamName, setTeamName] = useState("");
    const [captainName, setCaptainName] = useState("");
    const [captainContactNumber, setCaptainContactNumber] = useState("");
    const [semester, setSemester] = useState("");
    const [department, setDepartment] = useState("");

    const [email, setEmail] = useState("");
    const [players, setPlayers] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        setPlayers([...players, { teamName, captainName, captainContactNumber, email, semester, department }]);
    };

    return (
        <>

            <ArgonBox p={12}>
                <Card style={{width:'50%'}}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12} xl={12}>
                <ArgonBox p={3} mb={1} textAlign="center">
                    <ArgonTypography variant="45" fontWeight="medium">
                        Sports Registration Form
                    </ArgonTypography>
                </ArgonBox>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    style={{marginTop:'-6%'}}
                    label="Team Name"
                    className={classes.textField}
                    value={teamName}
                    onChange={event => setTeamName(event.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Captain Name"
                    className={classes.textField}
                    value={captainName}
                    onChange={event => setCaptainName(event.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Captain Contact Number"
                    className={classes.textField}
                    value={captainContactNumber}
                    onChange={event => setCaptainContactNumber(event.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Semester"
                    className={classes.textField}
                    value={semester}
                    onChange={event => setSemester(event.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Department"
                    className={classes.textField}
                    value={department}
                    onChange={event => setDepartment(event.target.value)}
                    margin="normal"
                />
                <TextField
                    style={{marginTop:'10'}}
                    label="Email"
                    className={classes.textField}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    margin="normal"
                />
                <Button  type="submit" variant="contained" color="primary" className={classes.button}>
                    Register Team
                </Button>
            </form>
            <Paper className={classes.root}>
                {/*<Table className={classes.table}>*/}
                {/*    <TableHead>*/}
                {/*        <TableRow>*/}
                {/*            <TableCell>Team Name</TableCell>*/}
                {/*            <TableCell align="right">Captain Name*/}
                {/*            </TableCell>*/}
                {/*            <TableCell align="right">Captain Contact Number</TableCell>*/}
                {/*            <TableCell align="right">Email</TableCell>*/}
                {/*        </TableRow>*/}
                {/*    </TableHead>*/}
                {/*    <TableBody>*/}
                {/*        {players.map(player => (*/}
                {/*            <TableRow key={player.teamName}>*/}
                {/*                <TableCell component="th" scope="row">*/}
                {/*                    {player.teamName}*/}
                {/*                </TableCell>*/}
                {/*                <TableCell align="right">{player.captainName}</TableCell>*/}
                {/*                <TableCell align="right">{player.captainContactNumber}</TableCell>*/}
                {/*                <TableCell align="right">{player.email}</TableCell>*/}
                {/*                    <TableCell>Semester</TableCell>*/}
                {/*                    <TableCell align="right">Department</TableCell>*/}
                {/*            </TableRow>*/}
                {/*        ))}*/}
                {/*    </TableBody>*/}
                {/*</Table>*/}
            </Paper>
                    </Grid>
                    </Grid>
                    </Card>
            </ArgonBox>

        </>
    );
}

export default FootballTeamRegistrationForm;
