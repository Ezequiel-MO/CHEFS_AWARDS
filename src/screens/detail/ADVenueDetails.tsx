import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../components/organisms'
import CACVideo from '../../assets/CAC.mp4'

export const ADVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_blue text-med_white p-2'>
        City Of Arts And Sciences . Play the video for the visuals
      </Typography>
      <Box className='w-full'>
        <video src={CACVideo} autoPlay={true} controls={true} />
        <LocationWrapper venue='CAC' />
      </Box>
    </Paper>
  )
}
