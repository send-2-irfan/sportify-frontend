// // @mui material components
// import Card from "@mui/material/Card";
// // MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
//
// // MUI examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import Table from "examples/Tables/Table";
//
// import {makeStyles} from '@mui/styles';
//
// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
// import React, {useState} from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
//
// import Paper from '@mui/material/Paper';
// import ArgonButton from "../../components/ArgonButton";
// import Icon from "@mui/material/Icon";
// import ArgonInput from "../../components/ArgonInput";
// import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";
// import Moment from "react-moment";
// import IconButton from "@mui/material/IconButton";
// import {Delete, Edit} from "@mui/icons-material";
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing(3),
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 650,
//     },
//     action: {
//         width: '10%',
//     },
// }));
//
// function AddFinalScores() {
//     const {columns, rows} = authorsTableData;
//     const {columns: prCols, rows: prRows} = projectsTableData;
//
//
//     const editBtn = <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>Edit</Button>;
//     const deleteBtn = <Button variant="contained" color="secondary" onClick={() => handleRemove(index)}>Remove</Button>
//
//
//     // const classes = useStyles();
//     const [scores, setScores] = useState([
//         {team: 'Team 1', score: 0, sports: 'Soccer', status: 'Winner',},
//         {team: 'Team 2', score: 0, sports: 'Basketball', status: 'Winner'}
//     ]);
//     const [newTeam, setNewTeam] = useState('');
//     const [newScore, setNewScore] = useState('');
//     const [isEditing, setIsEditing] = useState(false);
//     const [editIndex, setEditIndex] = useState(-1);
//     const [editTeam, setEditTeam] = useState('');
//     const [editScore, setEditScore] = useState('');
//     const [newSports, setNewSports] = useState('');
//     const [newStatus, setNewStatus] = useState('');
//     const [editSports, setEditSports] = useState('');
//     const [editStatus, setEditStatus] = useState('');
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isEditing) {
//             const newScores = [...scores];
//             newScores[editIndex] = {team: editTeam, score: editScore, sports: editSports, status: editStatus};
//             setScores(newScores);
//             setIsEditing(false);
//             setEditIndex(-1);
//             setEditTeam('');
//             setEditScore('');
//             setEditSports('');
//             setEditStatus('');
//         } else {
//             setScores([...scores, {team: newTeam, score: newScore, sports: newSports, status: newStatus}]);
//             setNewTeam('');
//             setNewScore('');
//             setNewSports('');
//             setNewStatus('');
//         }
//     };
//
//
//     const handleEdit = (index) => {
//         setIsEditing(true);
//         setEditIndex(index);
//         setEditTeam(scores[index].team);
//         setEditScore(scores[index].score);
//     };
//
//     const handleRemove = (index) => {
//         const newScores = [...scores];
//         newScores.splice(index, 1);
//         setScores(newScores);
//     };
//
//     function handleDelete() {
//         // let scheduleNew = []
//         // for (let i = 0; i < schedule.length; i++) {
//         //     if (schedule[i].teamA !== teamA ) {
//         //         scheduleNew.push(schedule[i])
//         //     }
//         // }
//         // localStorage.setItem('schedules', JSON.stringify(scheduleNew))
//         // setAllSchedule(scheduleNew)
//     }
//
//     const classes = useStyles();
//
//     console.log("Here are scores: " + scores)
//     return (
//         <DashboardLayout>
//             <DashboardNavbar/>
//             <h2>Manage Final Scores</h2>
//             <ArgonBox py={3}>
//                 {
//                     JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role !== 'PLAYER' &&
//                     <form onSubmit={handleSubmit} style={{display: 'flex', paddingTop: '3%'}}>
//                         <ArgonBox mb={2} ml={2} mr={1}>
//                             <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
//                                         label="Team Name"
//                                         placeholder="Team Name"
//                                         value={isEditing ? editTeam : newTeam}
//                                         onChange={(e) => isEditing ? setEditTeam(e.target.value) : setNewTeam(e.target.value)}
//                                         margin="normal"
//                             />
//                         </ArgonBox>
//                         <ArgonBox mb={2} mr={1}>
//                             <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
//                                 // label="Score"
//                                         placeholder='Score'
//                                         value={isEditing ? editScore : newScore}
//                                         onChange={(e) => isEditing ? setEditScore(e.target.value) : setNewScore(e.target.value)}
//                                         margin="normal"
//                             />
//                         </ArgonBox>
//                         <ArgonBox mb={2} mr={1}>
//                             <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
//                                         label="Sports"
//                                         placeholder="Sports"
//                                         value={isEditing ? editSports : newSports}
//                                         onChange={(e) => isEditing ? setEditSports(e.target.value) : setNewSports(e.target.value)}
//                                         margin="normal"
//                             />
//                         </ArgonBox>
//                         <ArgonBox mb={2} mr={1}>
//                             <ArgonInput style={{marginBottom: '10px', textAlign: 'center'}}
//                                         label="Status"
//                                         placeholder="Status"
//                                         value={isEditing ? editStatus : newStatus}
//                                         onChange={(e) => isEditing ? setEditStatus(e.target.value) : setNewStatus(e.target.value)}
//                                         margin="normal"
//                                         color='info'
//                             />
//                         </ArgonBox>
//                         <ArgonBox mb={2}>
//                             <ArgonButton style={{marginBottom: '10px', textAlign: 'center'}} type="submit"
//                                          variant="contained" color="dark">
//                                 {isEditing ? 'Save' : 'Add Score'}
//                             </ArgonButton>
//                         </ArgonBox>
//                     </form>
//                 }
//                 <ArgonBox mb={3}>
//                     <Card>
//
//                         <Table
//                             columns={[
//                                 {name: "team", align: "left"},
//                                 {name: "score", align: "left"},
//                                 {name: "sports", align: "left"},
//                                 {name: "status", align: "center"},
//                                 {name: "Action", align: "center"},
//                             ]}
//                             rows={scores}
//                         />
//
//
//                         <Table className={classes.table}>
//                             <TableHead style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
//                                 <TableRow style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
//                                     <TableCell>Team A</TableCell>
//                                     <TableCell>Team B</TableCell>
//                                     <TableCell>Time</TableCell>
//                                     <TableCell>Location</TableCell>
//                                     <TableCell className={classes.action}>Action</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//
//                                 {scores.map((match) => (
//                                     <TableRow key={match.id}
//                                               style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
//                                         <TableCell>{match.team}</TableCell>
//                                         <TableCell>{match.score}</TableCell>
//                                         <TableCell>{match.sports}</TableCell>
//                                         <TableCell>{match.status}</TableCell>
//                                         <TableCell className={classes.action} style={{marginRight: '20px'}}>
//                                             <IconButton>
//                                                 <Edit color="info"/>
//                                             </IconButton>
//                                             <IconButton>
//                                                 <Delete color="error"/>
//                                             </IconButton>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//
//
//                         {/*<ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>*/}
//                         {/*    <ArgonTypography variant="h6">Manage Final Scores</ArgonTypography>*/}
//                         {/*</ArgonBox>*/}
//                         {/*<ArgonBox*/}
//                         {/*    sx={{*/}
//                         {/*        "& .MuiTableRow-root:not(:last-child)": {*/}
//                         {/*            "& td": {*/}
//                         {/*                borderBottom: ({ borders: { borderWidth, borderColor } }) =>*/}
//                         {/*                    `${borderWidth[1]} solid ${borderColor}`,*/}
//                         {/*            },*/}
//                         {/*        },*/}
//                         {/*    }}*/}
//                         {/*>*/}
//                         {/*    <Table columns={columns} rows={rows} />*/}
//                         {/*</ArgonBox>*/}
//                     </Card>
//                 </ArgonBox>
//             </ArgonBox>
//         </DashboardLayout>
//     );
// }
//
// export default AddFinalScores;


import React, {useContext, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {ApplicationContext} from "../../context/ApplicationContext";
import {Form, Input, Select, Button, Card} from "antd";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ArgonBox from "../../components/ArgonBox";
import ScoreTable from "../Executor/ScoreTable";


const { Option } = Select;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
        textAlign: 'center',
    },
}));


export default function AddFinalScores() {
    const classes = useStyles();
    const [score, setScore] = useState({
        team: '',
        sport: '',
        score: '',
        status: '',
    })

    const {scores, setAllScores} = useContext(ApplicationContext)
    const {teams, setAllTeams} = useContext(ApplicationContext)

    const handleAdd = (e) => {
        if (JSON.parse(localStorage.getItem("scores"))) {
            let items = JSON.parse(localStorage.getItem("scores"))
            items.push(score)
            localStorage.setItem("scores", JSON.stringify(items))
            setAllScores(items)
            setScore({
                team: '',
                sport: '',
                score: '',
                status: '',
            })
        } else {
            let scoresNew = []
            scoresNew.push(score)
            localStorage.setItem("scores", JSON.stringify(scoresNew))
            setAllScores(scoresNew)
            setScore({
                team: '',
                sport: '',
                score: '',
                status: '',
            })
        }
    };

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <ArgonBox >
                <h4>Manage Final Scores</h4>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper className={classes.paper}>
                        <Typography variant="h1" gutterBottom>
                            Final Scores
                        </Typography>

                        {JSON.parse(sessionStorage.getItem("login")) && JSON.parse(sessionStorage.getItem("login")).role !== 'PLAYER' ?
                            <form onSubmit={handleAdd}>

                                {/*<Input*/}
                                {/*    placeholder="Team"*/}
                                {/*    value={score.team}*/}
                                {/*    onChange={(event) => setScore({...score, team: event.target.value})}*/}
                                {/*    style={{width: '200px'}}*/}
                                {/*/>*/}
                                <Select
                                    placeholder='Select Team 2'
                                    value={score.team}
                                    onChange={(value) => setScore({...score, team: value})}
                                    className={classes.textField}
                                    style={{width:'300'}}>
                                    <Select.Option value='' disabled>Select Team</Select.Option>
                                    {setAllTeams.length > 0 ? (
                                        teams.map((team, index) => (
                                            <Select.Option key={`${team.teamName}-${index}`} value={`${team.teamName}`}>
                                                {`${team.teamName}`}
                                            </Select.Option>
                                        ))
                                    ) : (
                                        ''
                                    )}

                                    {/*<Select.Option value='' disabled>Select Team</Select.Option>*/}
                                    {/*<Select.Option value="CS Strikers">CS Strikers</Select.Option>*/}
                                    {/*<Select.Option value="BB Gladiators">BB Gladiators</Select.Option>*/}
                                    {/*<Option value="AF 11">AF 11</Option>*/}
                                </Select>
                                <Input
                                    placeholder="Sport"
                                    value={score.sport}
                                    onChange={(event) => setScore({...score, sport: event.target.value})}
                                    style={{width: '200px', marginLeft: '5px'}}
                                />

                                <Input
                                    placeholder="Scores"
                                    value={score.score}
                                    onChange={(event) => setScore({...score, score: event.target.value})}
                                    style={{width: '200px', marginLeft: '5px'}}
                                />
                                <Input
                                    placeholder="Status"
                                    value={score.status}
                                    onChange={(event) => setScore({...score, status: event.target.value})}
                                    style={{width: '200px', marginLeft: '5px'}}
                                />

                                <Button
                                    variant="standard"
                                    type="primary"
                                    onClick={(e) => {
                                        handleAdd(e)
                                    }}
                                    style={{color: 'white', backgroundColor: 'blue', marginLeft: '5px'}}
                                >
                                    Set Scores
                                </Button>
                            </form>
                        :
                                <Typography style={{marginTop: '1rem',}} variant="h5" gutterBottom>
                                    Final Scores have been uploaded for you
                                </Typography>
                        }
                    </Paper>
                </Grid>
                <ScoreTable scor={score} />
            </Grid>
            </ArgonBox>
        </DashboardLayout>
    );
}


