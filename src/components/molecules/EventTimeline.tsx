import { FC } from 'react'
import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import { TimeLineItem } from '../atoms'

interface Props {
  data: {
    id: number
    time: string
    icon: JSX.Element
    title: string
    description: string
  }[]
}

export const EventTimeline: FC<Props> = ({ data }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }}
    >
      {data.map((item) => (
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
