import { Paper, Typography, Box } from '@mui/material'

export const ADVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_blue text-med_white p-2'>
        City Of Arts & Sciences
      </Typography>
      <Box className='mt-5'>
        <Typography variant='h2'>Venue Description</Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Location</Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Photo Gallery</Typography>
      </Box>
    </Paper>
  )
}
