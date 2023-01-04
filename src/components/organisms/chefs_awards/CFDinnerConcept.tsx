import { Typography } from '@mui/material'
import { PhotosLayout } from '../../layouts'
import { AccordionParagraph } from '../../molecules'
import { traditions } from './photos'

export const CFDinnerConcept = () => {
  return (
    <AccordionParagraph title='Sources of Inspiration' id='panel2a-header'>
      <Typography paragraph variant='h6' align='left' className='indent-3'>
        <strong>For this dinner</strong> we have been inspired by the the
        traditions and the culture of the region.
      </Typography>
      <PhotosLayout images={traditions} event='CF' />
    </AccordionParagraph>
  )
}
