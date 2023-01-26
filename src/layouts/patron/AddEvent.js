// import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
// import {Delete, Edit} from "@mui/icons-material";
//
// const useStyles = makeStyles((theme) => ({
//     button: {
//         margin: theme.spacing(1),
//     },
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
//     card: {
//         width: '20%',
//         margin: theme.spacing(1),
//     },
// }));
//
// export default function SimpleModal() {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [name, setName] = useState('');
//     const [details, setDetails] = useState('');
//     const [image, setImage] = useState('');
//     const [cards, setCards] = useState([]);
//
//     const handleOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     const handleSubmit = () => {
//         setCards([...cards, { name, details, image }]);
//         setOpen(false);
//     };
//
//     const handleEdit = (index) => {
//         setName(cards[index].name);
//         setDetails(cards[index].details);
//         setImage(cards[index].image);
//         setCards(cards.filter((card, i) => i !== index));
//         setOpen(true);
//     };
//
//     const handleDelete = (index) => {
//         setCards(cards.filter((card, i) => i !== index));
//     };
//
//     return (
//         <div>
//             <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
//                 Open Modal
//             <Button/>
//                 <Button variant="contained" color="primary" className={classes.button} onClick={handleOpen}>
//                     Open Modal
//                 </Button>
//                 <Modal
//                     open={open}
//                     onClose={handleClose}
//                     className={classes.modal}
//                 >
//                     <div className={classes.paper}>
//                         <h2>Add Card</h2>
//                         <TextField
//                             label="Name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             margin="normal"
//                         />
//                         <br />
//                         <TextField
//                             label="Details"
//                             value={details}
//                             onChange={(e) => setDetails(e.target.value)}
//                             margin="normal"
//                         />
//                         <br />
//                         <TextField
//                             label="Image"
//                             value={image}
//                             onChange={(e) => setImage(e.target.value)}
//                             margin="normal"
//                         />
//                         <br />
//                         <Button variant="contained" color="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </div>
//                 </Modal>
//                 {cards.map((card, index) => (
//                     <Card className={classes.card} key={index}>
//                         <CardContent>
//                             <h3>{card.name}</h3>
//                             <p>{card.details}</p>
//                             <img src={card.image} alt={card.name} />
//                             <IconButton onClick
//                             <IconButton onClick={() => handleEdit(index)}>
//                                 <Edit />
//                             </IconButton>
//                             <IconButton onClick={() => handleDelete(index)}>
//                                 <Delete />
//                             </IconButton>
//                         </CardContent>
//                     </Card>
//                 ))}
//         </div>
// );
// }
