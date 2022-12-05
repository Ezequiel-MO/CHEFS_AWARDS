import { Typography, Paper } from '@mui/material'

import { AccordionParagraph } from '../components/molecules/Accordion'

export const MainSection = () => {
  return (
    <Paper elevation={0} className='p-2'>
      <Typography variant='h1'>CHEFS AWARDS</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Presentation
      </Typography>
      <div>
        <AccordionParagraph title='Briefing' id='panel1a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the briefing ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='Concept' id='panel2a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Concept ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='Strategic Approach' id='panel3a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Strategic Approach ipsum dolor sit amet consectetur
            adipisicing elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='Meet the Team' id='panel4a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Team, ipsum dolor sit amet consectetur adipisicing
            elit
          </Typography>
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
