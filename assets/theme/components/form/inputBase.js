import colors from "../../base/colors";
import typography from "../../base/typography";

const { inputBorderColor, grey, secondary } = colors;
const { size } = typography;

const inputBase = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.sm,
      color: grey.light,
      borderColor: inputBorderColor,
      padding: "0.3rem 1rem",
      "&:hover": {},

      "& .MuiOutlinedInput-notchedOutline, &:before": {
        borderColor: secondary.main,
        color: grey.light,
        backgroundColor: "transparent",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: inputBorderColor,
      },
      "& .MuiNotchedOutline": {
        borderColor: inputBorderColor,
      },
      "& .MuiFormLabel-root-MuiInputLabel-root": {
        color: grey.light,
      },
    },
  },
};
export default inputBase;
