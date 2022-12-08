import { Box } from '@mui/material'
import { EventTimeline } from '../molecules'
import {
  DirectionsBusOutlined,
  CelebrationOutlined,
  LocalBarOutlined
} from '@mui/icons-material'
import { FC } from 'react'

const chef_feast_timeline_data = [
  {
    id: 1,
    time: '07:30 am',
    icon: <DirectionsBusOutlined />,
    title: 'Bus Arrivals',
    description: 'W/Shuttle service'
  },
  {
    id: 2,
    time: '08:00 pm',
    icon: <CelebrationOutlined />,
    title: 'Entertainment',
    description: 'Welcome Fallero - Mascletà'
  },
  {
    id: 3,
    time: '08:00 pm',
    icon: <LocalBarOutlined />,
    title: 'Cocktail Reception',
    description: 'Drinks and Snacks'
  }
]

const dinner_awards_timeline_data = [
  {
    id: 1,
    time: '07:30 am',
    icon: <DirectionsBusOutlined />,
    title: 'Photo Call',
    description: 'W/Shuttle service'
  },
  {
    id: 2,
    time: '08:00 pm',
    icon: <CelebrationOutlined />,
    title: 'Entertainment',
    description: 'Welcome Fallero - Mascletà'
  },
  {
    id: 3,
    time: '08:00 pm',
    icon: <LocalBarOutlined />,
    title: 'Cocktail Reception',
    description: 'Drinks and Snacks'
  }
]

interface Props {
  type: 'chef_feast' | 'dinner_awards'
}

export const TimeLine: FC<Props> = ({ type }) => {
  return (
    <Box>
      <EventTimeline
        data={
          type === 'chef_feast'
            ? chef_feast_timeline_data
            : dinner_awards_timeline_data
        }
      />
    </Box>
  )
}
