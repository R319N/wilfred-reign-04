import boxShadows from '../base/boxShadows'
import colors from '../base/colors'

const { text, white } = colors

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,
      color: text.primary,
      transition: '0.5s all ease',

      '&:hover': {
        boxShadow: boxShadows.lg,
        color: text.focus
      }
    }
  }
}
export default iconButton
