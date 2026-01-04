"use client"
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { transparent, text, secondary, white, borderColor } = colors
const { size } = typography

const outlined = {
  base: {
    minHeight: pxToRem(40),
    color: white.main,
    borderColor: secondary.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,
    transition: '0.2s background all ease',
    backgroundColor: secondary.main,

    '&:hover': {
      // opacity: 0.75,
      backgroundColor: secondary.main,
      borderColor: secondary.main,
      color: text.primary
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`
    }
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`
    }
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`
    }
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: transparent.main,

    '&:hover': {
      backgroundColor: transparent.main,
      borderColor: secondary.main
    }
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    '&:hover': {
      backgroundColor: transparent.main
    }
  }
}

export default outlined
