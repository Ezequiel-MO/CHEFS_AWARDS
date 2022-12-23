import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { AccordionParagraph } from '../molecules'

interface TheVenueProps {
  event: string
}

export const TheVenue = ({ event }: TheVenueProps) => {
  return (
    <AccordionParagraph title='The Venue' id='panel2a-header' event={event}>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        Info about the venue
      </Typography>
      <Link
        to={`/${event}/venue_details`}
        className='hover:underline cursor-pointer'
      >
        <Typography>Click here to see the venue</Typography>
      </Link>
    </AccordionParagraph>
  )
}
