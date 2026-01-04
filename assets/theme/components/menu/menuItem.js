import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";
import rgba from "../../functions/rgba";

const { text, white, transparent, primary } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minHeight: "unset",
      padding: `${pxToRem(6.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: white.main,
      transition: "background-color 300ms ease, color 300ms ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus":
        {
          backgroundColor: transparent.main,
          color: white.main,
          border: `1px solid ${rgba(text.primary, 0.2)}`,
          boxShadow: `0 0 10px ${primary.main}`,
        },
    },
  },
};

export default menuItem;
