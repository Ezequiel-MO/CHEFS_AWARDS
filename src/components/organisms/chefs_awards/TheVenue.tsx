import { Typography } from '@mui/material'
import { AccordionParagraph } from '../../molecules'
import NightFacade from '../../../assets/chef_awards/night_facade.jpeg'

export const TheVenue = () => {
  return (
    <AccordionParagraph title='The Venue' id='panel2a-header'>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        Info about the venue
      </Typography>
      <div className='flex flex-wrap justify-start'>
        <div className='w-6/12 sm:w-4/12 px-4'>
          <img
            src={NightFacade}
            alt='Campo Anibal by Night'
            className='shadow-lg rounded max-w-full h-auto border-none cursor-pointer'
          />
        </div>
      </div>
    </AccordionParagraph>
  )
}
