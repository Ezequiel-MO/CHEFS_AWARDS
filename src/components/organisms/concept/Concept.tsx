import { AccordionParagraph, RenderPhotos } from '../../molecules'
import { mosaic } from './photos'

export const Concept = () => {
  return (
    <AccordionParagraph
      title='Concept - The Two Valencias'
      id='panel2a-header'
      event='main'
    >
      <p className='indent-5'>
        <strong className='italic'>Valencia</strong> is one of the main cities
        of the Mediterranean. It has managed to combine the old with the modern,
        in a perfect symbiosis, which becomes evident in its architecture. ​
      </p>
      <p>
        <strong className='italic'>Valencia's Old Town</strong> is considered
        one of the largest in Europe, speaking of the noble past of the city,
        both economically and culturally.​ ​
      </p>
      <p>
        On the opposite extreme,{' '}
        <strong className='italic'>Valencia's City of Arts and Sciences</strong>{' '}
        is a futuristic complex designed by the renowned architect Santiago
        Calatrava. ​ ​
      </p>
      <p>
        But Valencia is much more! Visitors can experience it through the smells
        (the smell of orange blossom), the sight (the light of the city), the
        colours (colorful buildings and gardens that form the city) and the
        taste (Valencia is the recognized cradle of "Paella", in addition to
        having a rich and exquisite gastronomy)​ ​ ​
      </p>

      <p className='indent-5'>
        The <strong className='italic'>CUTT/events</strong> team has designed{' '}
        <strong> TWO EXPERIENCES </strong> in which attendees will discover,
        first hand, the city of Valencia, its culture and ,above all, its
        gastronomy. ​In each of the dinners, we will tell a STORY, through
        which, attendees will discover the history of the city through its most
        emblematic festival <strong> "Las Fallas" </strong>(Chef feast); and the
        avant-garde in a journey through the{' '}
        <strong className='italic'>City of Arts and Sciences</strong> and its
        inspiration in nature (
        <strong className='italic'>Gala & Adwards ceremony</strong>)​ ​{' '}
        <p className='indent-5'>
          As a thread conductor of the two experiences, we have chosen an
          element that appears both in the old part of the city, and in the
          modern: THE <strong className='italic'>TRENCADIS</strong> ​ decorates
          façades, ceilings and other architectural elements with small pieces
          of tile in the form of a mosaic.​ ​We can find{' '}
          <strong className='italic'>TRENCADIS</strong> in historical buildings
          such as the Mercat de Colón or the Estació del Nord, this technique
          has evolved and we can also find it in public areas of the{' '}
          <strong className='italic'>City of Arts and Sciences</strong>. The{' '}
          <strong className='italic'>TRENCADIS</strong> is a fusion of tradition
          and the avant-garde, as well as a link between the different buildings
          of the CAC, which is why we have been inspired by it to design the
          <strong className='italic'> CONCEPT</strong> of the{' '}
          <strong> World's 50 Best Restaurants 23</strong>
        </p>
        ​<RenderPhotos images={mosaic} />
      </p>
    </AccordionParagraph>
  )
}
