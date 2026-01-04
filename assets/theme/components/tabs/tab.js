import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { size, fontWeightLighter } = typography;
const { primary } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.sm,
      fontWeight: fontWeightLighter,
      textTransform: "capitalize",
      lineHeight: "inherit",
      padding: pxToRem(6),
      margin: pxToRem(1),
      width: pxToRem(90),
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(10),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
      "&:hover": {
        color: `${primary.main} !important`,
      },
      "&:focus": {
        color: `${primary.focus} !important`,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
