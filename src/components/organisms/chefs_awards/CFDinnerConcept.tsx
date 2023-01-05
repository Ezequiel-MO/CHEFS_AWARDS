import { PhotosLayout } from '../../layouts'
import { AccordionParagraph } from '../../molecules'
import { traditions } from './photos'

export const CFDinnerConcept = () => {
  return (
    <AccordionParagraph title='Sources of Inspiration' id='panel2a-header'>
      <p>
        For this day, we have been inspired by one of the most deeply-rooted
        traditions in Valencian culture: Las Fallas has declared a World
        Heritage Site in 2016. The origin of Las Fallas can be found in an
        ancient custom of carpenters who, celebrating the arrival of spring, on
        the night of the 19th burnt in front of their workshops the pieces of
        wood (parots) that they used to raise the lanterns that illuminated them
        during the winter. Little by little, they added old junk and rags to
        this purifying fire, which humanized the "parots" until they became
        "ninots" (each of the papier-mâché figures that make up a "falla"). The
        humor of the Valencians soon gave these ninots the critical and ironic
        sense that they still have today. Today, the Fallas have evolved into
        ephemeral works of art which, in some cases, have millionaire budgets
        <br />
        <strong>The Fallas are enjoyed with the 5 senses:</strong>
      </p>
      <ol>
        <li className='font-bold'>Sight</li>
        <p>Exhibition of the ninot: Falla and fireworks display</p>
        <li className='font-bold'>Smell</li>
        <p>
          Flower offering to the Virgin, and the smell of powder from the
          mascletás and fireworks displays
        </p>
        <li className='font-bold'>Sound</li>
        <p>
          The sound of the mascletás and fireworks displays, and the music of
          the Fallas bands
        </p>
        <li className='font-bold'>Taste</li>
        <p>
          The typical dishes of the Fallas: paella, arroz a banda, fideuá, and
          the typical sweets: mona de pascua, torró, and buñuelos. We propose a
          Paella show cooking and gastronomic tasting
        </p>
        <li className='font-bold'>Touch</li>
        <p>
          The touch of the silky fallas costumes, the touch of the ninot and the
          touch of the flowers.
        </p>
      </ol>
      <p className='my-5'>
        We aim to recreate the Fallas experience in a unique and exclusive way
        for the attendees.
      </p>
      <PhotosLayout images={traditions} event='CF' />
    </AccordionParagraph>
  )
}
