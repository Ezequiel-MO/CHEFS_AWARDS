import { Grid } from '@mui/material'
import { TeamMemberCard } from '../molecules'
import Sara from '../../assets/meet_team/profile_pics/sarah.jpg'
import Montse from '../../assets/meet_team/profile_pics/user-2.jpg'
import Minerva from '../../assets/meet_team/profile_pics/user-5.jpg'
import Cecilia from '../../assets/meet_team/profile_pics/user-11.jpg'
import Federica from '../../assets/meet_team/profile_pics/user-20.jpg'
import Maite from '../../assets/meet_team/profile_pics/user-14.jpg'
import Andrea from '../../assets/meet_team/profile_pics/andrea.jpg'
import Ezequiel from '../../assets/meet_team/profile_pics/user-13.jpg'

const teamMembers = [
  {
    avatar: Montse,
    name: 'Montse Miranda',
    role: 'Event Manager',
    labels: ['Supervisor', 'Client Mngmt'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'montse@cutt.events',
    more: 'https://www.linkedin.com/in/montse-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Minerva,
    name: 'Minerva Martinez',
    role: 'Project Manager',
    labels: ['Supervisor', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'minerva@gmail.com',
    more: 'https://www.linkedin.com/in/minerva-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Ezequiel,
    name: 'Ezequiel Martinez',
    role: 'Designer & Developer',
    labels: ['Strategic Content', 'Signage'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Maite,
    name: 'Maite Audet',
    role: 'Project Manager',
    labels: ['CAC Coordinator', 'Setup'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Sara,
    name: 'Sarah Dambruoso',
    role: 'Project Manager',
    labels: ['Guest Relations', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Cecilia,
    name: 'Celia Jimenez',
    role: 'Project Manager',
    labels: ['setup', 'Chef Dinner'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Federica,
    name: 'Federica Gaggioli',
    role: 'Key Account Manager',
    labels: ['Press', 'Sponsors'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },

  {
    avatar: Andrea,
    name: 'Andrea Longhini',
    role: 'Chef',
    labels: ['Transportation'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
]

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
