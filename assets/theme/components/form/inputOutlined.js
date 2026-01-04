import borders from '../../base/borders'
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { inputBorderColor, info, grey, transparent, text } = colors
const { borderRadius } = borders
const { size } = typography
const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: inputBorderColor,
        backgroundColor: "transparent",
      },

      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: info.main
        }
      }
      
    },

    notchedOutline: {
      borderColor: inputBorderColor
    },

    input: {
      color: text.primary,
      padding: pxToRem(12),
      backgroundColor: transparent.main
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10)
    },

    multiline: {
      color: text.primary,
      padding: 0
    }
  }
}

export default inputOutlined
