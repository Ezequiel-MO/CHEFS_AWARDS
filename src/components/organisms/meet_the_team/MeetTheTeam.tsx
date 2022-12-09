import { Grid } from '@mui/material'
import { TeamMemberCard } from '../../molecules'
import { teamMembers } from './data'

export const MeetTheTeam = () => {
  return (
    <>
      <Grid container spacing={2}>
        {teamMembers.slice(0, 2).map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TeamMemberCard {...member} />
          </Grid>
        ))}
      </Grid>
      <hr className='mt-4 border-none' />
      <Grid container spacing={2}>
        {teamMembers.slice(2, 8).map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamMemberCard {...member} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
