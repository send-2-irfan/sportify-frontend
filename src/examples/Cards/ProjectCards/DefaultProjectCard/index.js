// react-router-dom components
import {Link} from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

//  MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonAvatar from "components/ArgonAvatar";

function DefaultProjectCard({image, label, title, description, action, authors}) {
    const renderAuthors = authors.map(({image: media, name}) => (
        <Tooltip key={name} title={name} placement="bottom">
            <ArgonAvatar
                src={media}
                alt={name}
                size="small"
                sx={({borders: {borderWidth}, palette: {white}}) => ({
                    border: `${borderWidth[2]} solid ${white.main}`,
                    cursor: "pointer",
                    position: "relative",
                    ml: -1.25,

                    "&:hover, &:focus": {
                        zIndex: "10",
                    },
                })}
            />
        </Tooltip>
    ));

    return (
          <>
              <ArgonBox position="relative" width="100.25%" shadow="md" borderRadius="xl" mb={1}>
                  <CardMedia  style={{backgroundColor: '#efefef'}}
                              src={image}
                              component="img"
                              title={`Sport Title: ${title}`}
                              sx={{
                                  maxWidth: "100%",
                                  margin: 0,
                                  boxShadow: ({boxShadows: {md}}) => md,
                                  objectFit: "cover",
                                  objectPosition: "center",
                              }}
                  />
              </ArgonBox>
              <ArgonBox pt={1} px={0.5} style={{marginTop: '-5px'}}>
                  <ArgonBox mb={1}>
                          <ArgonTypography
                              variant="h4"
                              textTransform="capitalize"
                          >
                              {title}
                          </ArgonTypography>
                  </ArgonBox>
                  <ArgonTypography
                      variant="button"
                      fontWeight="large"
                      textTransform="capitalize"
                      color='info'
                      mt={-3}
                      textGradient
                  >
                      {label}
                  </ArgonTypography>
                  <ArgonBox mb={2} lineHeight={0}>
                      <ArgonTypography variant="button" fontWeight="regular" color="text" style={{justifyContent:'justify'}}>
                          {description}
                      </ArgonTypography>
                  </ArgonBox>
                  <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
                      {(action.label !=="" && action.type === "internal") && (
                          <ArgonButton
                              component={Link}
                              to={action.route}
                              variant="outlined"
                              size="small"
                              color={action.color}
                          >
                              {action.label}
                          </ArgonButton>
                      )}
                      <ArgonBox display="flex">{renderAuthors}</ArgonBox>
                  </ArgonBox>
              </ArgonBox>
          </>

    );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
    authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]),
        route: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "light",
            "dark",
            "white",
        ]).isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
    authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
