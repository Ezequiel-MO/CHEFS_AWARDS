import { FC } from 'react'
import { Icon } from '@iconify/react'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'
import { IconButton, Typography } from '@mui/material'
import { useTimelineCtx } from '../../context'

type Props = {
  icon: string
  id: string
  title: string
  description?: string
  time: string
}

export const TimeLineItem: FC<Props> = ({
  id,
  title,
  description,
  icon,
  time
}) => {
  const { setActiveId } = useTimelineCtx()
  return (
    <TimelineItem
      onClick={() => setActiveId(id)}
      className='cursor-pointer rounded-md my-2 bg-med_green text-white hover:bg-med_sand'
    >
      <TimelineOppositeContent sx={{ m: '15px 0' }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <IconButton>
            <Icon icon={icon} color='#de5b00' />
          </IconButton>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '20px', px: 2 }}>
        <Typography variant='h6' component='span'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
