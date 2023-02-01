

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
import React from "react";
import AthleteCard from "./ExecutorsCardDemo";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";

function ManageExecutors() {
    const { borderWidth, borderColor } = borders;

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <h1>Manage Executors</h1>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox pt={2} px={2}>
                        <ArgonBox mb={0.5}>
                            <ArgonTypography variant="h6" fontcolor="#32325d" fontWeight="medium" >
                                Manage Executors
                            </ArgonTypography>
                        </ArgonBox>
                    </ArgonBox>
                    <Card id="delete-account">
            <ArgonBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
                <ArgonTypography variant="h6" fontWeight="medium">

                </ArgonTypography>
                <ArgonButton variant="gradient" color="dark">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Add Executor
                </ArgonButton>
            </ArgonBox>
            <ArgonBox p={2}>
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

                <Card style={{width: 400,
                    margin: 'auto',
                    marginTop: 2}}>
                    <CardHeader
                        avatar={
                            <Avatar
                                src={'https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg'}
                                alt={'athlete.name'}
                                style={{width: 60,
                                    height: 60,}}
                            />
                        }
                        action={
                            <>
                                <IconButton >
                                    <Edit />
                                </IconButton>
                                <IconButton >
                                    <Delete />
                                </IconButton>
                            </>
                        }
                        title={`athlete.name`}
                        subheader={`athlete.sport`}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {`athlete.email`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Contact Number: {`athlete.contactNumber`}
                        </Typography>
                    </CardContent>
                </Card>





            </ArgonBox>
        </Card>
                </Card>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default ManageExecutors;
