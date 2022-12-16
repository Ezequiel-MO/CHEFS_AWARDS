import { Typography, Paper } from '@mui/material'
import { AccordionParagraph } from '../../components/molecules/Accordion'
import { Briefing, Concept, MeetTheTeam } from '../../components/organisms'

export const MainSection = () => {
  return (
    <Paper elevation={0} className='p-2 max-w-[900px]'>
      <Typography variant='h1' className='text-med_sand'>
        The World's 50 Best Restaurants 2023
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} className='text-med_sand'>
        Presentation
      </Typography>
      <div>
        <Briefing />
        <Concept />
        <AccordionParagraph title='Strategic Approach' id='panel3a-header'>
          <Typography paragraph variant='h6' align='left' className='indent-3'>
            Info about the Strategic Approach ipsum dolor sit amet consectetur
            adipisicing elit
          </Typography>
        </AccordionParagraph>
        <AccordionParagraph title='Meet the Team' id='panel4a-header'>
          <MeetTheTeam />
        </AccordionParagraph>
      </div>
    </Paper>
  )
}
