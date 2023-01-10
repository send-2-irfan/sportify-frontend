
// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "success",
    icon: <i className="ni ni-trophy" style={{ fontSize: "12px" }} />,
    name: "Soccer",
    description: (
      <>
        {/*250 in stock,{" "}*/}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Winner
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "info",
    icon: <i className="ni ni-trophy" style={{ fontSize: "12px" }} />,
    name: "Cricket",
    description: (
      <>
        {/*123 closed,{" "}*/}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Winner
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "secondary",
    icon: <i className="ni ni-trophy" style={{ fontSize: "12px" }} />,
    name: "Tennis",
    description: (
      <>
        {/*1 is active,{" "}*/}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
            Winner
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "primary",
    icon: <i className="ni ni-trophy" style={{ fontSize: "12px" }} />,
    name: "Chess",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
            Winner
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
