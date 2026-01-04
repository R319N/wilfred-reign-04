"use client"
import borders from '../../base/borders'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { fontWeightRegular, size } = typography
const { borderRadius } = borders

const root = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.xs,
  textTransform: 'capitalize',
  fontWeight: fontWeightRegular,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: 'all 150ms ease-in',
  backgroundColor: 'grey',

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2)
  }
}

export default root
