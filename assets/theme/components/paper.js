import boxShadows from '../base/boxShadows'
import colors from '../base/colors'

const { md } = boxShadows
const { background } = colors

const paper = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: "transparent",
      backgroundClip: 'border-box',
      boxShadow: md,
      padding: '0',
      overflow: 'visible'
    }
  }
}

export default paper
