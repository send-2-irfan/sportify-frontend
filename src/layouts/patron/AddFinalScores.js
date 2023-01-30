
// @mui material components
import Card from "@mui/material/Card";
// MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import { makeStyles } from '@mui/styles';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Paper from '@mui/material/Paper';
import ArgonButton from "../../components/ArgonButton";
import Icon from "@mui/material/Icon";


function AddFinalScores() {
    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;


    const editBtn = <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>Edit</Button>;
    const deleteBtn = <Button variant="contained" color="secondary" onClick={() => handleRemove(index)}>Remove</Button>


    // const classes = useStyles();
    const [scores, setScores] = useState([
        { team: 'Team 1', score: 0, sports: 'Soccer', status: 'Completed' },
        { team: 'Team 2', score: 0, sports: 'Basketball', status: 'Upcoming' }
    ]);
    const [newTeam, setNewTeam] = useState('');
    const [newScore, setNewScore] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [editTeam, setEditTeam] = useState('');
    const [editScore, setEditScore] = useState('');
    const [newSports, setNewSports] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [editSports, setEditSports] = useState('');
    const [editStatus, setEditStatus] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const newScores = [...scores];
            newScores[editIndex] = { team: editTeam, score: editScore, sports: editSports, status: editStatus };
            setScores(newScores);
            setIsEditing(false);
            setEditIndex(-1);
            setEditTeam('');
            setEditScore('');
            setEditSports('');
            setEditStatus('');
        } else {
            setScores([...scores, { team: newTeam, score: newScore, sports: newSports, status: newStatus }]);
            setNewTeam('');
            setNewScore('');
            setNewSports('');
            setNewStatus('');
        }
    };


    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setEditTeam(scores[index].team);
        setEditScore(scores[index].score);
    };

    const handleRemove = (index) => {
        const newScores = [...scores];
        newScores.splice(index, 1);
        setScores(newScores);
    };


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <h2>Manage Final Scores</h2 >
            <ArgonBox py={3}>
                <ArgonBox mb={3}>
                    <Card>
                        <Table
                            columns={[
                                { name: "team", align: "left" },
                                { name: "score", align: "left" },
                                { name: "sports", align: "left" },
                                { name: "status", align: "center" },
                                { name: "Actions", align: "center" },
                            ]}
                            rows={scores}
                        />
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Team Name"
                                value={isEditing ? editTeam : newTeam}
                                onChange={(e) => isEditing ? setEditTeam(e.target.value) : setNewTeam(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Score"
                                value={isEditing ? editScore : newScore}
                                onChange={(e) => isEditing ? setEditScore(e.target.value) : setNewScore(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Sports"
                                value={isEditing ? editSports : newSports}
                                onChange={(e) => isEditing ? setEditSports(e.target.value) : setNewSports(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Status"
                                value={isEditing ? editStatus : newStatus}
                                onChange={(e) => isEditing ? setEditStatus(e.target.value) : setNewStatus(e.target.value)}
                                margin="normal"
                            />

                            <ArgonButton style={{marginTop: '16px', marginLeft: '10px'}} type="submit" variant="contained" color="info">
                                {isEditing ? 'Save' : 'Add Score'}
                            </ArgonButton>
                        </form>




                        {/*<ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>*/}
                        {/*    <ArgonTypography variant="h6">Manage Final Scores</ArgonTypography>*/}
                        {/*</ArgonBox>*/}
                        {/*<ArgonBox*/}
                        {/*    sx={{*/}
                        {/*        "& .MuiTableRow-root:not(:last-child)": {*/}
                        {/*            "& td": {*/}
                        {/*                borderBottom: ({ borders: { borderWidth, borderColor } }) =>*/}
                        {/*                    `${borderWidth[1]} solid ${borderColor}`,*/}
                        {/*            },*/}
                        {/*        },*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Table columns={columns} rows={rows} />*/}
                        {/*</ArgonBox>*/}
                    </Card>
                </ArgonBox>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default AddFinalScores;
