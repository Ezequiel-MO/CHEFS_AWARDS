import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import {
  ADDinnerConcept,
  ADOtherVenues,
  TheVenue
} from '../../components/organisms'
import { Budget } from '../detail/Budget'

export const AwardsDinner = () => {
  return (
    <Paper elevation={0} className='p-2 max-w-[900px]'>
      <Typography variant='h1' className='text-med_purple'>
        AWARDS DINNER
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-med_blue_light'>
        Overview
      </Typography>
      <div>
        <ADOtherVenues />
        <ADDinnerConcept />
        <TheVenue event='awards_dinner' />
        <AccordionParagraph
          title='A Walk through the Night'
          id='panel3a-header'
          event='awards_dinner'
        >
          <Link to='/awards_dinner/timeline_details' className='cursor-pointer'>
            <p className='text-lg text-center font-bold italic'>
              Click anywhere on the list for a detailed schedule ...
            </p>
            <ol>
              <li className='bg-med_purple hover:bg-med_blue text-med_white'>
                6pm : Arrival By Bus
              </li>
              <li className='bg-med_purple hover:bg-med_blue text-med_white'>
                6pm - 8pm : Welcome and Red Carpet
              </li>
              <li className='bg-med_purple hover:bg-med_blue text-med_white'>
                6pm - 8pm : Gala Dinner{' '}
              </li>
              <li className='bg-med_purple hover:bg-med_blue text-med_white'>
                8pm - 8.45pm : Walk to Palau de les Arts
              </li>
            </ol>
          </Link>
        </AccordionParagraph>
        <AccordionParagraph
          title='Budget'
          id='panel4a-header'
          event='awards_dinner'
        >
          <Budget event='da' />
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
