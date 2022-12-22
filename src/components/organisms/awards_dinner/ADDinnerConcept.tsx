import { Typography } from '@mui/material'
import { PhotosLayout } from '../../layouts'
import { AccordionParagraph } from '../../molecules'
import { vanguard_photos } from './photos'

export const ADDinnerConcept = () => {
  return (
    <AccordionParagraph
      title='Sources of Inspiration'
      id='panel2a-header'
      event='da'
    >
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        <strong>For this dinner</strong> we have been inspired by Valencia's
        most vanguardist features
      </Typography>

      <PhotosLayout images={vanguard_photos} />
    </AccordionParagraph>
  )
}
