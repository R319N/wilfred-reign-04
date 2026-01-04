import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";

// Material Kit 2 React Base Styles

const { info, inputBorderColor, dark, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      "&& .MuiInput-root:hover::before ": {
        borderColor: "red",
      },
    },
    underline: {
      "&:before": {
        borderBottom: `1px solid #dec5e3`,
      },
      "&:hover": {
        borderBottom: `1px solid #dec5e3`,
      },
    },
  },
};
export default input;
