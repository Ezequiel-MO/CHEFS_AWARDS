import { Typography, Paper } from '@mui/material'
import { AccordionParagraph } from '../components/molecules/Accordion'
import { TimeLine } from '../components/organisms'

export const ChefFeast = () => {
  return (
    <Paper elevation={0} className='p-2'>
      <Typography variant='h1' className='text-med_sand'>
        CHEF FEAST DINNER
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-med_sand'>
        Overview
      </Typography>
      <div>
        <AccordionParagraph title='Dinner Concept' id='panel1a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the briefing ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='The Venue' id='panel2a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Concept ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='A Timeline of the Night' id='panel3a-header'>
          <TimeLine />
        </AccordionParagraph>
        <AccordionParagraph title='Photo Gallery' id='panel4a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Team, ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
