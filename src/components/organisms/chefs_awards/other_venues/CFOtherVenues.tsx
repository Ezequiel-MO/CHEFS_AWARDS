import { AccordionParagraph, VenueCard } from '../../../molecules'
import { cf_venue_research } from './photos'

export const CFOtherVenues = () => {
  return (
    <AccordionParagraph
      title='Other Venues w/ similar concept'
      id='panel5a-header'
    >
      <p className='indent-5'>
        Over the past few weeks, @Montse - our project lead, has been visiting a
        bunch of Venues in the area. After a thoughtful analysis, we have
        decided to focus on <strong>Campo Anibal</strong> for the following
        reasons:
      </p>
      <div className='min-h-52 px-5 my-5 flex cursor-pointer'>
        {cf_venue_research.map((item, index) => (
          <div key={item.alt}>
            <VenueCard image={item} index={index} />
          </div>
        ))}
      </div>
    </AccordionParagraph>
  )
}
