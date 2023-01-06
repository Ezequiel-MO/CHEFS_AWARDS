import { Box } from '@mui/material'
import { FC } from 'react'

export interface Props {
  label: string
  color: string
}

export const Chip: FC<Props> = ({ label, color }) => {
  return (
    <Box
      className='mx-1 px-2 py-1 text-xs font-bold rounded-full text-white'
      style={{ backgroundColor: color }}
    >
      <p className='text-center text-med_white text-sm'>{label}</p>
    </Box>
  )
}
