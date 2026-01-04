import colors from '../../base/colors'
import pxToRem from '../../functions/pxToRem'

const { text,  transparent, primary } = colors

const tabs = {
  styleOverrides: {
    root: {
      position: 'relative',
      minHeight: 'unset',
      padding: pxToRem(1),
      textColor: text.primary,
      m: '1rem'
    },
    flexContainer: {
      height: '100%',
      position: 'relative',
      zIndex: 10
    },

    fixed: {
      overflow: 'unset !important',
      overflowX: 'unset !important'
    },

    vertical: {
      '& .MuiTabs-indicator': {
        width: '100%'
      }
    },

    indicator: {
      height: '100%',
      color: primary.main,
      transition: 'all 500ms ease',
      // '&:hover':{
      //   color: secondary.main,
      // }
    }
  }
}

export default tabs
