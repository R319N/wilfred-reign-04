import colors from '../../base/colors'
import pxToRem from '../../functions/pxToRem'

const { light } = colors

const cardContent = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      color: light.main
    }
  }
}

export default cardContent
