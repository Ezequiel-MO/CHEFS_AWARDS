import { useState } from 'react'
import { Paper, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { LocationWrapper } from '../../../components/organisms'
import BirdsView from '../../../assets/chef_awards/birdviews/CFBirdsView.jpg'
import { campo_anibal_photos } from './photos'

export const CFVenueDetails = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const prevPic = () => {
    const isFirstPic = currentIndex === 0
    const newIndex = isFirstPic
      ? campo_anibal_photos.length - 1
      : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextPic = () => {
    const isLastPic = currentIndex === campo_anibal_photos.length - 1
    const newIndex = isLastPic ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
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
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div className='absolute top-0 left-0 w-full h-full bg-med_white bg-opacity-10 text-center text-2xl text-med_green font-bold'>
            <p className='pt-5'>{campo_anibal_photos[currentIndex].desc}</p>
          </div>
          <div className='w-full h-full rounded-2xl bg-center bg-contain duration-500'>
            <img
              src={campo_anibal_photos[currentIndex].src}
              alt={campo_anibal_photos[currentIndex].alt}
            />
          </div>
          <div
            onClick={prevPic}
            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-med_white  bg-opacity-40 cursor-pointer'
          >
            <Icon
              icon='mdi:chevron-left-box-outline'
              width={50}
              color='#070c32'
            />
          </div>
          <div
            onClick={nextPic}
            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-med_white bg-opacity-40 cursor-pointer'
          >
            <Icon
              icon='mdi:chevron-right-box-outline'
              width={50}
              color='#070c32'
            />
          </div>
        </div>
      </div>
    </Paper>
  )
}
