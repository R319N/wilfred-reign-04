import colors from "../../base/colors";
import typography from "../../base/typography";

const { white, secondary, text } = colors;
const { size } = typography;

const inputLabel = {
  styleOverrides: {
    root: {
      fontSize: size.xs,
      color: text.primary,
      lineHeight: 0.9,

      "&.Mui-focused": {
        color: secondary.main,
      },

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.5,
        fontSize: size.md,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.85em",
        },
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.6,
        fontSize: size.sm,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.72em",
        },
      },
    },
  },
};
export default inputLabel;
