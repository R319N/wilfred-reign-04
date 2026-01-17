import Phone from '@mui/icons-material/Phone'
import React from 'react'
import { IconButton } from '@mui/material'
import RotatingCard from '@/components/cards/RotatingCard'

interface Props {
  phoneNumber: string
}

const PhoneCallButton: React.FC<Props> = ({ phoneNumber }) => {
  return (
    <RotatingCard href={`tel:${phoneNumber}`}>
      <Phone sx={{ fontSize: '18px', color: '#0044bb' }} />
    </RotatingCard>
  )
}

export default PhoneCallButton
