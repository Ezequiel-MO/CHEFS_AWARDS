import { FC } from 'react'
import { Timeline, timelineOppositeContentClasses } from '@mui/lab'
import { TimeLineItem } from '../atoms'
import {
  chef_feast_timeline_data,
  dinner_awards_timeline_data
} from '../../screens'

interface Props {
  type: 'chef_feast' | 'awards_dinner'
}

export const EventTimeline: FC<Props> = ({ type }) => {
  const data =
    type === 'chef_feast'
      ? chef_feast_timeline_data
      : dinner_awards_timeline_data
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
          flex: 0.5
        }
      }}
    >
      {data.map((item) => (
        <a href={`#${item.id}`} key={item.id} onClick={handleClick}>
          <TimeLineItem time={item.time} title={item.title} icon={item.icon} />
        </a>
      ))}
    </Timeline>
  )
}
