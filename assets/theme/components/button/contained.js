"use client"
import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { white, secondary, primary, text } = colors;
const { size } = typography;

const contained = {
  base: {
    color: white.main,
    backgroundColor: secondary.main,
    minHeight: pxToRem(40),
    padding: `${pxToRem(10)} ${pxToRem(12)}`,

    "&:hover": {
      backgroundColor: primary.light,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: secondary.main,
    color: white.main,
    boxShadow: ` 0 0 10px ${({ theme }) => theme.palette.secondary.main}`,

    "&:hover": {
      backgroundColor: secondary.light,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
