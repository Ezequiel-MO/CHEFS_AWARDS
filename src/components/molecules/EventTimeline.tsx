import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import {
  DirectionsBusOutlined,
  CelebrationOutlined,
  LocalBarOutlined
} from '@mui/icons-material'
import { TimeLineItem } from '../atoms'

const items_data = [
  {
    id: 1,
    time: '07:30 am',
    icon: <DirectionsBusOutlined />,
    title: 'Bus Arrivals',
    description: ['W/Shuttle service']
  },
  {
    id: 2,
    time: '08:00 pm',
    icon: <CelebrationOutlined />,
    title: 'Entertainment',
    description: ['Welcome Fallero', 'Mascletà']
  },
  {
    id: 3,
    time: '08:00 pm',
    icon: <LocalBarOutlined />,
    title: 'Cocktail Reception',
    description: ['Drinks and Snacks']
  }
]

export const EventTimeline = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }}
    >
      {items_data.map((item) => (
        <TimeLineItem
          key={item.id}
          time={item.time}
          title={item.title}
          description={item.description}
        >
          {item.icon}
        </TimeLineItem>
      ))}
    </Timeline>
  )
}
