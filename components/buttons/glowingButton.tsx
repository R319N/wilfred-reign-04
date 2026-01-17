'use client'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'

const GlowingButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  border-radius: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.primary.dark};
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
     color: ${({ theme }) => theme.palette.text.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.primary.main};
  }

  & .material-icon,
  & .material-icons-round,
  & svg {
    font-size: ${({ theme }) => theme.spacing(2)};
  }
`
export default GlowingButton  
