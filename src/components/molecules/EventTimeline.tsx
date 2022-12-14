import { FC } from 'react'
import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import { TimeLineItem } from '../atoms'

interface Props {
  data: {
    id: string
    time: string
    icon: string
    title: string
    description?: string
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
          id={item.id}
          time={item.time}
          title={item.title}
          icon={item.icon}
          description={item.description}
        ></TimeLineItem>
      ))}
    </Timeline>
  )
}
