import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'
import { Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
  children: React.ReactNode
  title: string
  description: string
  time: string
}

export const TimeLineItem: FC<Props> = ({
  children,
  title,
  description,
  time
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: '15px 0' }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>{children}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant='h6' component='span'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  )
}
