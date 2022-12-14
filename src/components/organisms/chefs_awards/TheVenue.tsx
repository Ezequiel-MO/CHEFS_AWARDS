import { Typography } from '@mui/material'
import { AccordionParagraph } from '../../molecules'
import { useGetVenuePics } from '../../../hooks'
import { Spinner } from '../../atoms'
import { Link } from 'react-router-dom'

export const TheVenue = () => {
  const campoAnibalId = '6398774807088aa63e3a14f7'
  const { isLoading, pics } = useGetVenuePics(campoAnibalId)
  return (
    <AccordionParagraph title='The Venue' id='panel2a-header'>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        Info about the venue
      </Typography>
      <div className='flex flex-wrap justify-start'>
        <div className='w-6/12 sm:w-4/12 px-4'>
          {isLoading ? (
            <Spinner />
          ) : (
            <Link to={`/chef_feast/venue/${campoAnibalId}`}>
              <img
                src={pics[0]}
                alt='Campo Anibal by Night'
                className='shadow-lg rounded max-w-full h-auto border-none cursor-pointer'
              />
            </Link>
          )}
        </div>
      </div>
    </AccordionParagraph>
  )
}
