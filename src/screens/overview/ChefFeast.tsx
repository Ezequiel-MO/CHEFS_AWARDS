import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import { Budget } from '../detail/Budget'
import {
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
          <Link to='/chef_feast/timeline_details' className='cursor-pointer'>
            <p className='text-lg text-center font-bold italic'>
              Click anywhere on the list for a detailed schedule ...
            </p>
            <ol>
              <li>6pm - 7pm : Arrival By Bus</li>
              <li>6pm - 7pm : Welcome Drinks</li>
              <li>7pm : Mascleta</li>
              <li>7pm - 9pm : Standing Buffet w/Entertainment</li>
              <li>9pm-9.15pm: Fireworks and burn of the Falla</li>
              <li>9.15pm - 11pm : DJ Party</li>
              <li>11pm : Departure by Bus Back to Valencia</li>
            </ol>
          </Link>
        </AccordionParagraph>
        <CFOtherVenues />
        <AccordionParagraph title='Budget' id='panel4a-header'>
          <Budget event='cf' />
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
