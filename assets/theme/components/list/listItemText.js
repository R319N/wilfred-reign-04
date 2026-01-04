import colors from '../../base/colors'
import typography from '../../base/typography'

const { text, grey } = colors
const { fontWeightLighter, fontWeightLight, size } = typography
const listItemtext = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      color: text.primary,
      fontWeight: fontWeightLight,
      fontSize: size.sm
    },
    secondary: {
      color: grey.main,
      fontWeight: fontWeightLighter,
      textTransform: 'lowercase',
      fontSize: size.sm
    }
  }
}
export default listItemtext
