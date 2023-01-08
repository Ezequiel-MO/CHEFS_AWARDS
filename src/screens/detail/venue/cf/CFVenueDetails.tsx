import { Paper, Typography } from '@mui/material'
import { LocationWrapper } from '../../../../components/organisms'
import BirdsView from '../../../../assets/chef_awards/birdviews/CFBirdsView.jpg'
import { campo_anibal_photos } from './photos'
import { Slider } from '../../../../components/molecules'

export const CFVenueDetails = () => {
  return (
    <Paper className='w-[1000px] rounded-xl p-5 '>
      <Typography variant='h1' className='bg-med_green text-med_white p-2'>
        Campo Anibal
      </Typography>
      <div className='grid grid-cols-2'>
        <div className='mt-5'>
          <div className='uppercase text-xl text-center font-bold my-5'>
            Location{' '}
            <span className='text-sm italic'>20 mins from Valencia</span>
          </div>
          <LocationWrapper venue='Campo Anibal' />
        </div>
        <div className='my-5'>
          <h1 className='uppercase text-xl text-center font-bold my-5'>
            Bird's Eye View of the Venue
          </h1>
          <div className='overflow-hidden'>
            <img
              src={BirdsView}
              alt='Birds View'
              className='cursor-pointer object-fit hover:scale-105 transition-transform'
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className='uppercase text-xl text-center font-bold'>
          Photo Gallery
        </h1>
        <Slider pics={campo_anibal_photos} event='cf' />
      </div>
    </Paper>
  )
}
