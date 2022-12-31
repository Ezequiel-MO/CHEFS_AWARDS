import { Paper, Typography, Box } from '@mui/material'
import { RenderPhotos } from '../../../components/molecules'
import { LocationWrapper } from '../../../components/organisms'
import { bird_views } from './photos'

export const CFVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_green text-med_white p-2'>
        Campo Anibal
      </Typography>
      <Box className='mt-5'>
        <Typography variant='h2'>Venue Description</Typography>
      </Box>
      <Box className='mb-5'>
        <Typography variant='h2'>Location</Typography>
        <LocationWrapper venue='Campo Anibal' />
      </Box>
      <Typography variant='h2'>Birdview Venue Locations</Typography>
      <Box className='my-5'>
        <RenderPhotos images={bird_views} />
      </Box>
    </Paper>
  )
}
