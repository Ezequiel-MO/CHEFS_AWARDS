import { Typography } from '@mui/material'
import { AccordionParagraph, VenueCard } from '../../../molecules'
import { venue_research } from './photos'

export const CFOtherVenues = () => {
  return (
    <AccordionParagraph
      title='Other Venues w/ similar concept'
      id='panel5a-header'
    >
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        This is the alternatives research
      </Typography>
      <div className='min-h-52 px-5 my-5 flex cursor-pointer'>
        {venue_research.map((item, index) => (
          <div key={item.alt}>
            <VenueCard image={item} index={index} />
          </div>
        ))}
      </div>
    </AccordionParagraph>
  )
}
