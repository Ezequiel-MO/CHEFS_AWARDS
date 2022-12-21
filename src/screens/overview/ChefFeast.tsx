import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import {
  CFBudget,
  CFDinnerConcept,
  CFOtherVenues,
  TheVenue
} from '../../components/organisms'

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
        <TheVenue event='chef_feast' />
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
        <AccordionParagraph title='Budget' id='panel4a-header'>
          <CFBudget />
        </AccordionParagraph>
        <CFOtherVenues />
      </div>
    </Paper>
  )
}
