import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import { CFDinnerConcept, TheVenue } from '../../components/organisms'

export const ChefFeast = () => {
  return (
    <Paper elevation={0} className='p-2 max-w-[900px]'>
      <Typography variant='h1' className='text-med_sand'>
        CHEF FEAST DINNER
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-med_sand'>
        Overview
      </Typography>
      <div>
        <CFDinnerConcept />
        <TheVenue />
        <AccordionParagraph
          title='A Walk through the Night'
          id='panel3a-header'
        >
          <Link
            to='/chef_feast/timeline_details'
            className='hover:underline cursor-pointer'
          >
            Peek into the night
          </Link>
        </AccordionParagraph>
        <AccordionParagraph title='Photo Gallery' id='panel4a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Team, ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph
          title='Other Venues w/ similar concept'
          id='panel5a-header'
        >
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Team, ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
