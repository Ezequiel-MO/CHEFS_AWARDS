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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href')
    const element = document.querySelector(id as string)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Timeline
      className='sticky top-24'
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }}
    >
      {data.map((item) => (
        <a href={`#${item.id}`} key={item.id} onClick={handleClick}>
          <TimeLineItem
            time={item.time}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        </a>
      ))}
    </Timeline>
  )
}
