import { Grid } from '@mui/material'
import { AccordionParagraph, CUTTCard, TeamMemberCard } from '../../molecules'
import { teamMembers } from './data'

export const MeetTheTeam = () => {
  return (
    <AccordionParagraph title='Meet the Team' id='panel4a-header' event='main'>
      <Grid container spacing={2}>
        {teamMembers.slice(0, 2).map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TeamMemberCard {...member} />
          </Grid>
        ))}
        <Grid item xs={12} sm={4}>
          <CUTTCard />
        </Grid>
      </Grid>
      <hr className='mt-4 border-none' />
      <Grid container spacing={2}>
        {teamMembers.slice(2, 8).map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamMemberCard {...member} />
          </Grid>
        ))}
      </Grid>
    </AccordionParagraph>
  )
}
