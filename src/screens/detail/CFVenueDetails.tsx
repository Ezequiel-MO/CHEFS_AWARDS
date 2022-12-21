import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../components/organisms'

export const CFVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_green text-med_white p-2'>
        Campo Anibal
      </Typography>
      <Box className='mt-5'>
        <Typography variant='h2'>Venue Description</Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Location</Typography>
        <LocationWrapper venue='Campo Anibal' />
      </Box>
      <Box>
        <Typography variant='h2'>Photo Gallery</Typography>
      </Box>
    </Paper>
  )
}
