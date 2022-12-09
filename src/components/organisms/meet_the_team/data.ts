import Sara from '../../../assets/meet_team/profile_pics/sarah.jpg'
import Montse from '../../../assets/meet_team/profile_pics/user-2.jpg'
import Minerva from '../../../assets/meet_team/profile_pics/user-5.jpg'
import Cecilia from '../../../assets/meet_team/profile_pics/user-11.jpg'
import Federica from '../../../assets/meet_team/profile_pics/user-20.jpg'
import Maite from '../../../assets/meet_team/profile_pics/user-14.jpg'
import Andrea from '../../../assets/meet_team/profile_pics/andrea.jpg'
import Ezequiel from '../../../assets/meet_team/profile_pics/user-13.jpg'

export interface ILabel {
  label: string
  color: string
}

const labels: ILabel[] = [
  { label: 'Supervisor', color: '#ea5933' },
  { label: 'Client Mngmt', color: '#e91e63' },
  { label: 'Strategic Content', color: '#9c27b0' },
  { label: 'Signage', color: '#673ab7' },
  { label: 'CAC Coordinator', color: '#3f51b5' },
  { label: 'Setup', color: '#2196f3' },
  { label: 'Chef Dinner', color: '#03a9f4' },
  { label: 'Guest Relations', color: '#00bcd4' },
  { label: 'Food', color: '#009688' },
  { label: 'Press', color: '#4caf50' },
  { label: 'Sponsors', color: '#8bc34a' },
  { label: 'Transportation', color: '#cddc39' }
]

export const teamMembers = [
  {
    avatar: Montse,
    name: 'Montse Miranda',
    role: 'Event Manager',
    labels: [labels[0], labels[1]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'montse@cutt.events',
    more: 'https://www.linkedin.com/in/montse-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Minerva,
    name: 'Minerva Martinez',
    role: 'Project Manager',
    labels: [labels[0], labels[8]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    email: 'minerva@gmail.com',
    more: 'https://www.linkedin.com/in/minerva-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Ezequiel,
    name: 'Ezequiel Martinez',
    role: 'Designer & Developer',
    labels: [labels[2], labels[3]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Maite,
    name: 'Maite Audet',
    role: 'Project Manager',
    labels: [labels[4], labels[5]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Sara,
    name: 'Sarah Dambruoso',
    role: 'Project Manager',
    labels: [labels[7], labels[8]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Cecilia,
    name: 'Celia Jimenez',
    role: 'Project Manager',
    labels: [labels[4], labels[6]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar: Federica,
    name: 'Federica Gaggioli',
    role: 'Key Account Manager',
    labels: [labels[9], labels[10]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },

  {
    avatar: Andrea,
    name: 'Andrea Longhini',
    role: 'Chef',
    labels: [labels[11]],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
]
