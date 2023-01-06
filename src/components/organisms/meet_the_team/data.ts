import Sara from '../../../assets/meet_team/profile_pics/sarah.jpg'
import Montse from '../../../assets/meet_team/profile_pics/montse.jpeg'
import Minerva from '../../../assets/meet_team/profile_pics/minerva.jpeg'
import Celia from '../../../assets/meet_team/profile_pics/Celia.jpg'
import Federica from '../../../assets/meet_team/profile_pics/Federica.jpg'
import Maite from '../../../assets/meet_team/profile_pics/maite.jpg'
import Andrea from '../../../assets/meet_team/profile_pics/andrea.jpg'
import Ezequiel from '../../../assets/meet_team/profile_pics/ezequiel.jpeg'

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
    role: 'Supervisor / Consultant',
    labels: [labels[0], labels[1]],
    description:
      'Goals-driven team player with an inner passion for sales and project management within the meeting industry. Montse is a natural-born planner ready to execute, always going the extra mile to create added value for our clients. With more than 20 years of experience in destination management, working on meetings, conferences, and incentive programs. She loves the operational side of events. ',
    email: 'montse@cutt.events',
    more: 'https://www.linkedin.com/in/montse-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Minerva,
    name: 'Minerva Martinez',
    role: 'Supervisor / Project Manager',
    labels: [labels[0], labels[8]],
    description:
      'Minerva is our head of operations. She holds a University degree in Architecture, and she really builds projects! Ridiculously organized, Minerva aces project management. She not only leads most of our larger programs, but she is also really good at editing, designing, and any creative task required in the MICE industry. ',
    email: 'minerva@gmail.com',
    more: 'https://www.linkedin.com/in/minerva-fernandez-fernandez-5b1b3b1b3/'
  },
  {
    avatar: Ezequiel,
    name: 'Oliver Martinez',
    role: 'Creator Strategic Content / Technologist',
    labels: [labels[2], labels[3]],
    description:
      'A Founder of CUTT/events back in 2008, Over the past 5 years, Oliver has embraced a fully digital mindset, and has led the Company to embrace it as well. Oliver is a visionary and a strategic thinker, with a strong focus on innovation and technology. '
  },
  {
    avatar: Maite,
    name: 'Maite Audet',
    role: 'Project Manager / Setups & CAC Coordinator',
    labels: [labels[4], labels[5]],
    description:
      'Born and bred in Barcelona, Maite graduated from the local university in 1991 with a degree and masters in Tourism to add to her qualification as an official guide. Apart from her native Spanish and Catalan, Maite speaks English and French. She joined a DMC in Barcelona - in 1998 and, after a few years, she progressed to become the office director in the Barcelona office. In October 2014, Maite started Lecturing Global tourism and Event Management at CETT_UB (University of Barcelona) and also freelancing for MICE groups.'
  },
  {
    avatar: Sara,
    name: 'Sarah Dambruoso',
    role: 'Project Manager / Guest Relations',
    labels: [labels[7], labels[8]],
    description:
      'Mrs. Trouble-shooter -Sarah is a spicy mix of German efficiency and Latin soul based on Spanish territory. With professionalism and dedication, she will advise you to turn your projects into unforgettable success!'
  },
  {
    avatar: Celia,
    name: 'Celia Jimenez',
    role: 'Project Manager / Set up CAC & Chefs Dinner',
    labels: [labels[4], labels[6]],
    description:
      'Celia has a long professional career, with more than 12 years in the events and tourism sector. She specializes in luxury trade-made incentive events, congresses, annual meetings, and presentations of vehicles in the German and Korean markets. She loves dealing with clients and working side by side with suppliers in order to achieve a 100 % successful event.'
  },
  {
    avatar: Federica,
    name: 'Federica Gaggioli',
    role: 'Key Account Manager / Press & Sponsors',
    labels: [labels[9], labels[10]],
    description:
      'A 360º experience of all the roles played in an event construction. An explosive cocktail of creativity, empathy, meticulousness '
  },

  {
    avatar: Andrea,
    name: 'Andrea Longhini',
    role: 'Key Account Manager / Transportation Manager',
    labels: [labels[11]],
    description:
      'Enthusiastic about life, graduated in philosophy and people lover. Andrea is the right person who listens to you, finds the right solution, and finds the bright side of everything.'
  }
]
