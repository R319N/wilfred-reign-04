import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

// Material Dashboard 2 React Helper Functions

const cardHeader = {
  styleOverrides: {
    root: {
      margin: 0,
      padding:0,
      paddingBottom: "2rem",
    },
    subheader: {
      marginTop: pxToRem(12),
    },
  },
};

export default cardHeader;
