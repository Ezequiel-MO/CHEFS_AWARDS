import { AccordionParagraph, VenueCard } from '../../../molecules'
import { da_venue_research } from '../../awards_dinner/other_venues/photos'

export const ADOtherVenues = () => {
  return (
    <AccordionParagraph
      title='Other areas of CAC that have been considered'
      id='panel5a-header'
      event='awards_dinner'
    >
      <p className='indent-5'>
        For this event , we have decided to offer the{' '}
        <strong>Hemisferic, Palau de les Arts, and Umbracle</strong> for the
        party, but we have also meticulously researched other areas of the CAC
        that could be used for the event, and finally decided on the{' '}
        <strong> Hemisferic , Palau de les Arts, and Umbracle </strong> for the
        following reasons:
      </p>
      <div className='min-h-52 px-5 my-5 flex cursor-pointer justify-center'>
        {da_venue_research.map((item, index) => (
          <div key={item.alt}>
            <VenueCard image={item} index={index} />
          </div>
        ))}
      </div>
    </AccordionParagraph>
  )
}
