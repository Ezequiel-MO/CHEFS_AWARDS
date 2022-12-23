import { Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import { ADBudget, ADDinnerConcept, TheVenue } from '../../components/organisms'

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
        <ADDinnerConcept />
        <TheVenue event='da' />
        <AccordionParagraph
          title='A Walk through the Night'
          id='panel3a-header'
          event='da'
        >
          <Link
            to='/awards_dinner/timeline_details'
            className='hover:underline cursor-pointer'
          >
            Peek into the night
          </Link>
        </AccordionParagraph>
        <AccordionParagraph title='Budget' id='panel4a-header' event='da'>
          <ADBudget />
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
