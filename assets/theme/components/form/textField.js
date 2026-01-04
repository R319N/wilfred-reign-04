import colors from "../../base/colors";

const { borderColor } = colors;

const textField = {
  styleOverrides: {
    root: {
      borderColor: borderColor,
      "&.textFieldBright": {},
      "& .MuiInputBase-root": {
        backgroundColor: "transparent",
      },
      "& .MuiInputAdornment": {
        color: "white",
      },
    },
  },
};
export default textField;
