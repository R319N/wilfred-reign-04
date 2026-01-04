import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";

// Material Kit 2 React Base Styles

const { text } = colors;
const { size } = typography;
const { borderWidth } = borders;

const inputAdornment = {
  styleOverrides: {
    root: {
      color: text.primary,
    },
  },
};
export default inputAdornment;
