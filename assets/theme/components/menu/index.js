import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";
import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";
import rgba from "../../functions/rgba";

const { md } = boxShadows;
const { size } = typography;
const { text, transparent } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.primary,
      textAlign: "left",
      // backgroundColor: `${transparent.main} !important`,
      backdropFilter: "blur(3px)",
    },
  },
};

export default menu;
