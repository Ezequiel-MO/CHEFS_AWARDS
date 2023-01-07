import { PhotosLayout } from '../../layouts'
import { AccordionParagraph } from '../../molecules'
import { vanguard_photos } from './photos'

export const ADDinnerConcept = () => {
  return (
    <AccordionParagraph
      title='Sources of Inspiration'
      id='panel2a-header'
      event='awards_dinner'
    >
      <p className='indent-5'>
        For this dinner, we have been inspired by the most avant-garde elements
        of the city, although following our common thread: the{' '}
        <span className='italic font-bold'>trencadis</span> . In contrast to the
        previous night, where the chefs tasted Valencian gastronomy and we
        recreated a night of <strong>"Fallas"</strong> , for this night, we
        thought we would show the most modern and avant-garde Valencia through
        the <strong>City of Arts and Sciences</strong> .
      </p>
      <p className='indent-5 mb-5'>
        The <strong>CAC</strong> is the new symbol of the city and the iconic
        image with which many people around the world recognise it. Tonight, in
        addition to the chefs, the protagonists will be the elements of nature
        and trencadis, which are the elements that have inspired the
        construction of the <strong>CAC</strong> . These elements of nature will
        be combined in different ways through the different entertainment
        performances proposed. We will also give the avant-garde touch with the
        projection of govos in the eye and the hologram of the logo of the 50
        restaurants (as an optional element) and the gastronomy based on Nitro,
        without losing sight of the origins of Valencian gastronomy.
      </p>

      <PhotosLayout images={vanguard_photos} />
    </AccordionParagraph>
  )
}
