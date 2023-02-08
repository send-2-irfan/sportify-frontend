

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

//  MUI base styles
import borders from "assets/theme/base/borders";
import sportsGala from "../../assets/images/bruce-mars.jpg";
// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import {Avatar, CardContent, CardHeader, Typography} from "@mui/material";
import React, {useContext, useEffect} from "react";
import AthleteCard from "./ExecutorsCardDemo";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";
import AddExecutor from "../patron/AddExecutor";
import {ApplicationContext} from "../../context/ApplicationContext";
import ArgonAvatar from "../../components/ArgonAvatar";

function ManageExecutors() {
    const { borderWidth, borderColor } = borders;

    const {executors, setAllExecutors} = useContext(ApplicationContext)
    useEffect(() => {
        JSON.parse(localStorage.getItem("executors")) && setAllExecutors(JSON.parse(localStorage.getItem("executors")))
    }, [])

    function handleDelete(name) {
        let executorNew = []
        for (let i = 0; i < executors.length; i++) {
            if (executors[i].name !== name) {
                executorNew.push(executors[i])
            }
        }
        localStorage.setItem('executors', JSON.stringify(executorNew))
        setAllExecutors(executorNew)
    }

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <h1>Manage Executors</h1>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox pt={2} px={2}>
                        <ArgonBox mb={0.5}>
                            <ArgonTypography variant="h6" fontWeight="medium">
                                Manage Executors
                            </ArgonTypography>
                        </ArgonBox>
                    </ArgonBox>
                    <ArgonBox p={2}>
                        <Grid container spacing={3}>
                            {
                                executors.map((items, index)=>{
                                    return <Card
                                        style={{width: '100%',
                                        margin:'10px', display:'flex',}}
                                    >
                                        <CardHeader
                                            style={{display:'flex',width:'100%', flexDirection:'row', fontWeight:'bolder'}}
                                            avatar={
                                                <ArgonAvatar
                                                    // src={'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg'}
                                                    src={items.imageUrl}
                                                    alt={items.name}
                                                    style={{width: 160,
                                                        height: 160,}}
                                                />
                                            }
                                            action={
                                                <>
                                                    {/*<IconButton onClick={() => handleEdit(`athlete.id`)}>*/}
                                                    {/*    <Edit color='info' />*/}
                                                    {/*</IconButton>*/}
                                                    <IconButton onClick={() => handleDelete(items.name)}>
                                                        <Delete color='error'/>
                                                    </IconButton>
                                                </>
                                            }
                                            title={items.name}
                                            subheader={'Executor of '+items.sport}
                                        />
                                        <CardContent style={{width:'40%'}}>
                                            {/*<Typography variant="h6" fontWeight="medium">*/}
                                            {/*    Role: {'Executor of '+items.sport}*/}
                                            {/*</Typography>*/}
                                            {/*<Typography variant="body2" color="dark" component="p">*/}
                                            {/*    Name: {items.name}*/}
                                            {/*</Typography>*/}
                                            <Typography variant="body2" color="dark" component="p">
                                            Department: {items.department}
                                        </Typography>
                                            <Typography variant="body2" color="dark" component="p">
                                                Contact Number: {items.contact}
                                            </Typography>
                                            <Typography variant="body2" color="dark" component="p">
                                                Email: {items.email}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                })
                            }


                {/*<Grid container spacing={3}>*/}
                {/*    <Grid item xs={12} md={7} mb={1.5}>*/}
                {/*        <ArgonBox*/}
                {/*            border={`${borderWidth[1]} solid ${borderColor}`}*/}
                {/*            borderRadius="lg"*/}
                {/*            display="flex"*/}
                {/*            justifyContent="space-between"*/}
                {/*            alignItems="center"*/}
                {/*            p={1.3}*/}
                {/*        >*/}
                {/*            <ArgonBox component="img" src={sportsGala} alt="master card" width="20%" mr={1} style={{borderRadius:'8%'}}/>*/}
                {/*            <CardContent>*/}
                {/*                <Typography variant="h6" fontWeight="medium">*/}
                {/*                    Role: Executor*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="dark" component="p">*/}
                {/*                    Name: Irfan Ullah*/}
                {/*                </Typography><Typography variant="body2" color="dark" component="p">*/}
                {/*                    Department: {`department`}*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="dark" component="p">*/}
                {/*                    CMS-ID: {`cmsId`}*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="dark" component="p">*/}
                {/*                    Email: {`email`}*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}

                {/*            <ArgonBox ml="auto" lineHeight={0} mt={-13}>*/}
                {/*                <Tooltip title="Edit Card" placement="top">*/}
                {/*                    <Icon sx={{ cursor: "pointer" }} fontSize="small">*/}
                {/*                        edit*/}
                {/*                    </Icon>*/}
                {/*                </Tooltip>*/}
                {/*            </ArgonBox>*/}
                {/*            <ArgonBox ml="auto" lineHeight={0} mt={-13}>*/}
                {/*                <Tooltip title="Delete Card" placement="top">*/}
                {/*                    <Icon color='error' sx={{ cursor: "pointer" }} fontSize="small">*/}
                {/*                        delete*/}
                {/*                    </Icon>*/}
                {/*                </Tooltip>*/}
                {/*            </ArgonBox>*/}
                {/*        </ArgonBox>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                            </Grid>
                        </ArgonBox>
                        <AddExecutor/>
                </Card>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default ManageExecutors;
