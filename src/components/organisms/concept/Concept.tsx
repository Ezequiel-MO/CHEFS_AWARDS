import { Typography } from '@mui/material'
import { AccordionParagraph, RenderPhotos } from '../../molecules'
import { new_mosaic, old_mosaic } from './photos'

export const Concept = () => {
  return (
    <AccordionParagraph title='Concept' id='panel2a-header'>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        <strong>Valencia</strong> is one of the main cities of the
        Mediterranean, which has managed to combine the old with the modern, in
        a perfect symbiosis, which is constantly fed by the differences that are
        witnesses of its streets and squares is Valencia. For example, its old
        town, is considered one of the largest in Europe, speaking of the noble
        past of said capital, both economically, and culturally.​ ​ On the
        opposite extreme, we have the City of Arts and Sciences. A futuristic
        complex designed by the renowned architect Santiago Calatrava ​ ​ But
        Valencia is much more! The people who visit our city, can experience it
        through the smells (the smell of orange blossom), the sight (the light
        of the city), the color (for the colorful buildings and gardens that
        form the city) and the taste (Valencia is the recognized cradle of
        "Paella", in addition to having a rich and exquisite gastronomy)​ ​ ​
        And this is what we want to reflect in our presentation: the "two
        Valencias" ​ ​ ​ ​
      </Typography>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        The CUTT/events team has designed TWO EXPERIENCES where attendees will
        discover first hand, the city of Valencia, its culture and above all its
        gastronomy. ​ ​ In each of the dinners, we will tell a STORY, through
        which, the attendees will discover the history of the city through its
        most emblematic festival "Las Fallas" (Chef feast); and the avant-garde
        in a journey through the City of Arts and Sciences and its inspiration
        in nature (Gala & Adwards ceremony)​ ​{' '}
        {/* As a thread conductor of the two
        experiences, we have chosen an element that appears both in the old part
        of the city, as in the modern: THE TRENCADIS  */}
        ​<RenderPhotos images={old_mosaic} />
        ​<RenderPhotos images={new_mosaic} />
      </Typography>
    </AccordionParagraph>
  )
}
