import { Grid } from '@mui/material'
import { TeamMemberCard } from '../molecules'
import Sara from '../../assets/meet_team/profile_pics/user-1.jpg'
import Montse from '../../assets/meet_team/profile_pics/user-2.jpg'
import Minerva from '../../assets/meet_team/profile_pics/user-5.jpg'
import Cecilia from '../../assets/meet_team/profile_pics/user-11.jpg'
import Merche from '../../assets/meet_team/profile_pics/user-20.jpg'
import Alicia from '../../assets/meet_team/profile_pics/user-14.jpg'
import Andrea from '../../assets/meet_team/profile_pics/user-16.jpg'
import Ezequiel from '../../assets/meet_team/profile_pics/user-13.jpg'

const teamMembers = [
  {
    avatar: Sara,
    name: 'Sara',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'sara@cutt.events',
    more: 'https://www.linkedin.com/in/sara-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Montse,
    name: 'Montse',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'montse@cutt.events',
    more: 'https://www.linkedin.com/in/montse-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Minerva,
    name: 'Minerva',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'minerva@gmail.com',
    more: 'https://www.linkedin.com/in/minerva-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Cecilia,
    name: 'Cecilia',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'cecilia@cutt.events',

    more: 'https://www.linkedin.com/in/cecilia-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Merche,
    name: 'Merche',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'merche@cutt.events',
    more: 'https://www.linkedin.com/in/merche-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Alicia,
    name: 'Alicia',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'alicia@cutt.events',
    more: 'https://www.linkedin.com/in/alicia-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Andrea,
    name: 'Andrea',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'andrea@cutt.events',
    more: 'https://www.linkedin.com/in/andrea-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Ezequiel,
    name: 'Ezequiel',
    role: 'Chef',
    labels: ['Chef', 'Food'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'ezequiel@cutt.events',
    more: 'https://www.linkedin.com/in/ezequiel-fernandez-fernandez-5b1b3b1b3/'
  }
]

export const MeetTheTeam = () => {
  return (
    <Grid container>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <TeamMemberCard {...member} />
        </Grid>
      ))}
    </Grid>
  )
}
