import { Paper, Typography, Box } from '@mui/material'
import { LocationWrapper } from '../../components/organisms'
import Slide1 from '../../assets/hemisferic/slide1.png'

export const ADVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5'>
      <Typography variant='h1' className='bg-med_blue text-med_white p-2'>
        City Of Arts And Sciences
      </Typography>
      <Box>
        <Typography variant='h2'>Location</Typography>
        <LocationWrapper venue='CAC' />
      </Box>
      <Box className='mt-5'>
        <Typography variant='h2'>Red Carpet And Gala Dinner</Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Photo Gallery</Typography>
        <div className='flex flex-col items-center'>
          <img src={Slide1} alt='slide1' />
          <iframe
            src='https://3dwarehouse.sketchup.com/ar-view/6f4250323a21285db01f5de0d4c60a8f'
            width={850}
            height={800}
            title='3D View of Hemisferic'
            className='bg-opacity-5'
          />
        </div>
      </Box>
    </Paper>
  )
}
