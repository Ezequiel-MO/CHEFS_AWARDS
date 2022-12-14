import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { TimelineCtx } from '../../../context'

export const CFTimeLineDescriptions = () => {
  const { activeId } = useContext(TimelineCtx)
  return (
    <Box>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-med_sand'>
        {activeId}
      </Typography>
    </Box>
  )
}
