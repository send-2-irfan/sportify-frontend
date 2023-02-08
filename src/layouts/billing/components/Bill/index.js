// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// MUI contexts
import {useArgonController} from "context";
import {useContext} from "react";
import {ApplicationContext} from "../../../../context/ApplicationContext";

function Bill({name, company, email, vat, noGutter, img, del, type}) {
    const [controller] = useArgonController();
    const {darkMode} = controller;
    const {setAllCoordinators, setAllExecutors} = useContext(ApplicationContext)

    const activateCoordinator = async (email, role) => {

        let allUsers = await JSON.parse(localStorage.getItem("users"))
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].role === role && allUsers[i].username === email) {
                console.log(allUsers[i])
                allUsers[i].active = true
            }
        }
        let coordinators = []
        let executors = []
        for (let user of allUsers) {
            if (role === 'COORDINATOR') user.role === 'COORDINATOR' && coordinators.push(user)
            if (role === 'EXECUTOR') user.role === 'EXECUTOR' && executors.push(user)
        }
        setAllCoordinators(coordinators)
        role === 'EXECUTOR' && setAllExecutors(executors)
        localStorage.setItem("users", JSON.stringify(allUsers))
    }

    return (
        <ArgonBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            borderRadius="lg"
            p={3}
            mb={noGutter ? 0 : 1}
            mt={2}
            sx={({palette: {grey, background}}) => ({
                backgroundColor: darkMode ? background.default : grey[100],
            })}
        >
            {img}
            <ArgonBox mr={2}></ArgonBox>
            <ArgonBox width="100%" display="flex" flexDirection="column">
                <ArgonBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems={{xs: "flex-start", sm: "center"}}
                    flexDirection={{xs: "column", sm: "row"}}
                    mb={1}
                >

                    <ArgonTypography variant="button" fontWeight="medium" textTransform="capitalize">
                        {name}
                    </ArgonTypography>
                    <ArgonBox
                        display="flex"
                        alignItems="center"
                        mt={{xs: 2, sm: 0}}
                        ml={{xs: -1.5, sm: 0}}
                    >
                        <ArgonBox ml={30} mr={2}>

                        </ArgonBox>
                    </ArgonBox>
                </ArgonBox>
                <ArgonBox mb={1} lineHeight={0}>
                    <ArgonTypography variant="caption" color="text">
                        Email ID:&nbsp;&nbsp;&nbsp;
                        <ArgonTypography variant="caption" fontWeight="medium">
                            <a href={`mailto:${company}`}>{company}</a>
                        </ArgonTypography>
                    </ArgonTypography>
                </ArgonBox>
                <ArgonBox mb={1} lineHeight={0}>
                    <ArgonTypography variant="caption" color="text">
                        Active Status:&nbsp;&nbsp;&nbsp;
                        <ArgonTypography variant="caption" fontWeight="medium">
                            {email}
                        </ArgonTypography>
                    </ArgonTypography>
                </ArgonBox>
                {!JSON.parse(email) && <button onClick={() => activateCoordinator(company, type)}
                                               className="btn btn-outline-primary btn-sm">{type === 'EXECUTOR' ? 'Activate Executor' : 'Activate Coordinator'}</button>}
            </ArgonBox>
        </ArgonBox>
    );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
    noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    vat: PropTypes.string.isRequired,
    noGutter: PropTypes.bool,
};

export default Bill;
