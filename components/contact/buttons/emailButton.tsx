import RotatingCard from '@/components/cards/RotatingCard'
import Mail from '@mui/icons-material/Mail'
import React from 'react'


interface EmailProps {
  emailAddress: string
}
const EmailButton: React.FC<EmailProps> = ({ emailAddress }) => {
  return (
    <RotatingCard href={`mailto:${emailAddress}`}>
      <Mail sx={{ fontSize: '18px', color: 'red' }} />
    </RotatingCard>
  )
}

export default EmailButton
